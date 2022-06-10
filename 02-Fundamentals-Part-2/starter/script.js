'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) {
//   console.log('I can drive :D');
// }

// * Functions Declarations

// function logger() {
//   console.log('My name is Pete');
// }

// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// TODO ALWAYS apply the DRY principle

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const Age1 = calcAge1(1966);

// console.log(Age1);

// // * Function Expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const Age2 = calcAge2(1971);
// console.log(Age2);

// ? So in functional javascript which is better

// Arrow Functions

// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1966);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirement = 72 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1966, 'Peter'));

// Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// * ARRAYS
// > Literal Syntax
// const friends = ['Zoey', 'Mocha', 'Chris'];
// console.log(friends);

// const years = new Array(1966, 1971, 1990, 2018, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Rayven';
// console.log(friends);

// > Primitive types are immutable but arrays are not a primitive type so you can change the array. But you cannot replace an array

// const peter = ['Peter', 'Carroll', 2022 - 1966, 'Developer', friends];
// console.log(peter);

// // TODO Exercise
// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }
// const birthYears = [1966, 1971, 1990, 2018, 2020];
// const age1 = calcAge(birthYears[0]);
// const age2 = calcAge(birthYears[1]);
// const age3 = calcAge(birthYears[birthYears.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(birthYears[0]),
//   calcAge(birthYears[2]),
//   calcAge(birthYears[birthYears.length - 1]),
// ];

// console.log(ages);

// * Array Methods

// > Add Elements
// const newLength = friends.push('Mike');
// console.log(friends);
// console.log(newLength);
// friends.unshift('Chris');
// console.log(friends);

// // > Remove Elements
// // ? removes the last element
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
// // ? removes the first element
// friends.shift();
// console.log(friends);

// // ? find position in array
// console.log(friends.indexOf('Mocha'));
// console.log(friends.indexOf('Bob'));

// // more useful
// console.log(friends.includes('Mocha'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Rayven')) {
//   console.log('You have a friend in Rayven');
// }

// if (friends.includes('Mocha')) {
//   console.log('You have a friend in Mocha');
// }
// * Objects

// > Objects are key:value pairs

// > Object Literal Syntax
// const me = {
//   firstName: 'Peter',
//   lastName: 'Carroll',
//   age: 2022 - 1966,
//   job: 'Developer',
//   friends: ['Zoey', 'Mocha', 'Chris'],
// };
// console.log(me);

// console.log(me.lastName);
// console.log(me['age']);

// const nameKey = 'Name';
// console.log(me['first' + nameKey]);
// console.log(me['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Pete? Choose between firstName, lastName, age, job and friends'
// );

// // console.log(interestedIn);

// if (me[interestedIn]) {
//   console.log(me[interestedIn]);
// } else {
//   console.log(
//     'Wrong request, What do you want to know about Pete? Choose between firstName, lastName, age, job and friends'
//   );
// }

// me.location = 'United States of America';
// me['twitter'] = '@petelc45';

// console.log(me);
// console.log('\n');
// // Challenge
// // "Peter has 3 friends and his best friend is named Zoey"
// console.log(
//   me.firstName +
//     ' has ' +
//     me.friends.length +
//     ' friends and his best friend is named ' +
//     me.friends[0]
// );

// Object Methods

// const me = {
//   firstName: 'Peter',
//   lastName: 'Carroll',
//   birthYear: 1966,
//   job: 'Developer',
//   hasDriversLicense: true,
//   friends: ['Zoey', 'Mocha', 'Chris'],
//   location: 'United States of America',
//   twitter: '@petelc45',

//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2022 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary = {
//       name: this.firstName + ' ' + this.lastName,
//       age: this.calcAge(),
//       role: this.job,
//       driversLicense: this.hasDriversLicense,
//     };
//     return this.summary;
//   },
// };
// console.log(me);
// console.log(me.calcAge());
// console.log(me.age);
// // console.log(me.age);
// // console.log(me.age);
// // console.log(me.age);

// // Challenge
// // write method get summary
// // "Jonas is a 46 year old teacher, and he as a/no drivers license"
// console.log(me.getSummary());
// console.log(me.summary);
// console.log(
//   `${me.summary.name} is a ${me.summary.age} year old ${
//     me.summary.role
//   }, and he has ${me.summary.driversLicense ? 'a' : 'no'} drivers license`
// );

// * LOOPS

// > For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// console.log('\n');

// const me = [
//   'Peter',
//   'Carroll',
//   2022 - 1966,
//   'Developer',
//   ['Zoey', 'Mocha', 'Chris'],
// ];
// const types = [];

// for (let i = 0; i < me.length; i++) {
//   // Reading the me array
//   console.log(me[i]);

//   // filling types array
//   // types[i] = typeof me[i];
//   types.push(typeof me[i]);
// }

// console.log('\n');
// console.log(types);

// const years = [1966, 1971, 1990, 1996, 2015];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2020 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('---ONLY STRINGS---');
// for (let i = 0; i < me.length; i++) {
//   if (typeof me[i] !== 'string') continue;

//   console.log(me[i], typeof me[i]);
// }

// console.log('---BREAK WITH NUMBER---');
// for (let i = 0; i < me.length; i++) {
//   if (typeof me[i] === 'number') break;

//   console.log(me[i], typeof me[i]);
// }

// LOOPING BACKWARDS
// const me = [
//   'Peter',
//   'Carroll',
//   2022 - 1966,
//   'Developer',
//   ['Zoey', 'Mocha', 'Chris'],
// ];

// // 4, 3, ... 0
// for (let i = me.length - 1; i >= 0; i--) {
//   console.log(i, me[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`--Lifting Weights repition ${rep} 🏋️‍♀️`);
//   }
// }

// WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// console.log('\n');
// console.log('---while looping---');
// let rep = 1;
// while (rep <= 10) {
//   // console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// // Does not depend on a counter
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }
