'use strict';

// LEC Constructor Functions and the new Operator

// ! can't use arrow functons as a constructor functions
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // BUG NEVER DO THIS
//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };

// const me = new Person('Peter', 1966);
// console.log(me);

// // ! Creating a Static Method
// Person.hey = function () {
//   console.log('Hey There 🖖');
// };

// Person.hey();

// ? Behind the scenes 4 steps happen when using the new keyword

// ? 1. New {} is created
// ? 2. function is called, this = {}
// ? 3. {} linked to prototype
// ? 4. function automatically returns {}

// const robin = new Person('Robin', 1971);
// const zoey = new Person('Zoey', 2018);
// console.log(robin);
// console.log(zoey);

// const jay = 'Jay';

// console.log(me instanceof Person);
// console.log(jay instanceof Person);

// LEC Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// me.calcAge();
// zoey.calcAge();
// robin.calcAge();

// console.log(me.__proto__);
// console.log(me.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(me));

// Person.prototype.species = 'Homo Sapiens';
// console.log(me, robin);

// console.log(me.hasOwnProperty('firstName'));
// console.log(me.hasOwnProperty('species'));

// console.log(me.__proto__);
// ! Object.prototype (top of prototype chain)
// console.log(me.__proto__.__proto__);
// console.log(me.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
// console.log(arr.__proto__);

// ! Adding a new function to the Array object
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// LEC ES6 Classes

// * up to me which I like
// ! class expression
// const PersonCLE = class {}

// ! class declaration
// class PersonCLD {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // NOTE Instance Method
//   get fullName() {
//     return this._fullName;
//   }

//   // NOTE Static Method
//   static hey() {
//     console.log('Hey There 🖖');
//   }
// }

// const sarah = new PersonCLD('Sarah Miller', 1974);
// console.log(sarah);
// sarah.calcAge();
// console.log(sarah.age);
// sarah.greet();

// ! NOTES
/**
 * 1. Classes are not hoisted.
 * 2. Classes are first class citizens
 * 3. Classes are executed in strict mode
 */

// NOTE the use of classes is determined by personal style

// LEC Setters and Getters

// ! Assesor properties (getter, setters)

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;

// console.log(account);

// LEC Static Methods

// ! See Above

// LEC Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const michelle = Object.create(PersonProto);
// console.log(michelle);
// michelle.name = 'Michelle';
// michelle.birthYear = 1974;
// michelle.calcAge();

// const amy = Object.create(PersonProto);
// amy.init('Amy', 1975);
// amy.calcAge();

// LEC Inheritance between "Classes"

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// ! Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
// };

// const mike = new Student('Mike', 2000, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// LEC Inheritance between "Classes" ES6 Classes

// class PersonCLD {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // NOTE Instance Method
//   get fullName() {
//     return this._fullName;
//   }

//   // NOTE Static Method
//   static hey() {
//     console.log('Hey There 🖖');
//   }
// }

// ! To make inheritance work in ES6 Classes
// ! 1) extends keyword
// ! 2) super method (constructor method of parent class)

// class StudentCLD extends PersonCLD {
//   constructor(fullName, birthYear, course) {
//     // TODO ALWAYS NEEDS TO HAPPEN FIRST
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I am studying ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2022 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const amy = new StudentCLD('Amy Conners', 2003, 'Computer Science');
// const sarah = new PersonCLD('Amy Conners', 1978);
// sarah.greet();
// console.log(`Sarah is ${sarah.age}`);

// console.log(amy);
// amy.introduce();
// amy.calcAge();
// amy.greet();

// LEC Inheritance between "Classes" Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const michelle = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// console.log(jay);
// jay.init('Jay', 2001, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// LEC Another Class Example

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   // ! Public Interface
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdrawal(val) {
//     this.movements.push(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdrawal(78);
// acc1.requestLoan(1000);

// console.log(acc1);

// LEC Encapsulation: Protected Properties and Methods

// ! Class Fields
// ! 1). Public Fields
// ! 2). Private Fields
// ! 3). Public Methods
// ! 4). Private Methods
class Account {
  // ! 1) Public Fields (instances)
  locale = navigator.language;

  // ! 2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // ! Protected Property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // ! 3) Public Methods

  // ! Public Interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  // ! 4) Private Method
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdrawal(78);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// LEC Chaining Methods
acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);

console.log(acc1.getMovements());
