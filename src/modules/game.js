import elements from "../assets/elements.js";

const recipes = Object.entries(elements);

export const INITIAL_ELEMENTS = ["html", "css", "javascript", "web-components", "terminal"];

export const UNLOCKS = [
  { card: "upgrade", at: 150 },
  { card: "downgrade", at: 200 }
];

// Devuelve las cartas desbloqueables según el número de cartas distintas del jugador.
export const getUnlocks = (cardCount) =>
  UNLOCKS.filter((unlock) => cardCount >= unlock.at).map((unlock) => unlock.card);

// Devuelve el elemento que se craftea combinando firstElement + secondElement
// (undefined si no existe esa combinación). No importa el orden.
export const findRecipe = (firstElement, secondElement) => {
  const result = recipes.find(([, combinations]) =>
    combinations.some(([left, right]) =>
      (left === firstElement && right === secondElement) ||
      (left === secondElement && right === firstElement)
    )
  );
  return result?.[0];
};

// API usada por el juego: devuelve [resultado] o [].
export const craftCards = (firstElement, secondElement) => {
  const result = findRecipe(firstElement, secondElement);
  return result ? [result] : [];
};

// Partiendo de los elementos iniciales, devuelve todos los elementos
// alcanzables encadenando crafteos.
export const checkAllCombinations = (currentElements) => {
  const crafteable = new Set(currentElements);
  let changed = true;

  while (changed) {
    changed = false;
    recipes.forEach(([result, combinations]) => {
      if (crafteable.has(result)) return;
      if (combinations.some(([a, b]) => crafteable.has(a) && crafteable.has(b))) {
        crafteable.add(result);
        changed = true;
      }
    });
  }

  return [...crafteable];
};

export const toCapitalize = (text) => {
  const firstLetter = text[0].toUpperCase();
  const rest = text.substring(1).toLowerCase().replaceAll("-", " ");
  return firstLetter + rest;
};
