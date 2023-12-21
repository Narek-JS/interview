/*******************************/
/*********** Promise ***********/
/*******************************/

/*********** QUIZ 1 ***********/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

console.log("End");

/*********** QUIZ 2 ***********/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed"));
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("End");

/*********** QUIZ 3 ***********/
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then((result) => {
    throw new Error("Error occurred");
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("End");

/*********** QUIZ 4 ***********/
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});

Promise.all([promise1, promise2]).then((results) => {
  console.log(results);
});

console.log("End");

/*********** QUIZ 5 ***********/
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error("Failed"));
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("End");

/*********** QUIZ 6 ***********/
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Operation failed"));
    }, 2000);
  });
}

async function performOperation() {
  try {
    await asyncOperation();
    console.log("Operation successful");
  } catch (error) {
    console.log(error.message);
  }
}

performOperation();
console.log("End");

/*********** QUIZ 7 ***********/
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 2000);
  });
}

async function performOperation() {
  try {
    const result = await asyncOperation();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

performOperation();
console.log("End");

/*********** QUIZ 8 ***********/
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 2000);
  });
}

async function performOperation() {
  const result = await asyncOperation();
  console.log(result);
}

performOperation().catch((error) => {
  console.log(error.message);
});

console.log("End");

/*********** QUIZ 9 ***********/
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation successful");
    }, 2000);
  });
}

function performOperation() {
  asyncOperation()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

performOperation();
console.log("End");
