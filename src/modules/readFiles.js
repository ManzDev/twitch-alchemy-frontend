const ALL_ELEMENTS = import.meta.glob("../../public/icons/*.svg");
const INITIAL_ELEMENTS = {
  "../../public/icons/html.svg": null,
  "../../public/icons/css.svg": null,
  "../../public/icons/javascript.svg": null,
  "../../public/icons/web-components.svg": null,
  "../../public/icons/terminal.svg": null
};

const filterName = (elements) => {
  const FILES = Object.keys(elements);
  return FILES
    .map(element => element
      .replace("../../public/icons/", "")
      .replace(".svg", ""));
};

export const elements = filterName(INITIAL_ELEMENTS);
export const allElements = filterName(ALL_ELEMENTS);
