const sumInput = () => {
  const arr = [];
  let userInput;

  do {
    userInput = prompt("Введите число");

    if (!isFinite(userInput)) break;

    arr.push(+userInput);
  } while (userInput);

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
};

alert(sumInput());
