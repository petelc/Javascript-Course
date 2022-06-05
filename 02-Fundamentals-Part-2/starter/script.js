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
