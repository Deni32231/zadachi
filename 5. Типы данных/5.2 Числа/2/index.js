//Почему 6.35.toFixed(1) == 6.3? - 6.35 имеет представление 6.349999..

console.log((6.35).toFixed(100));

console.log(Math.round(6.35 * 10) / 10);
