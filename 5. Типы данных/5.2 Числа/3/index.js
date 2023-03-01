const readNumber = () => {
  let number;

  do {
    number = prompt("Введите число", 0);

    if (number === null || number === "") return null;
  } while (isNaN(+number));

  return number;
};

alert(`Число: ${readNumber()}`);
