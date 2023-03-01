const getSecondsToTomorrow = () => {
  const date = new Date();

  const nextDayDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );

  const secondsToTomorrow = Math.round((nextDayDate - date) / 1000);

  return secondsToTomorrow;
};

console.log(getSecondsToTomorrow());
