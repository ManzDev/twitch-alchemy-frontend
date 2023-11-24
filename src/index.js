import { allElementsFromImages } from "./modules/readFiles.js";
import { checkAllCombinations } from "./modules/checkAllCombinations.js";
import "./modules/findCombination.js";
import jsonElements from "./assets/elements.json";
import "./components/CardElement.js";
import "./components/ScoreBoard.js";
import "./components/GameSaver.js";

const container = document.querySelector(".container");
const scoreBoard = document.querySelector("score-board");
const gameSaver = document.querySelector("game-saver");

// Creamos los elementos iniciales de partida
const initialElements = gameSaver.getSavedElements();

allElementsFromImages
  .filter((element) => initialElements.includes(element))
  .forEach(name => {
    const element = document.createElement("card-element");
    element.setAttribute("type", name);
    container.appendChild(element);
  });

const jsonEntries = Object.entries(jsonElements);
const allCrafteableElements = [...new Set(jsonEntries.flat(Infinity))];

// console.log({ initialElements, allElementsFromImages, allCrafteableElements });

scoreBoard.setElements(initialElements.length);
scoreBoard.setTotal(allCrafteableElements.length);

const crafteable = checkAllCombinations(structuredClone(initialElements));
const notCrafteable = allElementsFromImages.filter(key => !crafteable.includes(key));

const sortedCrafteable = crafteable.sort();
console.log("Crafteable: ", sortedCrafteable.slice(0, 100), sortedCrafteable.slice(100));
console.log("No crafteable: ", notCrafteable.sort());

// Comprueba los elementos del JSON que no tienen imagen en public/icons
const checkAllElements = () => {
  allCrafteableElements.forEach(element => {
    const existImage = allElementsFromImages.includes(element);
    const imagesCheck = existImage ? "✅" : "❌";
    !existImage && console.log(`${element} in JSON ✅, in Images ${imagesCheck}`);
  });
};

checkAllElements();
