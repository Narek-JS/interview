/*
 ***************************
 ********** OTHER **********
 ***************************
 
 . Check if there are duplicate elements in the arguments (hasDuplicateArgs)
 . Check if a pair with a given sum exists (hasSumPair)
 . Get the first non-repeating character (getFirstNonRepeatingCharacter)
  __________________________
 ***************************    
 */

/*************************************************************************************************/
/*********** Check if there are duplicate elements in the arguments (hasDuplicateArgs) ***********/
/*************************************************************************************************/

/*********** SOLUTION 1 ***********/
const hasDuplicateArgs1 = (...args) => {
  const obj = {};

  for (let i = 0; i < args.length; i++) {
    obj[args[i]] = (obj[args[i]] || 0) + 1;
  }

  return Object.values(obj).some((el) => el > 1);
};

hasDuplicateArgs1(1, 2, 3);
hasDuplicateArgs1(1, 2, 2);
hasDuplicateArgs1("a", "b", "c", "a");

/*********** SOLUTION 2 ***********/
const hasDuplicateArgs2 = (...args) => {
  return new Set(args).size !== args.length;
};

hasDuplicateArgs2(1, 2, 3);
hasDuplicateArgs2(1, 2, 2);
hasDuplicateArgs2("a", "b", "c", "a");

/**************************************************************************************/

/****************************************************************************/
/*********** Check if a pair with a given sum exists (hasSumPair) ***********/
/****************************************************************************/

const hasSumPair = (arr1, arr2, value) => {
  const obj = arr2.reduce((acc, value) => {
    acc[value] = true;
    return acc;
  }, {});

  for (let i = 0; i < arr1.length; i++) {
    const target = value - arr1[i];

    if (obj[target]) {
      return true;
    }
  }

  return false;
};

/**************************************************************************************/

/*********************************************************************************************/
/*********** Get the first non-repeating character (getFirstNonRepeatingCharacter) ***********/
/*********************************************************************************************/

/*********** SOLUTION 1 ***********/
const getFirstNonRepeatingCharacter1 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }

  return null;
};

/*********** SOLUTION 2 ***********/
const getFirstNonRepeatingCharacter2 = (str) => {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (obj[key] === 1) {
      return key;
    }
  }

  return null;
};
