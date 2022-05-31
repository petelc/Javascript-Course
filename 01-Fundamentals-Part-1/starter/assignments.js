// Section 2 Lecture 10

console.log('Lecture 10 - values and variables');
const country = 'United States of America';
const continent = 'North America';
const population = 331893745;

console.log(
  `I live in the ${country} which is in the continent of ${continent} with a population of ${population.toLocaleString()}`
);

console.log('Lecture 12 - Data Types');
const isIsland = false;
let language;
console.log(
  `Is Island ${typeof isIsland}, Population ${typeof population}, Country  ${typeof country}, Language ${typeof language}`
);

console.log('Skipping Let, const and var assignment');
console.log('Lecture 14 - Basic Operators');
language = 'English/Spanish';
const halfPopulation = population / 2;
console.log(`1. Each half would have ${halfPopulation.toLocaleString()}`);
const populationNew = population + 1;
console.log(`2. ${populationNew.toLocaleString()}`);
const finlandPopulation = 6000000;
const largerPopulation = population > finlandPopulation;
console.log(
  `3. The ${country} has a ${
    largerPopulation ? 'larger' : 'smaller'
  } population than Finland`
);
const averagePopulation = 33000000;
const isHigherThanAverage = population > averagePopulation;
console.log(
  `4. The ${country} has a ${
    isHigherThanAverage ? 'larger' : 'smaller'
  } population than average population of ${averagePopulation}`
);
const description = `${country} is in ${continent}, and its ${population.toLocaleString()} people speak ${language}`;
console.log(`5. ${description}`);

/**
 * Prediction
 * a. 4 because it is not concantenated
 * b. 23
 * c. 23
 * d. false
 * e. 9
 *
 */
// Converts both the 9 and 5 to number
console.log('9' - '5');
// Converts 19 and 13 to number then concantenates the 17
// Answer is 617
console.log('19' - '13' + '17');
// Converts 19 and 13 to number and solves the equation
console.log('19' - '13' + 17);
// Converts 123 to number then resolves
console.log('123' < 57);
// Solves 5 + 6 to 11 concantenates the 4 and then concatenates the solution to 9 - 4 - 2 to 3 which makes answer 1143
console.log(5 + 6 + '4' + 9 - 4 - 2);

/**
 * I was wrong in 2 of my predictions
 */

// * Equality
// let numNeighbors;
// numNeighbors = prompt('How many neighbor countries does your country have?');
// console.log('1. - 4.');

// if (numNeighbors == 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No Borders');
// }

// console.log(6);
// if (numNeighbors === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No Borders');
// }

// // > because === expects it to be an exact match including type

// let numNeighbors2 = parseInt(numNeighbors);
// console.log(7);
// if (numNeighbors2 === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors2 > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No Borders');
// }

// Logical Operators
