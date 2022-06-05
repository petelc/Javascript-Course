'use strict';

// > Coding Challenge #1
console.log('\n');
console.log('Challenge 1');
const dScore1 = 44;
const dScore2 = 23;
const dScore3 = 71;

const kScore1 = 65;
const kScore2 = 54;
const kScore3 = 49;

const dScore4 = 85;
const dScore5 = 54;
const dScore6 = 41;

const kScore4 = 23;
const kScore5 = 34;
const kScore6 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// DataSet 1
const dolphinsAvg = calcAverage(dScore1, dScore2, dScore3);
const koalasAvg = calcAverage(kScore1, kScore2, kScore3);

console.log('Dataset 1 ', dolphinsAvg, koalasAvg);

// DataSet 2
const dolphinsAvg2 = calcAverage(dScore4, dScore5, dScore6);
const koalasAvg2 = calcAverage(kScore4, kScore5, kScore6);

console.log('Dataset 2 ', dolphinsAvg2, koalasAvg2);

function checkWinner(avgDolphins, avgKoalas) {
  const dolphins2x = 2 * avgDolphins;
  const koalas2x = 2 * avgKoalas;
  if (avgDolphins >= koalas2x) {
    console.log(`Dophin's win (${dolphins2x} vs. ${koalas2x})`);
    return;
  } else if (avgKoalas >= dolphins2x) {
    console.log(`Koala's win (${koalas2x} vs. ${dolphins2x})`);
    return;
  } else {
    console.log('No Winner');
  }
  return;
}
console.log('Datset 1');
checkWinner(dolphinsAvg, koalasAvg);
console.log('Dataset 2');
checkWinner(dolphinsAvg2, koalasAvg2);
console.log('\n');
console.log('Challenge 2');
console.log('\n');
