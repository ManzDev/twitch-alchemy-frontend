import jsonElements from "./assets/elements.json";

const jsonEntries = Object.entries(jsonElements);

export const findCombination = (elements) => {
  const [firstElement, secondElement] = elements.sort();

  const result = jsonEntries.find(([resultElement, combinations]) =>
    combinations.find(([a, b]) => a === firstElement && b === secondElement));

  if (result) {
    console.log(`Elemento generado: ${result[0]}`);
    result[1].forEach(([a, b]) => console.log(`Combinaciones posibles: ${a} + ${b}`));
  } else {
    console.log("No hay combinaciones.");
  }
};
