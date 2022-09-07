import { initialElements, allElementsFromImages } from "./modules/readFiles.js";
import jsonElements from "./assets/elements.json";
import "./components/CardElement.js";
import "./components/ScoreBoard.js";

const container = document.querySelector(".container");
const scoreBoard = document.querySelector("score-board");

// Creamos los elementos iniciales de partida
initialElements.forEach(name => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});

const jsonEntries = Object.entries(jsonElements);
const allCrafteableElements = [...new Set(jsonEntries.flat(Infinity))];

console.log({ initialElements, allElementsFromImages, allCrafteableElements });

scoreBoard.setElements(initialElements.length);
scoreBoard.setTotal(allCrafteableElements.length);

// Comprueba los elementos del JSON que no tienen imagen en public/icons
/*
const checkAllElements = () => {
  allCrafteableElements.forEach(element => {
    const existImage = allElementsFromImages.includes(element);
    const imagesCheck = existImage ? "✅" : "❌";
    !existImage && console.log(`${element} in JSON ✅, in Images ${imagesCheck}`);
  });
};
*/

const checkAllCombinations = (currentElements) => {
  let i = 0;

  while (i < jsonEntries.length) {
    const [resultItem, combinations] = jsonEntries[i];
    combinations.forEach(([firstElement, secondElement]) => {
      const isCrafteable =
        !currentElements.includes(resultItem) &&
        currentElements.includes(firstElement) &&
        currentElements.includes(secondElement);

      if (isCrafteable) {
        i = 0;
        currentElements.push(resultItem);
      }
    });
    i++;
  }

  scoreBoard.setTotal(currentElements.length);
  return currentElements;
};

/*
window.findCombination = (elements) => {
  const [firstElement, secondElement] = elements.sort();

  const result = jsonEntries.find(([resultElement, combinations]) => {
    return combinations.find(([a, b]) => a === firstElement && b === secondElement);
  });

  if (result) {
    console.log("Elemento generado: " + result[0]);
    result[1].forEach(([a, b]) => console.log(`Combinaciones posibles: ${a} + ${b}`));
  } else {
    console.log("No hay combinaciones.");
  }
};
*/

// checkAllElements();

const crafteable = checkAllCombinations(structuredClone(initialElements));
const notCrafteable = allElementsFromImages.filter(key => !crafteable.includes(key));

const sortedCrafteable = crafteable.sort();
console.log("Crafteable: ", sortedCrafteable.slice(0, 100), sortedCrafteable.slice(100));
console.log("No crafteable: ", notCrafteable.sort());
