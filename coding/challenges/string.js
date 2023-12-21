/*
 ****************************
 ********** STRING **********
 ****************************

 . Check if two words are anagrams (isValidAnagram)
 . Reverse a string (reverseString)
 . Check if a word is a palindrome (isPalindrome)
 . Find the letter that is used the most in a word (getMostUsedLetter)
 . Count the number of words (countWords)
 ____________________________
 ****************************    
 */

/************************************************************************/
/*********** Check if two words are anagrams (isValidAnagram) ***********/
/************************************************************************/

/*********** SOLUTION 1 ***********/
const isValidAnagram1 = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }

  const obj = {};

  for (let i = 0; i < strA.length; i++) {
    const later = strA[i];
    obj[later] = (obj[later] || 0) + 1;
  }

  for (let i = 0; i < strB.length; i++) {
    const later = strB[i];

    if (!obj[later]) {
      return false;
    }
    obj[later] -= 1;
  }

  return true;
};

isValidAnagram1("", "");
isValidAnagram1("aaz", "zza");
isValidAnagram1("anagram", "nagaram");
isValidAnagram1("rat", "car");

/*********** SOLUTION 2 ***********/
const isValidAnagram2 = (strA, strB) => {
  const sortedString = (str) => str.split("").sort().join("");

  const absalutStringA = strA.replace(/[^\w]/g, "").toLowerCase();
  const absalutStringB = strB.replace(/[^\w]/g, "").toLowerCase();
  return sortedString(absalutStringA) === sortedString(absalutStringB);
};

isValidAnagram2("", "");
isValidAnagram2("aaz", "zza");
isValidAnagram2("anagram", "nagaram");
isValidAnagram2("rat", "car");

/**************************************************************************************/

/********************************************************/
/*********** Reverse a string (reverseString) ***********/
/********************************************************/

/*********** SOLUTION 1 ***********/
const reverseString1 = (str) => str.split("").reverse().join("");
reverseString1("karen");

/*********** SOLUTION 2 ***********/
const reverseString2 = (str) => {
  let currentStr = "";

  for (let char of str) {
    currentStr = char + currentStr;
  }

  return currentStr;
};

reverseString2("karen");

/*********** SOLUTION 3 ***********/
const reverseString3 = (str) => {
  return str
    .split("")
    .reduce((currentItem, item) => (currentItem = item + currentItem));
};

reverseString3("karen");

/**************************************************************************************/

/**********************************************************************/
/*********** Check if a word is a palindrome (isPalindrome) ***********/
/**********************************************************************/

/*********** SOLUTION 1 ***********/
const isPalindrome1 = (str) => {
  for (let i = 0; i < str.length; i++) {
    const leftChar = str[i];
    const rightChar = str[str.length - i - 1];

    if (leftChar !== rightChar) {
      return false;
    }
  }

  return true;
};

isPalindrome1("awesome");
isPalindrome1("foobar");
isPalindrome1("tacocat");
isPalindrome1("amanaplanacanalpanama");
isPalindrome1("amanaplanacanalpandemonium");

/*********** SOLUTION 2 ***********/
const isPalindrome2 = (str) => {
  if (str.length === 1) {
    return true;
  }

  if (str.length === 2) {
    return str[0] === str[1];
  }

  if (str[0] === str.slice(-1)) {
    return isPalindrome2(str.slice(1, -1));
  }

  return false;
};

isPalindrome2("awesome");
isPalindrome2("foobar");
isPalindrome2("tacocat");
isPalindrome2("amanaplanacanalpanama");
isPalindrome2("amanaplanacanalpandemonium");

/*********** SOLUTION 3 ***********/
const isPalindrome3 = (str) => str.split("").reverse().join("") === str;
isPalindrome3("rar");

/**************************************************************************************/

/*******************************************************************************************/
/*********** Find the letter that is used the most in a word (getMostUsedLetter) ***********/
/*******************************************************************************************/

const getMostUsedLetter = (str) => {
  const latters = {};
  let mostUsedLatter = null;
  let mostUsedLatterCount = 0;

  for (let char of str) {
    latters[char] = (latters[char] || 0) + 1;
  }

  for (let latter in latters) {
    if (latters[latter] > mostUsedLatterCount) {
      mostUsedLatter = latter;
      mostUsedLatterCount = latters[latter];
    }
  }

  return { mostUsedLatter, mostUsedLatterCount };
};

getMostUsedLetter("Hello There");

/**************************************************************************************/

/***********************************************************/
/*********** Find character count (getCharCount) ***********/
/***********************************************************/

const getCharCount = (text, char) => {
  let count = 0;

  for (let el of text) {
    count += el === char ? 1 : 0;
  }

  return count;
};

getCharCount("my name is Petros", "e");

/**************************************************************************************/

/**************************************************************/
/*********** Count the number of words (countWords) ***********/
/**************************************************************/

const countWords = (sentence) => {
  const obj = {};
  sentence.split(" ").forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });

  return obj;
};

countWords("The The quick brown fox jumps over the lazy dog");
