export const toCapitalize = (text) => {
  const firstLetter = text[0].toUpperCase();
  const rest = text.substring(1).toLowerCase().replaceAll("-", " ");
  return firstLetter + rest;
};
