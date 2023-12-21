/*
 ********************************
 ********** ALGORITHMS **********
 ********************************
 
. Merge Tow Sorted Array (mergeTowSortedArray)

(Sorting Algorithms)
    . Merge Sort (mergeSort)
    . Bubble Sort (bubbleSort)
    . Selection Sort (selectionSort)

(Searching Algorithms)
    . Binary search (binarySearch)
    . Linear search (linearSearch)
  __________________________
 ***************************    
 */

/********************************************************************/
/*********** Merge Tow Sorted Array (mergeTowSortedArray) ***********/
/********************************************************************/

const mergeTowSortedArray = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

/**************************************************************************************/

/**********************************************/
/*********** Merge Sort (mergeSort) ***********/
/**********************************************/

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let midIndex = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midIndex));
  let rightArr = mergeSort(arr.slice(midIndex));
  return mergeTowSortedArray(leftArr, rightArr);
};

mergeSort([1, 2, 34, 35, 4, 12, 6, 23]);

/**************************************************************************************/

/************************************************/
/*********** Bubble Sort (bubbleSort) ***********/
/************************************************/

const bubbleSort = (arr) => {
  const swap = (arr, j) => {
    const temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  };

  for (let i = arr.length; i > 0; i--) { // i = 8
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) { // j = 3
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }

  return arr;
};

bubbleSort([1, 4, 5, 8, 3, 6, 7, 2]);

/**************************************************************************************/

/******************************************************/
/*********** Selection Sort (selectionSort) ***********/
/******************************************************/

const selectionSort = (arr) => {
  const swap = (arr, i, minIndex) => {
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }

  return arr;
};

selectionSort([1, 4, 5, 8, 3, 6, 7, 2]);

/**************************************************************************************/

/****************************************************/
/*********** Binary search (binarySearch) ***********/
/****************************************************/

const binarySearch = (arr, el) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  while (arr[middleIndex] !== el && startIndex <= endIndex) {
    if (el < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }

    middleIndex = Math.floor((startIndex + endIndex) / 2);
  }

  if (arr[middleIndex] === el) {
    return middleIndex;
  }

  return -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13);

/**************************************************************************************/

/****************************************************/
/*********** Linear search (linearSearch) ***********/
/****************************************************/

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};
