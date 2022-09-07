import elements from "./elements.json";

const keys = Object.keys(elements);

// Muta el JSON a uno con keys ordenadas alfabéticamente
keys.forEach(key => {
  const recipes = elements[key];
  recipes.forEach((recipe, index) => {
    elements[key][index] = recipe.sort();
  });
});

export { elements };
