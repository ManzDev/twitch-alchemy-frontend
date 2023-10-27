import jsonElements from "./assets/elements.json";

const values = [...new Set(Object.values(jsonElements).flat(Infinity))];

export const checkCards = () => {
  console.log("Checking...");
  const cards = [...document.querySelectorAll("card-element")];

  cards.forEach(card => {
    const type = card.getAttribute("type");

    if (!values.includes(type)) {
      card.classList.add("non-craft");
    }
  });
};

setInterval(() => checkCards(), 2000);
