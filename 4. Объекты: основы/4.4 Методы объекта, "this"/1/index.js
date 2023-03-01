function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?  Будет ошибка тк this берется из функции makeUser;
