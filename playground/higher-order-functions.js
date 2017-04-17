// function one(name, location) {
//   console.log(name, location);
// }
//
// function two() {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments);
// }
//
// two('Nicholas', 'Millersville');

var add = (a, b) => a + b;

// CHALLENGE -- square - take one number and return square result
var square = (a) => a * a;

var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);

    console.log(`Result is ${res}`);

    return res;
  };
};

console.log(add(99, 1));

var addAndLog = callAndLog(add);
console.log(addAndLog(44, -3));

// CHALLENGE -- create squareAndLog
var squareAndLog = callAndLog(square);
// CHALLENGE -- call squareAndLog with 3
squareAndLog(3);
