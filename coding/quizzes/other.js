/*****************************/
/*********** OTHER ***********/
/*****************************/

/*********** QUIZ 1 ***********/
const f = () => {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  displayName();
};

f();

/*********** QUIZ 2 ***********/
const f = () => {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
};

var myFunc = f();
myFunc();

/*********** QUIZ 3 ***********/
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

/*********** QUIZ 4 ***********/
const a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/*********** QUIZ 5 ***********/
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

/*********** QUIZ 6 ***********/
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};

girl();

/*********** QUIZ 7 ***********/
var b = 1;

function outer() {
  var b = 2;

  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }

  inner();
}

outer();

/*********** QUIZ 8 ***********/
let a = 5,
  b = 6;
[a, b] = [b, a];
console.log(`${a} ${b}`);

/*********** QUIZ 9 ***********/
let a = 9;

if (a > 0) {
  let b = 0;

  if (b > 0) {
    let a = 3;
    console.log(a + b);
  }

  b = 4;

  let i = 0;
  while (i < 2) {
    console.log(i + a + b);
    i += 2;
  }

  console.log(i);
}

console.log(a);

/*********** QUIZ 10 ***********/
var x = 5;
console.log(x++ + ++x);

/*********** QUIZ 11 ***********/
var x = 10;
if (true) {
  var x = 20;
}
console.log(x);

/*********** QUIZ 12 ***********/
console.log(typeof undefined === typeof NULL);

/*********** QUIZ 13 ***********/
function foo() {
  var x = 1;
  setTimeout(function () {
    console.log(x);
  }, 1000);
  var x = 2;
}
foo();

/*********** QUIZ 14 ***********/
var x = 10;
function foo() {
  console.log(x);
}
function bar() {
  var x = 20;
  foo();
}
bar();

/*********** QUIZ 15 ***********/
function outer() {
  var x = 1;
  function inner() {
    var x = 2;
    console.log(x);
  }
  inner();
  console.log(x);
}
outer();

/*********** QUIZ 16 ***********/
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1000);
  });
}

async function bar() {
  return await foo();
}

console.log(bar());

/*********** QUIZ 17 ***********/
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function foo() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

foo();
console.log("After foo");

/*********** QUIZ 18 ***********/
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

/*********** QUIZ 19 ***********/
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*********** QUIZ 20 ***********/
function foo() {
  console.log(this);
}

const obj = {
  bar: foo,
};

obj.bar();

/*********** QUIZ 21 ***********/
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.greet();

/*********** QUIZ 22 ***********/
const foo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 1000);
  });
};

(async () => {
  try {
    const result = await foo();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
console.log("End");

/*********** QUIZ 23 ***********/
const values = [1, 2, 3];
const doubled = values.map((x) => x * 2);
console.log(doubled);

/*********** QUIZ 24 ***********/
const obj = {
  name: "John",
  age: 25,
  city: "New York",
};

const { name, ...rest } = obj;
console.log(name);
console.log(rest);

/*********** QUIZ 25 ***********/
const add = (x) => (y) => x + y;
const increment = add(1);
console.log(increment(5));

/*********** QUIZ 26 ***********/
console.log(typeof typeof 1);

/*********** QUIZ 27 ***********/
const numbers = [33, 2, 8];
numbers.sort();
console.log(numbers[1]);

/*********** QUIZ 28 ***********/
console.log(018 - 015);

/*********** QUIZ 29 ***********/
const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);

/*********** QUIZ 30 ***********/
console.log("This is a string." instanceof String);

/*********** QUIZ 31 ***********/
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));
console.log(false == "0");
console.log(false === "0");

/*********** QUIZ 32 ***********/
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/*********** QUIZ 33 ***********/
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

/*********** QUIZ 34 ***********/
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();

/*********** QUIZ 35 ***********/

var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
