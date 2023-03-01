const formatDate = (date) => {
  const nowDate = Date.now();
  const millisecondDiff = nowDate - +date;

  if (millisecondDiff < 1000) {
    return "прямо сейчас";
  } else if (millisecondDiff < 1000 * 60) {
    return `${millisecondDiff / 1000} сек. назад`;
  } else if (millisecondDiff < 1000 * 60 * 60) {
    return `${millisecondDiff / 1000 / 60} мин. назад`;
  } else {
    const year = String(date.getFullYear()).slice(2);
    const month =
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
};

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
