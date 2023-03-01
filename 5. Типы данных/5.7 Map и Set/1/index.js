function unique(arr) {
  const set = new Set(arr);
  const uniqueArr = [];

  for (let str of set) {
    uniqueArr.push(str);
  }

  return uniqueArr;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
