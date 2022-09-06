'use strict';

// LEC Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ! ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// LEC How Passing Arguments work: Value vs Reference

// const flight = 'LH123';
// const peter = {
//   name: 'Peter Carroll',
//   passport: 238189754634890,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 238189754634890) {
//     alert('Check IN');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, peter);

// console.log(flight);
// console.log(peter);

// ! Is the same as doing ...
// ! These are refering to same location in the HEAP
// const flightNum = flight;
// const passenger = peter;

// BUG So this shows how a function can cause problems
// BUG when passing in the same object
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(peter);
// checkIn(flight, peter);

// ! Javascript does not use pass by reference

// LEC First-Class and Higher-Order Functions
// ! see notes for definitions

// LEC Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// ! Higher Order Function
// const transformer = function (str, fn) {
//   console.log(str);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// ! JS uses callbacks all the time
// const high5 = function () {
//   console.log('🖖');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/**
 * * Callbacks allow us to create abstractions.
 * * abstraction = to hide the details in a program
 */

// LEC Functions Returning Functions

// ! this works because of CLOSURES

// ! this concept is import to functional programming
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Peter');

// greet('Hello')('Robin');

// const greet2 = greetings => who => console.log(`${greetings} ${who}`);

// greet2('Fuck')('This');

// LEC The call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Peter');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// BUG Does not work
// book(23, 'Sarah Conners');

// book.call(eurowings, 23, 'Sarah Conner');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Lybby Carroll-Metzger');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Lybby Carroll-Metzger');
// console.log(swiss);

// // Apply Method
// const flightData = [583, 'Abe Metzger'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// LEC The BIND method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Tom Petty');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Roger Waters');
// bookEW23('David Gilmour');

// ! with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// ! CHALLENGE

// const calcTax = function (rate) {
//   return function (amount) {
//     const tax = amount + amount * rate;
//     console.log(`The tax for ${amount} at the rate of ${rate} is ${tax}`);
//   };
// };

// const salesTax = calcTax(0.1);
// const vatTax = calcTax(0.23);
// salesTax(200);
// vatTax(100);

// LEC Immediatly Involked Function Expressions (IIFE)

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// ! IIFE
// (function () {
//   console.log('And this will never run again');
// })();

// (() => {
//   console.log('And arrow, this will never run again');
// })();

// ! let const respect scope while var does not

// LEC CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// * This is how closures can work
// ! A function has access to the variable environment (VE)
// ! of the execution context in which it was created.

// ! CLOSURE: VE attached to a function, exactly as it was
// !          at the time and place the functino was created

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// ! EXAMPLE 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// ! Re-assigning f function
h();
f();
console.dir(f);

// ! EXAMPLE 2

// * A TIMER

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// ! shows how closures have priority over global scope
const perGroup = 1000;
boardPassengers(180, 3);
