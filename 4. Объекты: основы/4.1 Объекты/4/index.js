let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sumSalary = 0;

for (key in salaries) {
  sumSalary += salaries[key];
}

console.log(sumSalary);
