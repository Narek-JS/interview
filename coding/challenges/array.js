/*
 ***************************
 ********** ARRAY **********
 ***************************
 
 . Check if a value is an array or not (isArray)
 . Check if an array is empty or not (isEmpty)
 . Get the maximum subarray sum (getMaxSubarraySum)
 . Check if all members in the first array have a corresponding value in the second array (hasCorrespondingValue)
 . Get the product of array elements (productOfElements)
 . Flatten nested arrays (flatten)
 . Calculate the big couple product of an array (calcBigCoupleProduct)
 . Get unique elements from an array (getUniqueElementsFromArray)
 . Get pairs whose sum is equal to the target (getPairs)
 . Remove duplicate elements from an array (removeDuplicates)
 . Find the missing number from an array (getMissingNumber)
 . Get duplicate elements from an array (getDuplicateElements)
 . Get chunked arrays (getChunks)
 . Check if an array is symmetric or not (isSymmetric)
 . Find the largest subMatrix from a matrix (findBiggestSubMatrix)
 . Implement the map method for arrays (map)
 . Implement the filter method for arrays (filter)
 . Implement the find method for arrays (find)
 . Implement the forEach method for arrays (forEach)
 . Implement the some method for arrays (some)
 . Implement the every method for arrays (every)
 . Implement the reduce method for arrays (reduce)
  __________________________
 ***************************    
 */

/*********************************************************************/
/*********** Check if a value is an array or not (isArray) ***********/
/*********************************************************************/

/*********** SOLUTION 1 ***********/
const isArray1 = (value) => {
  return Array.isArray(value);
};
isArray1([]);

/*********** SOLUTION 2 ***********/
const isArray2 = (value) => {
  if (value instanceof Array) {
    return true;
  } else {
    return false;
  }
};
isArray2([]);

/**************************************************************************************/

/*******************************************************************/
/*********** Check if an array is empty or not (isEmpty) ***********/
/*******************************************************************/

const isEmpty = (arr) => {
  return !arr.length;
};

/**************************************************************************************/

/************************************************************************/
/*********** Get the maximum subarray sum (getMaxSubarraySum) ***********/
/************************************************************************/

/*********** SOLUTION 1 ***********/
const getMaxSubarraySum1 = (numbers, n) => {
  let maxSum = 0;

  numbers.forEach((el, start) => {
    const end = start + n - 1;

    if (end < numbers.length) {
      const newSum = numbers.slice(start, end + 1).reduce((a, b) => a + b, 0);
      maxSum = Math.max(maxSum, newSum);
    }
  });

  return maxSum;
};

getMaxSubarraySum1([100, 200, 300, 400], 2);
getMaxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
getMaxSubarraySum1([-3, 4, 0, -2, 6, -1], 2);
getMaxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);

/*********** SOLUTION 2 ***********/
const getMaxSubarraySum2 = (numbers, n) => {
  let maxSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let nextSum = 0;

    for (let j = 0; j < n; j++) {
      nextSum += numbers[i + j];
    }

    if (nextSum > maxSum) {
      maxSum = nextSum;
    }
  }

  return maxSum;
};

getMaxSubarraySum2([100, 200, 300, 400], 2);
getMaxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
getMaxSubarraySum2([-3, 4, 0, -2, 6, -1], 2);
getMaxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);

/**************************************************************************************/

/**************************************************************************************************************************************/
/*********** Check if all members in the first array have a corresponding value in the second array (hasCorrespondingValue) ***********/
/**************************************************************************************************************************************/

const hasCorrespondingValue = (arr1, arr2, n) => {
  const obj1 = {};
  const obj2 = {};

  arr1.forEach((el) => (obj1[el] = (obj1[el] || 0) + 1));
  arr2.forEach((el) => (obj2[el] = (obj2[el] || 0) + 1));

  for (let key in obj1) {
    if (obj1[key] !== obj2[key ** n]) {
      return false;
    }
  }
  return true;
};

hasCorrespondingValue([1, 2, 3], [4, 1, 9], 2);
hasCorrespondingValue([1, 2, 3], [1, 9], 2);
hasCorrespondingValue([1, 2, 1], [4, 4, 1], 2);

/**************************************************************************************/

/*****************************************************************************/
/*********** Get the product of array elements (productOfElements) ***********/
/*****************************************************************************/

const productOfElements = (arr) => {
  return arr.reduce((acm, value) => acm * value, 1);
};

productOfElements([1, 2, 3]);
productOfElements([1, 2, 3, 10]);

/**************************************************************************************/

/*******************************************************/
/*********** Flatten nested arrays (flatten) ***********/
/*******************************************************/

const flatten = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

flatten([1, 2, 3, [4, 5]]);
flatten([1, [2, [3, 4], [[5]]]]);
flatten([[1], [2], [3]]);
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

/**************************************************************************************/

/*******************************************************************************************/
/*********** Calculate the big couple product of an array (calcBigCoupleProduct) ***********/
/*******************************************************************************************/

const calcBigCoupleProduct = (arr) => {
  let bigCuple = arr[0] * arr[1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > bigCuple) {
      bigCuple = arr[i] * arr[i + 1];
    }
  }

  return bigCuple;
};

calcBigCoupleProduct([1, 2, 3, 4, 5, 10, 1, 10, 20, 10, 2]);

/**************************************************************************************/

/**************************************************************************************/
/*********** Get unique elements from an array (getUniqueElementsFromArray) ***********/
/**************************************************************************************/

const getUniqueElementsFromArray = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return Object.entries(obj)
    .filter(([key, value]) => value === 1)
    .map((el) => el[0]);
};

getUniqueElementsFromArray(["a", "b", "a", "c", "a", "b", "d", "d"]);

/**************************************************************************************/

/*****************************************************************************/
/*********** Get pairs whose sum is equal to the target (getPairs) ***********/
/*****************************************************************************/

const getPairs = (numbers, target) => {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    const potentialPare = target - numbers[i];
    const pare = numbers.find((el, index) => index > i && el === potentialPare);

    if (pare) {
      arr.push([pare, numbers[i]]);
    }
  }

  return arr;
};

getPairs([2, 4, 5, 7, 9, 10], 12);

/**************************************************************************************/

/**********************************************************************************/
/*********** Remove duplicate elements from an array (removeDuplicates) ***********/
/**********************************************************************************/

/*********** SOLUTION 1 ***********/
const removeDuplicates1 = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

removeDuplicates1([1, 2, 3, 4, 2, 3, 5, 6, 1]);

/*********** SOLUTION 2 ***********/
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};

removeDuplicates2([1, 2, 3, 4, 2, 3, 5, 6, 1]);

/**************************************************************************************/

/********************************************************************************/
/*********** Find the missing number from an array (getMissingNumber) ***********/
/********************************************************************************/

const getMissingNumber = (numbers) => {
  const n = numbers.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
};

getMissingNumber([1, 2, 4, 5, 6, 7, 8, 9]);

/**************************************************************************************/

/***********************************************************************************/
/*********** Get duplicate elements from an array (getDuplicateElements) ***********/
/***********************************************************************************/

const getDuplicateElements = (numbers) => {
  const arr = [];
  const obj = {};

  for (let i = 0; i < numbers.length; i++) {
    if (obj.hasOwnProperty(numbers[i])) {
      obj[numbers[i]] = obj[numbers[i]] + 1;
    } else {
      obj[numbers[i]] = 1;
    }
  }

  Object.entries(obj).forEach((subArr) => {
    if (subArr[1] > 1) {
      arr.push(subArr[0]);
    }
  });

  return arr;
};

getDuplicateElements([1, 2, 3, 2, 4, 5, 3]);

/**************************************************************************************/

/******************************************************/
/*********** Get chunked arrays (getChunks) ***********/
/******************************************************/

/*********** SOLUTION 1 ***********/
const getChunks1 = (_arr, _size) => {
  let newArray = [];
  let currentArray = [];
  let currentSize = 0;

  for (let i = 0; i < _arr.length; i++) {
    currentSize++;

    if (currentSize <= _size) {
      currentArray.push(_arr[i]);
    } else {
      newArray.push(currentArray);
      currentArray = [_arr[i]];
      currentSize = 1;
    }
  }

  newArray.push(currentArray);
  return newArray;
};

getChunks1([1, 2, 3, 4, 5, 6, 7], 2);

/*********** SOLUTION 2 ***********/
const getChunks2 = (_arr, _size) => {
  const chunked = [];

  for (let element of _arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === _size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
};

getChunks2([1, 2, 3, 4, 5, 6, 7], 2);

/*********** SOLUTION 3 ***********/
const getChunks3 = (_arr, _size) => {
  const chunked = [];
  let index = 0;

  while (index < _arr.length) {
    chunked.push(_arr.slice(index, index + _size));
    index += _size;
  }

  return chunked;
};

getChunks3([1, 2, 3, 4, 5, 6, 7], 2);

/**************************************************************************************/

/***************************************************************************/
/*********** Check if an array is symmetric or not (isSymmetric) ***********/
/***************************************************************************/

const isSymmetric = (arr) => {
  const equal = (a, b) => (a === b && a === 0 ? true : Object.is(a, b));

  for (let i = 0; i <= arr.length / 2; i++) {
    if (!equal(arr[i], arr[arr.length - i - 1])) {
      return false;
    }
  }

  return true;
};

isSymmetric([55, 1, "a", NaN, -0, 48, 0, NaN, "a", 1, 55]);

/**************************************************************************************/

/***************************************************************************************/
/*********** Find the largest subMatrix from a matrix (findBiggestSubMatrix) ***********/
/***************************************************************************************/

const createMatrix = (n, item) => {
  const matrix = [];
  for (let i = 0; i < n; ++i) {
    matrix[i] = new Array(n).fill(item);
  }
  return matrix;
};

const findBiggestSubMatrix = (matrix) => {
  let subMatrix = [];
  maxNum = 0;
  for (let i = 0; i < matrix.length; ++i) {
    if (i === 0) {
      subMatrix[i] = matrix[i];
    } else {
      subMatrix[i] = new Array(matrix[i].length).fill(null);
      for (let j = 0; j < matrix[i].length; ++j) {
        if (j === 0) {
          subMatrix[i][j] = matrix[i][j];
        } else {
          const newNum =
            Math.min(
              subMatrix[i][j - 1],
              subMatrix[i - 1][j],
              subMatrix[i - 1][j - 1]
            ) + 1;
          subMatrix[i][j] = matrix[i][j] && newNum;
        }
      }
    }
    maxNum = Math.max(maxNum, ...subMatrix[i]);
  }

  return createMatrix(maxNum, 1);
};

findBiggestSubMatrix([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
]);
findBiggestSubMatrix([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
]);

/**************************************************************************************/

/*****************************************************************/
/*********** Implement the map method for arrays (map) ***********/
/*****************************************************************/

Array.prototype.map = function (cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i, this));
  }

  return newArray;
};

/**************************************************************************************/

/***********************************************************************/
/*********** Implement the filter method for arrays (filter) ***********/
/***********************************************************************/

Array.prototype.filter = function (cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

/**************************************************************************************/

/*******************************************************************/
/*********** Implement the find method for arrays (find) ***********/
/*******************************************************************/

Array.prototype.find = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

/**************************************************************************************/

/*************************************************************************/
/*********** Implement the forEach method for arrays (forEach) ***********/
/*************************************************************************/

Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

/**************************************************************************************/

/*******************************************************************/
/*********** Implement the some method for arrays (some) ***********/
/*******************************************************************/

Array.prototype.some = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

/**************************************************************************************/

/*********************************************************************/
/*********** Implement the every method for arrays (every) ***********/
/*********************************************************************/

Array.prototype.every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

/**************************************************************************************/

/***********************************************************************/
/*********** Implement the reduce method for arrays (reduce) ***********/
/***********************************************************************/

Array.prototype.reduce = function (cb, initialValue) {
  let accumulator = initialValue || this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};