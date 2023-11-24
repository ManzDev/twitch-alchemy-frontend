// eslint-disable-next-line
const ALL_ELEMENTS = import.meta.glob("../../public/icons/\*.svg");

const removePathAndExtension = (elements) =>
  Object.keys(elements).map(element =>
    element.replace("../../public/icons/", "")
      .replace(".svg", ""));

export const allElementsFromImages = removePathAndExtension(ALL_ELEMENTS);

export const defaultElements = ["html", "css", "javascript", "web-components", "terminal"];
