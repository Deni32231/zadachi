const extractCurrencyValue = (str) => {
  return +str.slice(1, str.length);
};

console.log(extractCurrencyValue("$120"));
