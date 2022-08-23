const plop = new Audio("sounds/plop.mp3");

export const playPop = () => {
  plop.currentTime = 0;
  plop.play();
};
