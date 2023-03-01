let user = {
  name: "Василий Иванович",
  age: 35,
};

let userJson = JSON.stringify(user);

let newUser = JSON.parse(userJson);

console.log(newUser);
