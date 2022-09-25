'use strict';
// TODO 3 Components of Functional Programming
// ! Immutability
// ! Side Effects and Pure Functions
// ! Making Data Transformations using Pure Functions such as map() etc.

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// ! This is now a pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'Jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// ! Using a function
// const checkExpenses1 = function (state, limits) {
//   // ! map() will create a new array
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };

// ! Using an arrow function
// NOTE this is a pure function
const checkExpenses2 = (state, limits) =>
  // ! map() will create a new array
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses2(newBudget3, spendingLimits);
console.log(finalBudget);

// ! So in functional code you will not see the keyword let
// * this is an inpure function
const logBigExpenses = function (state, bigLimit) {
  // ! method 1
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  // ! method2
  //   const bigExpenses = state
  //     .filter(entry => entry.value <= -bigLimit)
  //     .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
