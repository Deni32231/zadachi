const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

for (let i = 0; i < 20; i++) {
  console.log(random(1, 5));
}
