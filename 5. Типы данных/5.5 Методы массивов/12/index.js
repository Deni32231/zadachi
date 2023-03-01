function unique(arr) {
  const uniqueArr = [];
  for (let str of arr) {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  }

  return uniqueArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
