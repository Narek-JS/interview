/*
*******************************************************
********** OOP (Object-Oriented Programming) ********** 
*******************************************************
 . Object cloning
 . Prototypal inheritance
 . Function Constructor
 . Classes
 . Static, Public, Private and Protected fields and methods
 . Encapsulation
 . Abstraction
 . Inheritance
 . Polymorphism
_______________________________________________________
*******************************************************
*/

/**************************************/
/*********** Object cloning ***********/
/**************************************/

/***** Simple cloning *****/

// Example 1 (for in)
let user1 = {
  name: "John",
  age: 30,
};

let clone1 = {};

for (let key in user1) {
  clone1[key] = user1[key];
}

// Example 2 (Object.assign)
let user2 = {
  name: "John",
  age: 30,
};

const clone2 = Object.assign({}, user2);

// Example 3 (spread syntax)
let user3 = {
  name: "John",
  age: 30,
};

const clone3 = { ...user3 };

/***** Nested cloning (deep cloning) *****/

// Example 1 (for in)
// It does not support circular references. (Error: Maximum call stack size exceeded)
const cloneObject = (obj) => {
  const clone = {};

  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      clone[key] = cloneObject(value);
    } else {
      clone[key] = value;
    }
  }

  return clone;
};

const user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

const clone4 = cloneObject(user4);

// Example 2 (structuredClone)
// It supports circular references.
// Function properties aren’t supported (Error).

let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

user5.me = user5; // circular references

const clone5 = structuredClone(user5);

// Example 3 (JSON)
// It does not support circular references.
// Function properties aren’t supported (undefined).

let user6 = {
  name: "John",
  f: function () {},
  sizes: {
    height: 182,
    width: 50,
  },
};

const clone6 = JSON.parse(JSON.stringify(user6));

/***** simple cloning with flags *****/

let user7 = {
  name: "John",
};

let clone7 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(user7)
);

/**************************************************************************************/

/**********************************************/
/*********** Prototypal inheritance ***********/
/**********************************************/

// Example 1 (__proto__)
let animal1 = {
  eats: true,
};
let rabbit1 = {
  jumps: true,
};

rabbit1.__proto__ = animal1;

// Example 2 (F prototype)
let animal2 = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal2;
let rabbit2 = new Rabbit("White Rabbit"); //  rabbit2.__proto__ === animal2

// Example 3 (prototype methods)
let animal3 = {
  eats: true,
};

// create a new object with animal as a prototype
let rabbit3 = Object.create(animal3); // same as {__proto__: animal}
console.log(rabbit3.eats); // true
console.log(Object.getPrototypeOf(rabbit3) === animal3); // true
Object.setPrototypeOf(rabbit3, {}); // change the prototype of rabbit to {}

/**************************************************************************************/

/********************************************/
/*********** Function Constructor ***********/
/********************************************/

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

let user = new User("Jack"); // { name: "Jack", isAdmin: false }

/**************************************************************************************/

/*******************************/
/*********** Classes ***********/
/*******************************/

/***** class example (prototype) *****/
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/***** class example (prototype) *****/

/**************************************************************************************/

/********************************************************************************/
/*********** Static, Public, Private and Protected fields and methods ***********/
/********************************************************************************/

/***** Example 1 (Classes) *****/

class MyClass {
  // Public field
  publicField = "I am a public field";
  // Private field (using a # prefix)
  #privateField = "I am a private field";
  // Protected field (using a _ prefix)
  _protectedField = "I am a protected field";

  // Public method
  publicMethod() {
    console.log("This is a public method");
    this.#privateMethod();
    this._protectedMethod();
  }
  // Private method (using a # prefix)
  #privateMethod() {
    console.log("This is a private method");
    console.log(this.#privateField);
  }
  // Protected method (using a _ prefix)
  _protectedMethod() {
    console.log("This is a protected method");
    console.log(this._protectedField);
  }

  // Getter for protected field
  get protectedField() {
    return this._protectedField;
  }
  // Setter for protected field
  set protectedField(value) {
    this._protectedField = value;
  }

  // Static method
  static staticMethod() {
    console.log("This is a static method");
  }
}

// Usage:
const myObject = new MyClass();

console.log(myObject.publicField); // Accessing public field
myObject.publicMethod(); // Calling public method

console.log(myObject.privateField); // Error: Private field is not accessible
console.log(myObject.privateMethod); // Error: Private method is not accessible

console.log(myObject.protectedField); // Accessing protected field
myObject.protectedField = "Updated protected field"; // Updating protected field
console.log(myObject.protectedField); // Accessing updated protected field

MyClass.staticMethod(); // Calling static method

/***** Example 2 (F Constructor) *****/

function MyClass() {
  // Public field
  this.publicField = "I am a public field";
  // Private field (using a closure)
  var privateField = "I am a private field";
  // Protected field (using a closure)
  var _protectedField = "I am a protected field";

  // Public method
  this.publicMethod = function () {
    console.log("This is a public method");
    privateMethod();
    protectedMethod();
  };

  // Private method (using a closure)
  function privateMethod() {
    console.log("This is a private method");
    console.log(privateField);
  }

  // Protected method (using a closure)
  function protectedMethod() {
    console.log("This is a protected method");
    console.log(_protectedField);
  }

  // Getter for protected field
  this.getProtectedField = function () {
    return _protectedField;
  };

  // Setter for protected field
  this.setProtectedField = function (value) {
    _protectedField = value;
  };
}

// Static method
MyClass.staticMethod = function () {
  console.log("This is a static method");
};

// Usage:
var myObject = new MyClass();

console.log(myObject.publicField); // Accessing public field
myObject.publicMethod(); // Calling public method

console.log(myObject.privateField); // undefined: Private field is not accessible
console.log(myObject.privateMethod); // undefined: Private method is not accessible

console.log(myObject.getProtectedField()); // Accessing protected field
myObject.setProtectedField("Updated protected field"); // Updating protected field
console.log(myObject.getProtectedField()); // Accessing updated protected field

MyClass.staticMethod(); // Calling static method

/**************************************************************************************/

/*************************************/
/*********** Encapsulation ***********/
/*************************************/

/***** Description *****/
// Encapsulation is a mechanism of wrapping the data (instance variables) and code acting on the data (methods) together as a single unit like a Class.

/***** Examples *****/
class Person {
  #name = "Nathan";

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

/**************************************************************************************/

/***********************************/
/*********** Abstraction ***********/
/***********************************/

/***** Description *****/
// Abstraction is a process of hiding the implementation details from the user, only the functionality will be provided to the user.
// In other words, the user will have the information on what the object does instead of how it does it.

/***** Examples *****/
class Triangle {
  constructor(aVal, bVal, cVal) {
    this.a = aVal;
    this.b = bVal;
    this.c = cVal;
  }

  calcArea() {
    // Get triangles side:
    let a = this.a;
    let b = this.b;
    let c = this.c;

    // Calculate Area
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return area;
  }
}

let triangle = new Triangle(3, 4, 5);
console.log("Area = " + triangle.calcArea());

/**************************************************************************************/

/***********************************/
/*********** Inheritance ***********/
/***********************************/

/***** Description *****/
// Inheritance can be defined as the process where one class acquires the properties (methods and fields) of another.

/***** Examples *****/
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

/**************************************************************************************/

/************************************/
/*********** Polymorphism ***********/
/************************************/

/***** Description *****/
// Polymorphism means having different and many forms. We can overwrite a method inherited from a parent class.

/***** Examples 1 *****/
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!

/***** Examples 2 *****/

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound(type) {
    switch (type) {
      case "cat":
        return "Meow!";
      case "dog":
        return "Woof!";
      default:
        return "The animal makes a sound.";
    }
  }
}

const animal = new Dog("Buddy");
console.log(animal.makeSound("cat")); // Meow!
console.log(animal.makeSound("dog")); // Woof!
console.log(animal.makeSound("rest of animal")); // The animal makes a sound.
