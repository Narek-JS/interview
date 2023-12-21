/*********************************/
/*********** Prototype ***********/
/*********************************/

/*********** QUIZ 1 ***********/
function Foo() {
  this.a = 1;
  this.b = 2;
}
const fooObj = new Foo();
console.log(Foo.prototype);
console.log(fooObj.prototype);
console.log(fooObj.__proto__);
console.log(Foo.prototype === fooObj.__proto__);

/*********** QUIZ 2 ***********/
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name + "!");
};

var person1 = new Person("Alice");
person1.greet();

var person2 = new Person("Bob");
person2.greet();

/*********** QUIZ 3 ***********/
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function () {
  console.log("Driving the " + this.type);
};

function Car(type, brand) {
  Vehicle.call(this, type);
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  console.log("Honk honk!");
};

var myCar = new Car("Sedan", "Toyota");
myCar.drive();
myCar.honk();

/*********** QUIZ 4 ***********/
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating.");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

var myDog = new Dog("Max", "Labrador");
myDog.eat();
console.log(myDog.breed);

/*********** QUIZ 5 ***********/
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.displayInfo = function () {
  console.log(this.title + " by " + this.author);
};

var book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
book1.displayInfo();

console.log(book1.hasOwnProperty("displayInfo"));

/*********** QUIZ 6 ***********/
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name + "!");
};

function Student(name, major) {
  Person.call(this, name);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function () {
  console.log(
    "Hi there, " + this.name + "! You are a " + this.major + " major."
  );
};

var person = new Person("Alice");
var student = new Student("Bob", "Computer Science");

person.greet();
student.greet();
