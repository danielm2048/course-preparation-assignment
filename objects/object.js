// Hello, object
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

// Sum object properties
const sumOfSalaries = (salaries) => {
  let sum = 0;

  for (let salary in salaries) {
    sum += salaries[salary];
  }

  return sum;
}

// Multiply numeric property values by 2
const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}