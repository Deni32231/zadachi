const camelize = (str) => {
  const arrStr = str.split("-");

  const camelizeArrStr = arrStr.map((item, index) => {
    if (index > 0) {
      item = item[0].toUpperCase() + item.slice(1);
    }

    return item;
  });

  return camelizeArrStr.join("");
};

console.log(camelize("background-color")); // == "backgroundColor";
console.log(camelize("list-style-image")); // == "listStyleImage";
console.log(camelize("-webkit-transition")); // == "WebkitTransition";
