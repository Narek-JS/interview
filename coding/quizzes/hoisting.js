/********************************/
/*********** Hoisting ***********/
/********************************/

/*********** QUIZ 1 ***********/
var foo = 5;
function foo() {}
console.log(foo);

/*********** QUIZ 2 ***********/
console.log(x);
var x = 5;

/*********** QUIZ 3 ***********/
function foo() {
  console.log(x);
  var x = 10;
}

foo();

/*********** QUIZ 4 ***********/
console.log(a);
var a = 10;

/*********** QUIZ 5 ***********/
console.log(a);
var a;
a = 10;

/*********** QUIZ 6 ***********/
console.log(a);
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
foo();

/*********** QUIZ 7 ***********/
function foo() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
foo();

/*********** QUIZ 8 ***********/
console.log(foo());

function foo() {
  return "Hello, world!";
}

/*********** QUIZ 9 ***********/
var x = 1;
function outer() {
  console.log(x);
  var x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();

function outer() {
  console.log(x);
  function inner() {
    console.log(x);
  }
  var x = 2;
  inner();
}
outer();

/*********** QUIZ 10 ***********/

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
