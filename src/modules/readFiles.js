// eslint-disable-next-line
const ALL_ELEMENTS = import.meta.glob("../../public/icons/\*.svg");
const INITIAL_ELEMENTS = {
  "../../public/icons/html.svg": null,
  "../../public/icons/css.svg": null,
  "../../public/icons/javascript.svg": null,
  "../../public/icons/web-components.svg": null,
  "../../public/icons/terminal.svg": null,
  // "../../public/icons/upgrade.svg": null,
  // "../../public/icons/downgrade.svg": null,
};

const removePathAndExtension = (elements) =>
  Object.keys(elements).map(element =>
    element.replace("../../public/icons/", "")
      .replace(".svg", ""));

export const initialElements = removePathAndExtension(INITIAL_ELEMENTS);
export const allElementsFromImages = removePathAndExtension(ALL_ELEMENTS);
