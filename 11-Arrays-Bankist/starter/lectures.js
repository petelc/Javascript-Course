'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

/////////////////////////////////////////////////
// LEC Array Methods Practice

//  ! 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// ! 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  //   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// ++ operator
let a = 10;
console.log(++a);
console.log(a);

// ! 3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//  ! 4.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// LEC More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ! Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// ! This Doesn't work
// x.map(() => 5)
// ! Fill
// x.fill(1);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// ! array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('$', ''))
//   );
//   console.log(movementsUI);
// });

// LEC Sorting Arrays

// ! Strings
// TODO THIS MUTATES THE ORIGINAL ARRAY
// const owners = ['Jonas', 'Zack', 'Peter', 'Robin', 'Adam', 'Martha'];
// console.log(owners.sort());

// ! Numbers
// console.log(movements);
// ! to make it work with numbers it has to have a callback function

// ! return < 0, A, B
// ! return > 0, B, A

// ! ASCENDING
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
// movements.sort((a, b) => a - b);

// ! movements array has been mutated
// console.log(movements);

// ! DESCENDING
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
// movements.sort((a, b) => b - a);

// console.log(movements);

// ! Sort works using strings so numbers are converted to strings
// console.log(movements.sort());

// LEC flat and flatMap
// ! Introduced in ES2019
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// ! pass in a number to flatten that many levels
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// ! Chaining
// * FLAT
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// // * FLATMAP
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);
// console.log(overallBalance2);

// LEC some and every
// console.log(movements);

// * some

// ! EQUALITY
// console.log(movements.includes(-130));

// ! CONDITION
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// * every

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// * Separate callback
// const deposit = mov => mov > 0;

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// LEC Find Method
// ! Will return only the first element of an array that satisfies the test
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// LEC The Magic of Chaining Methods

// ! Can chain methods only if first method returns a new array

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// const totalDepositsUSD_ALT = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // ! This is the array from the filter method
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);
// console.log(totalDepositsUSD_ALT);

// LEC The Reduce Method

// ! accumulator => SNOWBALL!
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   //   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

// console.log(`The current balance is ${balance}`);

// Get the maximum value
// const maxDeposit = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(maxDeposit);

// console.log('Balance', balance);
// LEC The Filter Method
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// LEC The Map Method

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// LEC Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// ! SLICE - does NOT mutate the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());

// ! SPLICE - mutates the original array
// console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// ! REVERSE - mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// ! CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// ! JOIN
// console.log(letters.join(' - '));

// LEC The new at Method - ES2022
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// Getting last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// at method works on strings also
// console.log('peter'.at(2));
// console.log();

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOREACH------');

// ! The order matters for what is passed in the callback
// ! function. Current Element, Current Index, entire array
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// ! You cannot break out of a forEach loop

// LEC forEach with Maps and Sets

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// SET
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
// // console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// LEC PROJECT "Bankist" APP
