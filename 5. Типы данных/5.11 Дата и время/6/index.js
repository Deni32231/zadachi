const getSecondsToday = () => {
  date = new Date();

  console.log(date);

  date.setHours(0, 0, 0);

  return (Date.now() - date) / 1000;
};

console.log(getSecondsToday());
