/*
*************************************
********** Design patterns ********** 
*************************************

(Creational Design patterns)
    . Constructor Design Pattern
    . Factory Design Pattern
    . Prototype Design Pattern
    . Singleton Design Pattern 

(Structural Design Patterns)
    . Adapter Design Pattern
    . Decorator Design Pattern

(Behavioral Design Patterns)
    . Observer Design Pattern

(React specific Design Patterns)
    . Higher-order component HOC
    . Container and Presentational Components
    . Atomic design
______________________________________
**************************************
*/

/**************************************************/
/*********** Creational Design patterns ***********/
/**************************************************/

/***** Description *****/

/*
 Creational Design Patterns As the name suggests, these patterns are for handling object creational mechanisms. 
 A creational design pattern basically solves a problem by controlling the creation process of an object.
*/

/**********************************************/
/***** Constructor Design Pattern (Start) *****/

// Description
/*
	Constructors are special function that can be used to instantiate new objects with methods and properties defined by that function.
	Constructor pattern is the most commonly used pattern in JavaScript for creating new objects of similiar kind.
*/

// Examples 1 (Traditional Function-based syntax)
function Hero(name, specialAbility) {
  // setting property values
  this.name = name;
  this.specialAbility = specialAbility;

  // declaring a method on the object
  this.getDetails = function () {
    return this.name + " can " + this.specialAbility;
  };
}

// Examples 2 (ES6 Class syntax)
class Hero {
  constructor(name, specialAbility) {
    // setting property values
    this._name = name;
    this._specialAbility = specialAbility;

    // declaring a method on the object
    this.getDetails = function () {
      return `${this._name} can ${this._specialAbility}`;
    };
  }
}

// creating new instances of Hero
const IronMan = new Hero("Iron Man", "fly");

/***** Constructor Design Pattern (End) *****/
/********************************************/

/******************************************/
/***** Factory Design Pattern (Start) *****/

// Description
/*
    Factory Pattern is another class-based creational pattern. In this, we provide a generic interface that delegate the responsibility of object instantiation to its subclasses.
    This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.
*/

// Example (ES6 Class syntax)
class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basketball") ball = new Basketball();
      ball.roll = function () {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = function () {
      return "You kicked the football.";
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = function () {
      return "You bounced the basketball.";
    };
  }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall("football");
const myBasketball = factory.createBall("basketball");

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.

/***** Factory Design Pattern (End) *****/
/****************************************/

/********************************************/
/***** Prototype Design Pattern (Start) *****/

// Description
/*
	This pattern is an object-based creational design pattern. In this, we use a sort of a "skeleton" of an existing object to create or instantiate new objects.
	This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classical object-oriented inheritance. Hence, it plays to JavaScript's strength and has native support.
*/

// using Object.create as was recommended by ES5 standard
const car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

const myCar = Object.create(car, { owner: { value: "John" } });
console.log(myCar.__proto__ === car); // true

/***** Prototype Design Pattern (End) *****/
/******************************************/

/********************************************/
/***** Singleton Design Pattern (Start) *****/

// Description
/*
    Singleton is a special creational design pattern where only one instance of a class can exist. 
    It works like this - if no instance of the singleton class exists then a new instance is created and returned but if an instance already exists then the reference to the existing instance is returned.
*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database("mongo");
console.log(mongo.getData()); // mongo
const mysql = new Database("mysql");
console.log(mysql.getData()); // mongo

/***** Singleton Design Pattern (End) *****/
/******************************************/

/**************************************************************************************/

/**************************************************/
/*********** Structural Design Patterns ***********/
/**************************************************/

/***** Description *****/

/*
    These patterns are concerned with class and object composition. 
    They help structure or restructure one or more parts without affecting the entire system. 
    In other words, they help obtain new functionalities without tampering with the existing ones.
*/

/******************************************/
/***** Adapter Design Pattern (Start) *****/

// Description
/*
    This is a structural pattern where the interface of one class is translated to another. This pattern lets classes work together that could not otherwise because of incompatible interfaces.
	This pattern is often used to create wrappers for new refactored APIs so that other existing old APIs can still work with them.
*/

// old interface
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return term1 + term2;
        case "sub":
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}

// new interface
class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

// Adapter Class
class CalcAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          // using the new implementation under the hood
          return newCalc.add(term1, term2);
        case "sub":
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, "add")); // 15
const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15
const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, "add")); // 15;

/***** Adapter Design Pattern (End) *****/
/****************************************/

/********************************************/
/***** Decorator Design Pattern (Start) *****/

// Description
/*
	This is also a structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically. It is another viable alternative to sub-classing.
	The decorator type behaviour is very easy to implement in JavaScript because JavaScript allows us to add methods and properties to object dynamically. The simplest approach would be to just add a property to an object but it will not be reusable for the other objects of the same class.
*/

class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this.price = price;
  }

  getDetails() {
    return `${this._title} by ${this._author}`;
  }
}

// decorator 1
function giftWrap(book) {
  book.isGiftWrapped = true;
  book.unwrap = function () {
    return `Unwrapped ${book.getDetails()}`;
  };

  return book;
}

// decorator 2
function hardbindBook(book) {
  book.isHardbound = true;
  book.price += 5;
  return book;
}

// usage
const alchemist = giftWrap(new Book("The Alchemist", "Paulo Coelho", 10));
console.log(alchemist.isGiftWrapped); // true
console.log(alchemist.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'

const inferno = hardbindBook(new Book("Inferno", "Dan Brown", 15));
console.log(inferno.isHardbound); // true
console.log(inferno.price); // 20

/***** Decorator Design Pattern (End) *****/
/******************************************/

/**************************************************************************************/

/**************************************************/
/*********** Behavioral Design Patterns ***********/
/**************************************************/

/***** Description *****/

/*
    These patterns are concerned with improving communication between dissimilar objects.
*/

/*******************************************/
/***** Observer Design Pattern (Start) *****/

// Description
/*
	It is a crucial behavioural design pattern that defines one-to-many dependencies between objects so that when one object (publisher) changes its state, all the other dependent objects (subscribers) are notified and updated automatically. 
    This is also called PubSub (Publisher/Subscribers) or Event Dispatcher/Listeners Pattern. The Publisher is sometimes called Subject and the Subscribers are sometimes called Observers.
*/

class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => observer !== obs);
  }

  fire(change) {
    this._observers.forEach((observer) => {
      observer.update(change);
    });
  }
}

class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(change) {
    let state = this.state;
    switch (change) {
      case "INC":
        this.state = ++state;
        break;
      case "DEC":
        this.state = --state;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

// usage
const sub = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(19);

sub.subscribe(obs1);
sub.subscribe(obs2);

sub.fire("INC");

console.log(obs1.state); // 2
console.log(obs2.state); // 20

/***** Observer Design Pattern (End) *****/
/*****************************************/
