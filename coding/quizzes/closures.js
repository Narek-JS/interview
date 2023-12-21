/********************************/
/*********** Closures ***********/
/********************************/

/*********** QUIZ 1 ***********/
let x = 7;

const a = (y) => {
  return x + y;
};

const b = (c) => {
  let x = 99;
  return c(4);
};

console.log(b(a));

/*********** QUIZ 2 ***********/
function outer() {
  var x = 5;

  function inner() {
    var x = 10;
    console.log(x);
  }

  return inner;
}

var closureFunc = outer();
closureFunc();

/*********** QUIZ 3 ***********/
function createCounter() {
  var count = 0;

  return function increment() {
    count++;
    console.log(count);
  };
}

var counter = createCounter();
counter();
counter();

/*********** QUIZ 4 ***********/
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

var closureFunc = outer(5);
console.log(closureFunc(3));

/*********** QUIZ 5 ***********/
function outer() {
  var x = 2;

  function inner() {
    var y = 3;
    console.log(x + y);
  }

  return inner;
}

var closure1 = outer();
var closure2 = outer();

closure1();
closure2();

/*********** QUIZ 6 ***********/
function outer() {
  var x = 10;

  function inner(y) {
    return function (z) {
      return x + y + z;
    };
  }

  return inner;
}

var closureFunc = outer()(5);
var result = closureFunc(3);
console.log(result);

/*********** QUIZ 7 ***********/
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*********** QUIZ 8 ***********/
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  x = 5;

  return inner;
}

var closureFunc = outer();
var result = closureFunc();

/*********** QUIZ 9 ***********/
function addNumbers(x) {
  return function (y) {
    return x + y;
  };
}

var addTwo = addNumbers(2);
console.log(addTwo(3));
console.log(addNumbers(5)(7));

/*********** QUIZ 10 ***********/
var funcs = [];

for (var i = 0; i < 5; i++) {
  funcs.push(function () {
    console.log(i);
  });
};

funcs.forEach(function (func) {
  func();
});

/*********** QUIZ 11 ***********/
function outer() {
  var x = 10;

  function inner() {
    return x;
  }

  x = 5;

  return inner();
}

var result = outer();

/*********** QUIZ 12 ***********/
function createCounter() {
  var count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

var counter = createCounter();
counter.increment();
console.log(counter.getValue());
