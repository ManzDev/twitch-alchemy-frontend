import { playSound } from "../modules/playSound.js";

export const generateElement = (keyword) => {
  const newElement = document.createElement("card-element");
  newElement.setType(keyword);
  return newElement;
};

export const setFeedback = (element, mood) => {
  const resetElement = (element) => element.classList.remove(MOODS[mood]);

  const MOODS = {
    positive: "new",
    negative: "bad",
    duplicated: "bad"
  };
  playSound(mood);
  element.classList.add(MOODS[mood]);
  setTimeout(() => resetElement(element), 500);
};
