'use strict';

// PROBLEM
// LEC Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// LEC Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// LEC Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// --- Understand the problem ---
// ? - How to extract each element of the array to use in the string?
// ? - How to get the degree symbol?

// --- Sub-Problems ---
// todo - 1). Define Function Signature
// todo - 2). Extract each element from array
//      NOTE loop through array so we can keep this as flexible as possible
// todo - 3). Get the iteration count to use as days
// todo - 4). research how to print the degree symbol
// todo - 5). print required string

// * 1
const printForecast = function (arr) {
  let forecast = '';
  let count = 0;
  let degrees = 0;
  // * 2
  for (var i = 0; i < arr.length; i++) {
    // * 3
    count = i + 1;
    // * 4 - Type Option + k
    forecast += ` ... ${arr[i]}˚C in ${count} days`;
  }
  forecast += ' ...';
  return forecast;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const weather1 = printForecast(data1);
const weather2 = printForecast(data2);

// * 5
console.log('Weather Forecast 1');
console.log(weather1);
console.log('/n');
console.log('Weather Forecast 2');
console.log(weather2);
// Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
