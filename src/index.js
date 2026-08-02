import { INITIAL_ELEMENTS, checkAllCombinations } from "./modules/game.js";
import "./components/CardElement.js";
import "./components/ScoreBoard.js";

const container = document.querySelector(".container");
const scoreBoard = document.querySelector("score-board");

container.addEventListener("dragover", (ev) => ev.preventDefault());
container.addEventListener("drop", (ev) => ev.preventDefault());

const createCard = (type) => {
  const element = document.createElement("card-element");
  element.setAttribute("type", type);
  container.appendChild(element);
};

const STARTING_CARDS = INITIAL_ELEMENTS.length;
const crafteable = checkAllCombinations(INITIAL_ELEMENTS);

crafteable.slice(0, STARTING_CARDS).forEach(createCard);

scoreBoard.setElements(STARTING_CARDS);
scoreBoard.setTotal(crafteable.length);
