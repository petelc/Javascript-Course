'use strict';

// > Coding Challenge #1
// console.log('\n');
// console.log('Challenge 1');
// const dScore1 = 44;
// const dScore2 = 23;
// const dScore3 = 71;

// const kScore1 = 65;
// const kScore2 = 54;
// const kScore3 = 49;

// const dScore4 = 85;
// const dScore5 = 54;
// const dScore6 = 41;

// const kScore4 = 23;
// const kScore5 = 34;
// const kScore6 = 27;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // DataSet 1
// const dolphinsAvg = calcAverage(dScore1, dScore2, dScore3);
// const koalasAvg = calcAverage(kScore1, kScore2, kScore3);

// console.log('Dataset 1 ', dolphinsAvg, koalasAvg);

// // DataSet 2
// const dolphinsAvg2 = calcAverage(dScore4, dScore5, dScore6);
// const koalasAvg2 = calcAverage(kScore4, kScore5, kScore6);

// console.log('Dataset 2 ', dolphinsAvg2, koalasAvg2);

// function checkWinner(avgDolphins, avgKoalas) {
//   const dolphins2x = 2 * avgDolphins;
//   const koalas2x = 2 * avgKoalas;
//   if (avgDolphins >= koalas2x) {
//     console.log(`Dophin's win (${dolphins2x} vs. ${koalas2x})`);
//     return;
//   } else if (avgKoalas >= dolphins2x) {
//     console.log(`Koala's win (${koalas2x} vs. ${dolphins2x})`);
//     return;
//   } else {
//     console.log('No Winner');
//   }
//   return;
// }
// console.log('Datset 1');
// checkWinner(dolphinsAvg, koalasAvg);
// console.log('Dataset 2');
// checkWinner(dolphinsAvg2, koalasAvg2);
// console.log('\n');
// console.log('Challenge 2');
// console.log('\n');
// > Coding Challenge #2
// console.log('\n');
// console.log('Challenge 2');
// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//   return tip;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

// totals.map((amount) => {
//   console.log(`Your total restaurant bill is ${amount}`);
// });
// console.log('\n');
// > Coding Challenge #3
// console.log('\n');
// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   fullName: 'Mark Miller',
//   weight: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     console.log(this.bmi);
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   fullName: 'John Smith',
//   weight: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     console.log(this.bmi);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// const result =
//   mark.bmi > john.bmi
//     ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//     : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`;

// console.log(result);
// console.log('\n');
// > Coding Challenge #4
// console.log('\n');
console.log('Challenge 4');
// console.log('\n');

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
  return tip;
};

const calcAverage = function (arrs) {
  let sum = 0;
  for (let i = 0; i <= arrs.length - 1; i++) {
    sum += arrs[i];
  }
  const avg = sum / arrs.length - 1;
  return avg;
};

for (let i = 0; i <= bills.length - 1; i++) {
  const t = calcTip(bills[i]);
  const total = bills[i] + t;
  tips.push(t);
  totals.push(total);
}
console.log(tips);
console.log(totals);
console.log('Average ', calcAverage(totals));
