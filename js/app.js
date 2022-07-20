const calculator = {
  add: function (x, y) {
    console.log(x + y);
  },
  minus: function (x, y) {
    console.log(x - y);
  },
  times: function (x, y) {
    console.log(x * y);
  },
  divide: function (x, y) {
    console.log(x / y);
  },
  powerOf: function (x, y) {
    console.log(x ** y);
  },
};
calculator.add(5, 1);
calculator.minus(3, 9);
calculator.times(7, 4);
calculator.divide(5, 2);
calculator.powerOf(5, 3);
