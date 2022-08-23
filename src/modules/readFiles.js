const GLOB = import.meta.glob("../../public/icons/*.svg");
const FILES = Object.keys(GLOB);
export const elements = FILES.map(element => element
  .replace("../../public/icons/", "")
  .replace(".svg", ""));
// console.log(elements);
