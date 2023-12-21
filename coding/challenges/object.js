/*
 ****************************
 ********** OBJECT **********
 ****************************
 
 . Check if a value is an object or not (isObj)
 . Check if an object is empty or not (isEmpty)
 . Calculate the sum of nested object values (calcSumOfObjValues)
 . Get book names whose status is equal to "available" (getAvailableBooksNames)
 . Get employees names who have the highest salary (getHighestPaidEmployeesNames)
 . Get students who have the maximum scores (getMaxScoringStudents)
 . Get the largest value from an object (getLargestValue)
 . Calculate the sum of object values (calcSumOfValues)
 . Get object values by level (getObjectValuesByLevel)
  ___________________________
 ****************************    
 */

/********************************************************************/
/*********** Check if a value is an object or not (isObj) ***********/
/********************************************************************/

const isObj = (value) => {
  return typeof value === "object" && value !== null;
};
isObj({});

/**************************************************************************************/

/********************************************************************/
/*********** Check if an object is empty or not (isEmpty) ***********/
/********************************************************************/

/*********** SOLUTION 1 ***********/
const isEmpty1 = (obj) => Object.keys(obj).length === 0;
isEmpty1({});

/*********** SOLUTION 2 ***********/
const isEmpty2 = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};
isEmpty2({});

/**************************************************************************************/

/**************************************************************************************/
/*********** Calculate the sum of nested object values (calcSumOfObjValues) ***********/
/**************************************************************************************/

const calcSumOfObjValues = (obj) => {
  let sum = 0;

  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += calcSumOfObjValues(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }

  return sum;
};

calcSumOfObjValues({
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
});

/**************************************************************************************/

/****************************************************************************************************/
/*********** Get book names whose status is equal to "available" (getAvailableBooksNames) ***********/
/****************************************************************************************************/

const getAvailableBooksNames = (library) => {
  return library
    .filter((book) => book.status === "available")
    .map((book) => book.name);
};

getAvailableBooksNames([
  { name: "Book 1", author: "Author 1", status: "available" },
  { name: "Book 2", author: "Author 2", status: "checked out" },
  { name: "Book 3", author: "Author 3", status: "available" },
  { name: "Book 4", author: "Author 4", status: "available" },
  { name: "Book 5", author: "Author 5", status: "checked out" },
]);

/**************************************************************************************/

/******************************************************************************************************/
/*********** Get employees names who have the highest salary (getHighestPaidEmployeesNames) ***********/
/******************************************************************************************************/

const getHighestPaidEmployeesNames = (employees) => {
  const salarys = employees.map((employer) => employer.salary);
  const maxSalary = Math.max(...salarys);

  return employees
    .filter((employer) => employer.salary === maxSalary)
    .map((employer) => employer.name);
};

getHighestPaidEmployeesNames([
  { name: "John", department: "Sales", salary: 50000 },
  { name: "Jane", department: "Marketing", salary: 60000 },
  { name: "Mike", department: "Sales", salary: 55000 },
  { name: "Sara", department: "Finance", salary: 60000 },
  { name: "David", department: "Marketing", salary: 55000 },
]);

/**************************************************************************************/

/****************************************************************************************/
/*********** Get students who have the maximum scores (getMaxScoringStudents) ***********/
/****************************************************************************************/

const getMaxScoringStudents = (students) => {
  const scoreSums = students.map((student) => {
    return student.scores.reduce((el, acc) => el + acc);
  });
  const maxScore = Math.max(...scoreSums);

  return students.filter((student) => {
    return maxScore === student.scores.reduce((el, acc) => el + acc);
  });
};

getMaxScoringStudents([
  { name: "John", scores: [85, 90, 92, 88] },
  { name: "Jane", scores: [90, 92, 94, 88] },
  { name: "Mike", scores: [88, 95, 90, 92] },
  { name: "Sara", scores: [92, 88, 90, 95] },
  { name: "David", scores: [88, 92, 90, 95] },
]);

/**************************************************************************************/

/******************************************************************************/
/*********** Get the largest value from an object (getLargestValue) ***********/
/******************************************************************************/

const getLargestValue = (obj) => {
  let res = 0;
  for (let key in obj) {
    if (obj[key] > res) {
      res = obj[key];
    }
  }
  return res;
};

getLargestValue({
  a: 100,
  b: 200,
  c: 500,
  d: 350,
});

/**************************************************************************************/

/****************************************************************************/
/*********** Calculate the sum of object values (calcSumOfValues) ***********/
/****************************************************************************/

/*********** SOLUTION 1 ***********/
const calcSumOfValues1 = (obj) => {
  let sum = 0;

  for (key in obj) {
    if (typeof obj[key] === "number") {
      sum = sum + obj[key];
    }
  }

  return sum;
};

calcSumOfValues1({
  a: 200,
  b: 100,
  c: "text",
  d: 200,
  f: true,
});

/*********** SOLUTION 2 ***********/

const calcSumOfValues2 = (obj) => {
  return Object.values(obj)
    .filter((el) => typeof el === "number")
    .reduce((acm, el) => acm + el);
};

calcSumOfValues2({
  a: 200,
  b: 100,
  c: "text",
  d: 200,
  f: true,
});

/**************************************************************************************/

/***************************************************************************/
/*********** Get object values by level (getObjectValuesByLevel) ***********/
/***************************************************************************/

const uniquePropName = (obj) => {
  return Object.values(obj).reduce((acm, current) => {
    acm[Math.random()] = current;
    return acm;
  }, {});
};

const isObj = (value) => {
  return (
    (typeof value === "object" && value !== null) || typeof value === "function"
  );
};

const isEmptyObj = (value) => {
  return Object.keys(value).length === 0 && value.constructor === Object;
};

const printPrimitives = (obj) => {
  Object.values(obj).forEach((value) => {
    if (!isObj(value)) {
      console.log(value);
    }
  });
};

const removeOneLevel = (obj) => {
  return Object.values(obj).reduce((acm, current) => {
    if (isObj(current)) {
      acm = { ...acm, ...uniquePropName(current) };
    }
    return acm;
  }, {});
};

const getObjectValuesByLevel = (obj) => {
  if (!isEmptyObj(obj)) {
    printPrimitives(obj);
    const nextLevelObj = removeOneLevel(obj);
    getObjectValuesByLevel(nextLevelObj);
  }
};

getObjectValuesByLevel({
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: {
        value: 4,
      },
      right: {
        value: 5,
      },
    },
    right: {
      value: 6,
    },
  },
  right: {
    value: 7,
    left: {
      value: 8,
      left: {
        value: 10,
      },
      right: {
        value: 11,
      },
    },
    right: {
      value: 9,
      left: {
        value: 12,
      },
      right: {
        value: 13,
        right: {
          value: 14,
        },
      },
    },
  },
});

// 1
// 2, 7
// 3, 6, 8, 9
// 4, 5, 10, 11, 12, 13
// 14
