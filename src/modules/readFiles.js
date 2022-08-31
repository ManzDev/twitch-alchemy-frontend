// const GLOB = import.meta.glob("../../public/icons/*.svg");
const GLOB = {
  "../../public/icons/html.svg": null,
  "../../public/icons/css.svg": null,
  "../../public/icons/javascript.svg": null,
  "../../public/icons/web-components.svg": null
};

const FILES = Object.keys(GLOB);
export const elements = FILES.map(element => element
  .replace("../../public/icons/", "")
  .replace(".svg", ""));
// console.log(elements);
