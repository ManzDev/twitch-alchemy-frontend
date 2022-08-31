import { elements } from "../assets/elements.js";

const keys = Object.keys(elements);

export const craftCards = (firstElement, secondElement) => {
  const [first, second] = [firstElement, secondElement].sort();

  const result = keys.find(key => {
    const recipes = elements[key];
    return recipes.some(([left, right]) => left === first && right === second);
  });

  return result ? [result] : [];
};
