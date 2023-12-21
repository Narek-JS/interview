/************************************************/
/*********** setTimeout / setInterval ***********/
/************************************************/

/*********** QUIZ 1 ***********/
var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(incrementCounter, 1000);

/*********** QUIZ 2 ***********/
var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearTimeout(timeoutId);
  }
}

var timeoutId = setTimeout(incrementCounter, 1000);

/*********** QUIZ 3 ***********/
var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(incrementCounter, 0);

/*********** QUIZ 4 ***********/
var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearTimeout(timeoutId);
  }
}

var timeoutId = setTimeout(incrementCounter, 0);

/*********** QUIZ 5 ***********/
var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter === 5) {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(() => {
  incrementCounter();
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

/*********** QUIZ 6 ***********/
function printNumbers(from, to) {
  let current = from;

  function tick() {
    console.log(current);

    if (current === to) {
      clearInterval(intervalId);
    }

    current++;
  }

  tick();
  const intervalId = setInterval(tick, 1000);
}

printNumbers(1, 5);

/*********** QUIZ 7 ***********/
function printMessage(message) {
  console.log(message);
}

function schedulePrint(message, delay) {
  setTimeout(printMessage, delay, message);
}

schedulePrint("Hello", 2000);
schedulePrint("World", 1000);

/*********** QUIZ 8 ***********/

let i = 0;
setTimeout(() => console.log(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}

/*********** QUIZ 9 ***********/
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);

/*********** QUIZ 10 ***********/
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
};

/*********** QUIZ 11 ***********/
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
