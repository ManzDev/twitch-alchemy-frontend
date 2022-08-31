const SOUNDS = {
  plop: new Audio("sounds/plop.mp3"),
  negative: new Audio("sounds/negative.mp3"),
  positive: new Audio("sounds/positive.mp3"),
  bsod: new Audio("sounds/bsod.mp3"),
  duplicated: new Audio("sounds/duplicated.mp3")
};

export const playSound = (name) => {
  const sound = SOUNDS[name];
  sound.currentTime = 0;
  sound.play();
};
