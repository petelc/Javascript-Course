// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyzabc = 23;

// console.log(xyzabc);
// VIDEO well that is interesting
// FIXME so what the hell is overview ruler

// --------------------------------------

// Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind there might be a senser error.
/** 
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1). Understanding the problem

//  NOTE what is temperature amplitude? answer: difference between highest and lowest temp
//  NOTE how to compute the max and min temperatures?
//  NOTE what a sensor error? And what to do?

// 2). Breaking up into sub-problems.

// // TODO - how to ignore errors?
// // TODO - find max value in temp array
// // TODO - find min value in temp array
// // TODO - subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// LEC 1). Understand the problem
// ? with 2 arrays, should we implement functionality twice. A: No just merge two arrays

// LEC 2). Breaking up into sub-problems
// ? - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// EXAMPLE
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
*/

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C. FIX
//     // value: Number(prompt('Degrees celcius:')),
//     value: 10,
//   };

//   //   B FIND
//   //   console.log(measurement);
//   console.table(measurement);

//   //   console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Find the bug
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;

//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);
