// eslint-disable-next-line
const ALL_ELEMENTS = import.meta.glob("../../public/icons/\*.svg");

const removePathAndExtension = (elements) =>
  Object.keys(elements).map(element =>
    element.replace("../../public/icons/", "")
      .replace(".svg", ""));

export const allElementsFromImages = removePathAndExtension(ALL_ELEMENTS);

const deafultCandidates = ["html", "css", "javascript", "web-components", "terminal"];

// Check if initialCandidates really exists
export const defaultElements = allElementsFromImages.filter((element) => deafultCandidates.includes(element));
