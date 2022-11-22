export const formatName = (nameObj) => {
  return nameObj
    .map(({ family, given }) => [given.join(" "), family.join(" ")].join(" "))
    .join("/");
};
