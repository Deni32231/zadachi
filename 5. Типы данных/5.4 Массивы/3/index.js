let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // ? выведет элементы масива и функцию
