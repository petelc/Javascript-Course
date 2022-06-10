// 'use strict';

// console.log('Assignment 1');
// function describeCountry(country, population, capitalCity) {
//   const result = `${country} has ${population.toLocaleString()} people and it's capital city is ${capitalCity}`;
//   return result;
// }

// const myCountry = describeCountry(
//   'United States of America',
//   331893745,
//   'Washington D.C.'
// );
// console.log(myCountry);

// const finCountry = describeCountry('Finland', 6000000, 'Helsinki');
// console.log(finCountry);

// const portCountry = describeCountry('Portugal', 10344802, 'Lisbon');
// console.log(portCountry);
// console.log('\n');
// console.log('Assignment 2');
// const worldPopulation = 7900;
// function percentageOfWorld1(population) {
//   const percentage = (population / worldPopulation) * 100;
//   return percentage;
// }

// const myCountryPercentage = percentageOfWorld1(331);
// const finCountryPercentage = percentageOfWorld1(60);
// const portCountryPercentage = percentageOfWorld1(103);

// console.log(
//   `The United States of America is ${myCountryPercentage.toFixed(
//     1
//   )}% of the world population`
// );
// console.log(
//   `Finland is ${finCountryPercentage.toFixed(1)}% of the world population`
// );
// console.log(
//   `Portugal is ${portCountryPercentage.toFixed(1)}% of the world population`
// );
// console.log('\n');
// console.log('Function Expression');
// console.log('\n');
// // function expression
// const percentageOfWorld2 = function (population) {
//   const percentage = (population / worldPopulation) * 100;
//   return percentage;
// };
// const myCountryPercentage2 = percentageOfWorld2(331);
// const finCountryPercentage2 = percentageOfWorld2(60);
// const portCountryPercentage2 = percentageOfWorld2(103);

// console.log(
//   `The United States of America is ${myCountryPercentage2.toFixed(
//     1
//   )}% of the world population`
// );
// console.log(
//   `Finland is ${finCountryPercentage2.toFixed(1)}% of the world population`
// );
// console.log(
//   `Portugal is ${portCountryPercentage2.toFixed(1)}% of the world population`
// );
// console.log('\n');
// console.log('Arrow Function');
// console.log('\n');

// // Arrow Functions
// const percentageOfWorld3 = (population) => {
//   const percentage = (population / worldPopulation) * 100;
//   return percentage;
// };

// const myCountryPercentage3 = percentageOfWorld3(331);
// const finCountryPercentage3 = percentageOfWorld3(60);
// const portCountryPercentage3 = percentageOfWorld3(103);

// console.log(
//   `The United States of America is ${myCountryPercentage3.toFixed(
//     1
//   )}% of the world population`
// );
// console.log(
//   `Finland is ${finCountryPercentage3.toFixed(1)}% of the world population`
// );
// console.log(
//   `Portugal is ${portCountryPercentage3.toFixed(1)}% of the world population`
// );
// console.log('\n');
// console.log('Function Calling other function');
// console.log('\n');
// const describePopulation = (country, population) => {
//   const avg = percentageOfWorld1(population);
//   const result = `${country} has ${population} which is about ${avg.toFixed(
//     1
//   )} of the world`;
//   return result;
// };

// const result1 = describePopulation('United States of America', 331);
// console.log(result1);
