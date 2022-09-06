'use strict';

console.log('--------Challenge 1----------');
const juliaArr1 = [3, 5, 2, 12, 7];
const katesArr1 = [4, 1, 15, 8, 3];
const juliaArr2 = [9, 16, 6, 8, 3];
const katesArr2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  console.log('-----Task 1-------');
  //  ! Shallow Copy
  const newJulia = dogsJulia.slice();
  // ! Remove the 1st and last 2 elements
  newJulia.splice(0, 1);
  newJulia.splice(-2);
  //   const jDogs = newJulia.slice(1, -2);
  console.log(newJulia);
  console.log('\n');
  console.log('------Task 2-------');
  //  !  combine both data sets
  const allDogs = newJulia.concat(dogsKate);
  console.log(allDogs);
  console.log('\n');
  console.log('\n');
  console.log('------Task 3-------');
  // ! Loop over allDogs
  allDogs.forEach(function (dog, i) {
    if (dog <= 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    } else {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old 🦮`);
    }
  });
};

checkDogs(juliaArr1, katesArr1);
console.log('\n');
checkDogs(juliaArr2, katesArr2);

console.log('\n');
console.log('--------Challenge 2----------');

const arr = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // const humanAges = ages.map(age => {
  //   if (age <= 2) {
  //     return 2 * age;
  //   } else {
  //     return 16 + age * 4;
  //   }
  // });
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const average1 = calcAverageHumanAge(arr);
console.log(average1);
console.log('\n');
console.log('-----DataSet 2------');
const average2 = calcAverageHumanAge(arr2);
console.log(average2);

console.log('\n');
console.log('--------Challenge 3----------');

const calcAvgHumanAge = arr =>
  arr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, old) => acc + age / old.length, 0);

console.log(calcAvgHumanAge(arr));
console.log(calcAvgHumanAge(arr2));

console.log('\n');
console.log('--------Challenge 4----------');

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// ! 1
dogs.forEach(function (dog, i) {
  const recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  dog.recFood = recommendedFood;
});

// ! 2
const sarahDogFood = dogs
  .map(dog => dog.owners.includes('Sarah'))
  .reduce(
    dog =>
      dog.recFood < dog.curFood
        ? `Sarah's dog eats too little`
        : `Sarah's dog eats too much`,
    0
  );

console.log(sarahDogFood);

// !3
// dogs.map(dog => {
//   if (dog.curFood > dog.recFood) {
//     ownersEatTooMuch.push(dog.owners);
//   } else if (dog.curFood < dog.recFood) {
//     ownersEatTooLittle.push(dog.owners);
//   }
// });

// ! instructors solution
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

// ! 4
console.log(
  `${ownersEatTooLittle.slice().flat().join(' and ')}'s dogs eat too little`
);
console.log(
  `${ownersEatTooMuch.slice().flat().join(' and ')}'s dogs eat too much`
);

// ! 5
// const justRight = dogs
//   .map(dog => dog.curFood === dog.recFood)
//   .flat()
//   .join(' ');
// console.log(justRight);
// * should have used some

console.log(dogs.some(dog => dog.curFood === dog.recFoods));

// ! 6
// * +- 10%
const okayFood = dogs.map(dog => {
  if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
    console.log(true);
    // ! 7
    console.log(`Our just right dog: `, dog);
  }
  // else {
  //   console.log(false);
  // }
});

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// ! instructors solution
console.log(dogs.some(checkEatingOkay));

console.log(dogs.filter(checkEatingOkay));

// ! 8
const sortedDogs = dogs.slice();
sortedDogs.sort((a, b) => a.recFood - b.recFood);

console.log(sortedDogs);
