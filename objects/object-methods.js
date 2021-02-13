// Create a calculator
const calculator = {
  read() {
    this.num1 = prompt("Enter first number");
    this.num2 = prompt("Enter second number");
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
}

// Chaining
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
  }
};