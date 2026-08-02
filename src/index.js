import { INITIAL_ELEMENTS, checkAllCombinations } from "./modules/game.js";
import "./components/CardElement.js";
import "./components/ScoreBoard.js";

const container = document.querySelector(".container");
const scoreBoard = document.querySelector("score-board");

// Elementos iniciales de partida
INITIAL_ELEMENTS.forEach((name) => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});

const crafteable = checkAllCombinations(INITIAL_ELEMENTS);

scoreBoard.setElements(INITIAL_ELEMENTS.length);
scoreBoard.setTotal(crafteable.length);
