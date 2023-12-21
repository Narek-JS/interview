/*
 ****************************
 ********** NUMBER **********
 ****************************
 
 . Check if numbers have the same characters or not (isSameFrequency)
 . Calculate the factorial (calcFactorial)
 . Get the power of a number (getPower)
 . Get the Fibonacci number by index (getFibonacciNumberByIndex)
 . Get Fibonacci numbers (getFibonacciNumbers)
 . Check if a number is prime or not (isPrimeNumber)
 . Get the next closest prime number to the given number (getNextClosestPrimeNumber)
 . Get a random number from the minimum to the maximum (getRandomNumberFromMinToMax)
 . Calculate the sum of number characters (calcCharsSum)
 ____________________________
 ****************************    
 */

/******************************************************************************************/
/*********** Check if numbers have the same characters or not (isSameFrequency) ***********/
/******************************************************************************************/

const isSameFrequency = (n1, n2) => {
  const objN1 = {};

  const arrN1 = String(n1).split("");
  const arrN2 = String(n2).split("");

  arrN1.forEach((el) => (objN1[el] = (objN1[el] || 0) + 1));

  for (let i = 0; i < arrN2.length; i++) {
    const el = arrN2[i];
    if (!objN1[el]) {
      return false;
    }
    objN1[el] = objN1[el] - 1;
  }
  return true;
};

isSameFrequency(182, 281);
isSameFrequency(34, 14);
isSameFrequency(3589578, 5879385);
isSameFrequency(22, 222);

/**************************************************************************************/

/***************************************************************/
/*********** Calculate the factorial (calcFactorial) ***********/
/***************************************************************/

/*********** SOLUTION 1 ***********/
const calcFactorial1 = (num) => {
  if (num === 1) {
    return num;
  }
  return num * calcFactorial1(num - 1);
};

calcFactorial1(2);
calcFactorial1(3);
calcFactorial1(4);

/*********** SOLUTION 2 ***********/
const calcFactorial2 = (num) => {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res *= i;
  }

  return res;
};

calcFactorial2(2);
calcFactorial2(3);
calcFactorial2(4);

/*********** SOLUTION 3 ***********/
const calcFactorial3 = (num) => {
  return num === 1 ? 1 : num * calcFactorial3(num - 1);
};

calcFactorial3(2);
calcFactorial3(3);
calcFactorial3(4);

/**************************************************************************************/

/************************************************************/
/*********** Get the power of a number (getPower) ***********/
/************************************************************/

/*********** SOLUTION 1 ***********/
const getPower1 = (pow, num) => {
  if (num <= 0) {
    return 1;
  }

  let res = num;
  for (let i = pow; i > 1; i--) {
    res *= num;
  }
  return res;
};

getPower1(2, 0);
getPower1(2, 2);
getPower1(2, 4);

/*********** SOLUTION 2 ***********/
const getPower2 = (pow, num) => {
  if (num <= 0) {
    return 1;
  }

  if (pow === 1) {
    return num;
  }

  return num * getPower2(pow - 1, num);
};

getPower2(2, 0);
getPower2(2, 2);
getPower2(2, 4);

/**************************************************************************************/

/*************************************************************************************/
/*********** Get the Fibonacci number by index (getFibonacciNumberByIndex) ***********/
/*************************************************************************************/

const getFibonacciNumberByIndex = (index) => {
  if (index <= 2) {
    return 1;
  }

  return (
    getFibonacciNumberByIndex(index - 1) + getFibonacciNumberByIndex(index - 2)
  );
};

getFibonacciNumberByIndex(4);
getFibonacciNumberByIndex(10);
getFibonacciNumberByIndex(28);
getFibonacciNumberByIndex(35);

/**************************************************************************************/

/*******************************************************************/
/*********** Get Fibonacci numbers (getFibonacciNumbers) ***********/
/*******************************************************************/

const getFibonacciNumbers = (n) => {
  let numbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    el = numbers[i - 1] + numbers[i - 2];

    if (el <= n) {
      numbers.push(el);
    } else {
      return numbers;
    }
  }
};

getFibonacciNumbers(100);

/**************************************************************************************/

/*************************************************************************/
/*********** Check if a number is prime or not (isPrimeNumber) ***********/
/*************************************************************************/

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrtNumber = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= sqrtNumber; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

isPrimeNumber(11);

/**************************************************************************************/

/*********************************************************************************************************/
/*********** Get the next closest prime number to the given number (getNextClosestPrimeNumber) ***********/
/*********************************************************************************************************/

const getNextClosestPrimeNumber = (num) => {
  const isPrimeNumber = (n) => {
    if (n < 2) {
      return false;
    }

    const sqrtNumber = Math.ceil(Math.sqrt(n));

    for (let i = 2; i <= sqrtNumber; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  };

  let nextNumber = num + 1;
  while (!isPrimeNumber(nextNumber)) {
    nextNumber += 1;
  }

  return nextNumber;
};

getNextClosestPrimeNumber(7);

/**************************************************************************************/

/*********************************************************************************************************/
/*********** Get a random number from the minimum to the maximum (getRandomNumberFromMinToMax) ***********/
/*********************************************************************************************************/

const getRandomNumberFromMinToMax = (min, max) => {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
};
getRandomNumberFromMinToMax(1, 10);

/**************************************************************************************/

/*****************************************************************************/
/*********** Calculate the sum of number characters (calcCharsSum) ***********/
/*****************************************************************************/

const calcCharsSum = (num) => {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
};
console.log(calcCharsSum(2568));
