import "./components/CardElement.js";
import { elements, allElements as allImageElements } from "./modules/readFiles.js";
import resultElements from "./assets/elements.json";

const container = document.querySelector(".container");

elements.forEach(name => {
  const element = document.createElement("card-element");
  element.setAttribute("type", name);
  container.appendChild(element);
});

// Test

const resultCrafteableElements = Object.keys(resultElements).sort();
const allCrafteableElements = [...new Set(Object.entries(resultElements).flat(Infinity))];
// console.log(allImageElements);

const checkAllElements = () => {
  allCrafteableElements.forEach(element => {
    const existImage = allImageElements.includes(element);
    const imagesCheck = existImage ? "✅" : "❌";
    !existImage && console.log(`${element} in JSON ✅, in Images ${imagesCheck}`);
  });
};

const checkAllCombinations = (currentElements) => {
  const iterableElements = Object.entries(resultElements);
  let i = 0;

  while (i < iterableElements.length) {
    const [resultItem, combinations] = iterableElements[i];
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

  console.log(currentElements);
};

window.findCombination = (elements) => {
  const [firstElement, secondElement] = elements.sort();

  const iterableElements = Object.entries(resultElements);

  const result = iterableElements.find(([resultElement, combinations]) => {
    return combinations.find(([a, b]) => a === firstElement && b === secondElement);
  });

  if (result) {
    console.log("Elemento generado: " + result[0]);
    result[1].forEach(([a, b]) => console.log(`Combinaciones posibles: ${a} + ${b}`));
  } else {
    console.log("No hay combinaciones.");
  }
};

const initialElements = structuredClone(elements);
checkAllElements();
checkAllCombinations(initialElements);
