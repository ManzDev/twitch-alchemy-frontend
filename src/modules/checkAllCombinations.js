import jsonElements from "../assets/elements.json";

const jsonEntries = Object.entries(jsonElements);
const scoreBoard = document.querySelector("score-board");

export const checkAllCombinations = (currentElements) => {
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
