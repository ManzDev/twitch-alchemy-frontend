import elements from "./elements.json";

for (const key of Object.keys(elements)) {
  const recipes = elements[key];
  recipes.forEach((recipe, index) => {
    elements[key][index] = recipe.sort();
  });
}

export { elements };
