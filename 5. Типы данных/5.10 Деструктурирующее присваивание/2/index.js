const topSalary = (salaries) => {
  let topSalaryPerson = null;

  Object.entries(salaries).reduce((maxSalary, [name, salary]) => {
    if (maxSalary < salary) {
      maxSalary = salary;
      topSalaryPerson = name;
    }
    return maxSalary;
  }, 0);

  return topSalaryPerson;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
