const calculator = {
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  times: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  powerOf: function (x, y) {
    return x ** y;
  },
};
const plusResults = calculator.add(5, 1);
const minusResults = calculator.minus(plusResults, 9);
const timesResults = calculator.times(minusResults, 4);
const divideResults = calculator.divide(timesResults, 2);
const powerOfResults = calculator.powerOf(divideResults, 2);

console.log(plusResults);
console.log(minusResults);
console.log(timesResults);
console.log(divideResults);
console.log(powerOfResults);
