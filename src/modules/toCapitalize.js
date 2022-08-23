export const toCapitalize = (text) => {
  const firstLetter = text[0].toUpperCase();
  const rest = text.substring(1).toLowerCase().replace("-", " ");
  return firstLetter + rest;
};
