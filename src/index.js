import { INITIAL_ELEMENTS, checkAllCombinations } from "./modules/game.js";
import elements from "./assets/elements.js";
import "./components/CardElement.js";
import "./components/ScoreBoard.js";

// eslint-disable-next-line
const icons = import.meta.glob("../public/icons/*.svg");

const removePathAndExtension = (paths) =>
  Object.keys(paths).map((path) =>
    path.replace("../public/icons/", "").replace(".svg", ""));

const initialElements = INITIAL_ELEMENTS;
const allElementsFromImages = removePathAndExtension(icons);

const container = document.querySelector(".container");
const scoreBoard = document.querySelector("score-board");

// Elementos iniciales de partida
initialElements.forEach((name) => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});

const crafteable = checkAllCombinations(initialElements);
const notCrafteable = allElementsFromImages.filter((key) => !crafteable.includes(key));

scoreBoard.setElements(initialElements.length);
scoreBoard.setTotal(crafteable.length);

// Diagnóstico en consola
console.log("Crafteable:", crafteable.sort().join(", "));
console.log("No crafteable:", notCrafteable.sort().join(", "));

// Elementos del JSON que no tienen imagen en public/icons
const checkAllElements = () => {
  Object.keys(elements).forEach((element) => {
    if (!allElementsFromImages.includes(element)) {
      console.log(`${element} in JSON ✅, in Images ❌`);
    }
  });
};

checkAllElements();
