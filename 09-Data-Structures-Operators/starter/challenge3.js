'use strict';

// ! DOM CODE
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// * Test Data
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

console.log('--------Task 1--------');

// ! this will handle the text conversion
const process = function (e, body) {
  const bodyLower = body.toLowerCase();
  // ! split the content by newline
  const bodyArr = bodyLower.split(/\r?\n/);

  let count = 1;

  // ! loop through the body array
  for (const word of bodyArr) {
    const [first, second] = word.split('_');
    const secondUpper = second[0].toUpperCase() + second.slice(1);
    const combinedWord = first + secondUpper;
    const finalWord = combinedWord.trim();
    console.log(`${finalWord.padEnd(25)} ${'✅'.repeat(count)}`);
    count++;
  }
};

// ! this gets the text area
const body = document.querySelector('textarea');
let c = '';
// ! this gets the inputted value
body.addEventListener('input', () => {
  c = body.value;
  return c;
});

// ! this gets the button element
const myButton = document.querySelector('button');
// ! this sets the text in the button
myButton.innerHTML = 'PUSH';
// ! this adds the click event listener
myButton.addEventListener('click', e => process(e, c));
