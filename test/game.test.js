import { test } from "node:test";
import assert from "node:assert/strict";
import { findRecipe, craftCards, checkAllCombinations, toCapitalize, getUnlocks } from "../src/modules/game.js";
import elements from "../src/assets/elements.js";

const INITIAL_ELEMENTS = ["html", "css", "javascript", "web-components", "terminal"];

const sortedPair = ([a, b]) => [a, b].sort();

test("craftCards devuelve la carta correcta para recetas conocidas", () => {
  assert.deepEqual(craftCards("html", "css"), ["tailwindcss"]);
  assert.deepEqual(craftCards("css", "html"), ["tailwindcss"]);
  assert.deepEqual(craftCards("css", "css"), ["bootstrap"]);
  assert.deepEqual(craftCards("terminal", "terminal"), ["bash"]);
});

test("craftCards no depende del orden de los ingredientes", () => {
  for (const combinations of Object.values(elements)) {
    for (const [a, b] of combinations) {
      assert.equal(findRecipe(a, b), findRecipe(b, a), `${a}+${b}`);
    }
  }
});

test("craftCards devuelve [] para combinaciones inexistentes", () => {
  assert.deepEqual(craftCards("no-existe", "html"), []);
  assert.deepEqual(craftCards("no-existe", "no-existe"), []);
});

test("toda receta del JSON es crafteable y apunta a una carta real", () => {
  const keys = new Set(Object.keys(elements));

  for (const combinations of Object.values(elements)) {
    for (const [a, b] of combinations) {
      const [resultado] = craftCards(a, b);
      assert.ok(resultado, `${a}+${b} tiene que producir una carta`);
      assert.ok(keys.has(resultado), `el resultado ${resultado} debe existir en el JSON`);
    }
  }
});

test("ninguna receta usa ingredientes que no se puedan conseguir", () => {
  const keys = new Set(Object.keys(elements));
  const bases = new Set([...INITIAL_ELEMENTS, "upgrade", "downgrade"]);

  for (const [a, b] of Object.values(elements).flat()) {
    assert.ok(keys.has(a) || bases.has(a), `${a} no tiene receta propia ni es inicial`);
    assert.ok(keys.has(b) || bases.has(b), `${b} no tiene receta propia ni es inicial`);
  }
});

test("checkAllCombinations no muta la entrada y siempre es determinista", () => {
  const input = [...INITIAL_ELEMENTS];
  const first = checkAllCombinations(input);
  const second = checkAllCombinations(input);

  assert.deepEqual(input, INITIAL_ELEMENTS);
  assert.deepEqual(first, second);
});

test("con los elementos iniciales se alcanzan 256 cartas (251 + 5 iniciales)", () => {
  const crafteable = checkAllCombinations(INITIAL_ELEMENTS);
  assert.equal(crafteable.length, 256);
  assert.equal(crafteable.length, new Set(crafteable).size);
});

test("checkAllCombinations incluye los iniciales y no los que dependen de upgrade/downgrade", () => {
  const crafteable = new Set(checkAllCombinations(INITIAL_ELEMENTS));

  INITIAL_ELEMENTS.forEach((element) => assert.ok(crafteable.has(element)));

  const noCrafteables = [
    "opera", "netscape", "netbeans", "hono", "mojo", "brainfuck", "underscore",
    "bem", "befunge", "eclipse", "elixir", "lisp", "zig", "bun", "clojure",
    "cobol", "codesandbox", "github", "threejs", "milligram", "backbone",
    "gitlab", "angularjs", "nginx", "unix", "asm", "git", "zip", "cssnano",
    "less", "bitbucket", "chatgpt", "dbase", "svn", "prettier", "unocss",
    "x", "manz9000"
  ];
  noCrafteables.forEach((element) => assert.ok(!crafteable.has(element), `${element} no deberia ser alcanzable`));
});

test("con upgrade y downgrade se alcanzan todas las cartas del JSON", () => {
  const crafteable = new Set(checkAllCombinations([...INITIAL_ELEMENTS, "upgrade", "downgrade"]));
  Object.keys(elements).forEach((key) => assert.ok(crafteable.has(key), `${key} no alcanzable`));
});

test("todos los resultados de craftCards son alcanzables", () => {
  const crafteable = new Set(checkAllCombinations(INITIAL_ELEMENTS));
  const pairs = [...crafteable].flatMap((a) => [...crafteable].map((b) => [a, b]));

  for (const [a, b] of pairs) {
    const [result] = craftCards(a, b);
    if (result) assert.ok(crafteable.has(result), `${a}+${b} craftea ${result}, que no es alcanzable`);
  }
});

test("toCapitalize", () => {
  assert.equal(toCapitalize("html"), "Html");
  assert.equal(toCapitalize("web-components"), "Web components");
  assert.equal(toCapitalize("CSS"), "Css");
});

// Garantias de datos usadas por el juego
test("el orden de las recetas es coherente entre craftCards y checkAllCombinations", () => {
  const pairs = Object.values(elements).flat().map(sortedPair);

  for (const [a, b] of pairs) {
    const result = findRecipe(a, b);
    assert.ok(result, `findRecipe(${a}, ${b}) no deberia fallar`);
    assert.ok(elements[result].some((recipe) => sortedPair(recipe).join() === sortedPair([a, b]).join()));
  }
});

test("getUnlocks respeta los umbrales de desbloqueo", () => {
  assert.deepEqual(getUnlocks(149), []);
  assert.deepEqual(getUnlocks(150), ["upgrade"]);
  assert.deepEqual(getUnlocks(199), ["upgrade"]);
  assert.deepEqual(getUnlocks(200), ["upgrade", "downgrade"]);
});

test("upgrade y downgrade solo se obtienen por desbloqueo, nunca por crafteo", () => {
  assert.ok(!(elements.upgrade && elements.upgrade.length));
  assert.ok(!(elements.downgrade && elements.downgrade.length));
  for (const [a, b] of Object.values(elements).flat()) {
    assert.notEqual(craftCards(a, b)[0], "upgrade", `${a}+${b} no deberia producir upgrade`);
    assert.notEqual(craftCards(a, b)[0], "downgrade", `${a}+${b} no deberia producir downgrade`);
  }
});

test("totales del scoreboard segun los desbloqueos", () => {
  const base = checkAllCombinations(INITIAL_ELEMENTS).length;
  assert.equal(base, 256);
  assert.equal(checkAllCombinations([...INITIAL_ELEMENTS, "upgrade"]).length, 269);
  assert.equal(checkAllCombinations([...INITIAL_ELEMENTS, "downgrade"]).length, 285);
  assert.equal(checkAllCombinations([...INITIAL_ELEMENTS, "upgrade", "downgrade"]).length, 296);
});
