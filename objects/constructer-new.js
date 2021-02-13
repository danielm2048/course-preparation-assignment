// Two functions - one object
const obj = {};

function A() { return obj; }
function B() { return obj; }

// Create new calculator
function Calculator() {
  this.read = function () {
    this.num1 = parseInt(prompt("Enter first number"));
    this.num2 = parseInt(prompt("Enter second number"));
  }

  this.sum = function () {
    return this.num1 + this.num2;
  }

  this.mul = function () {
    return this.num1 * this.num2;
  }
}

// Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += parseInt(prompt("Enter number"));
  }
}
