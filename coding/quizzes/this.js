/**************************************/
/*********** Context (this) ***********/
/**************************************/

/*********** QUIZ 1 ***********/
var myObject = {
  foo: "bar",
  func: function () {
    const self = this;
    console.log(1,this.foo);
    console.log(2,self.foo);
    (function () {
      console.log(3,this.foo);
      console.log(4,self.foo);
    })();
  },
};

myObject.func();

/*********** QUIZ 2 ***********/
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

/*********** QUIZ 3 ***********/
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);

/*********** QUIZ 4 ***********/
var person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

var greetFunc = person.greet;
greetFunc();

/*********** QUIZ 5 ***********/
function foo() {
  return {
    bar: "Hello",
  };
}

console.log(typeof foo());

/*********** QUIZ 6 ***********/
var name = "John Doe";

function sayName() {
  console.log(this.name);
}

var person1 = {
  name: "Jane Smith",
  sayName: sayName,
};

var person2 = {
  name: "Mary Johnson",
  sayName: sayName,
};

sayName();
person1.sayName();
person2.sayName();

/*********** QUIZ 7 ***********/
var person = {
  name: "John",
  sayName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

person.sayName();

/*********** QUIZ 8 ***********/
var person = {
  name: "John",
  sayName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person.sayName();

/*********** QUIZ 9 ***********/
var name = "John Doe";

var person = {
  name: "Jane Smith",
  sayName: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

person.sayName();

/*********** QUIZ 10 ***********/

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();
