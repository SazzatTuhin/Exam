// Answer to the question number : 1

// polymorphism :  "The process of representing one form in multiple forms" is called

// polymorphism

// Answer to the question number : 2

// prototype :

// "when we create a contructor function  then call its child function with new , constructor function create a prototype and its all property through in prototype"

// prototype chain :

// "object in javascript have prototype , when a method access on prototype, if it not found ,it will search in upper prototype, This process hapen untill its property found , this process is called prototype chain"

// Answer to the question number : 3

// function Tuhin(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Tuhin.prototype.greet = function () {
//   return `Hello ${this.name}`;
// };

// function Nadia(name, color) {
//   Tuhin.call(this, name, color);
// }

// Nadia.prototype = Object.create(Tuhin.prototype);

// Nadia.prototype.getColor = function () {
//   return `${this.name} color is  ${this.color}`;
// };

// const tuhin1 = new Tuhin("sazzat", "green");
// const nadia1 = new Nadia("Akter", "pink");
// console.log(tuhin1.greet());
// console.log(nadia1.getColor());
// console.log(nadia1.greet());

// console.log(tuhin1.getColor());

// Answer to the question number : 4

// class Person {
//   #fname;
//   #lname;
//   constructor(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
//   }

//   gretting() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }

//   static hello() {
//     retuen`This is static`;
//   }
// }

// class Coustomer extends Person {
//   constructor() {
//     super(fname, lname);
//     this.phone = phone;
//     this.membership = membership;
//   }
// }

// const person1 = new Person("Maruf", "Hasan");

// console.log(person1.gretting());

// const person2 = new Coustomer("Tuhin", "khan", "0153210");
// console.log(person2.gretting());
