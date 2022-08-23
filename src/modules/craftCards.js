export const craftCards = (firstElement, secondElement) => {
  const results = [];

  const newElement = document.createElement("card-element");
  newElement.setType("babel");
  results.push(newElement);

  console.log("Crafteo: ", firstElement.type, secondElement.type);
  console.log("Result = ", results.map(el => el.type));

  return results;
};
