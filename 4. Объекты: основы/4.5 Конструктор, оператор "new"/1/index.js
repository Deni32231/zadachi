// Да

const z = {};

function A() {
  return z;
}
function B() {
  return z;
}

let a = new A();
let b = new B();

alert(a === b); // true
