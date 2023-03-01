const aclean = (arr) => {
  const uniqueMap = arr.reduce((map, arrWord) => {
    const sortSymbs = arrWord.toLowerCase().split("").sort().join("");

    map.set(sortSymbs, arrWord);

    return map;
  }, new Map());

  const uniqueArr = Array.from(uniqueMap.values());

  return uniqueArr;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
