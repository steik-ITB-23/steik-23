export const getSlug = (inputString: string) => {
  return inputString.replace(/ /g, "-");
};
