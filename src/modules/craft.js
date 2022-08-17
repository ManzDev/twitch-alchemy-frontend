export const craft = (element1, element2) => {
  const results = [];

  const newElement = document.createElement("card-element");
  newElement.setAttribute("type", "babel");
  results.push(newElement);

  return results;
};
