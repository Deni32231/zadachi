const ucFirst = (str) => {
  if (!str) return str;

  return str.at(0).toUpperCase() + str.slice(1, str.length);
};

console.log(ucFirst("qwerty"));
