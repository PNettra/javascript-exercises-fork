const add = function(a, b) {
	  return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    return arr.reduce((obj, key) => {
      return obj + (key);}, 0)
};

const multiply = function(arr) {
    return arr.reduce((obj, key) => {
      return obj * key;}, 1)
};

const power = function(a, b) {
    return a ** b;
};

const factorial = function(a) {
    let arr = [];

    //i = a; i >= 0; i--
    for (i = 1; i <= a; i++) {
      if (i == 0 || i == 1) {
        arr.push(1);
      } else {
        arr.push(i);
      }
    }

    // iterative multiplying is already done with reduce
    return arr.reduce((obj, key) => {
      return obj * key;}, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
