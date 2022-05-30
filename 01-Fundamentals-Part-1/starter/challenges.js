// > CHALLENGE #1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log('Marks BMI', markBMI.toFixed(2));
console.log("John's BMI", johnBMI.toFixed(2));

// > Challenge #2
let markHigherBMI = false;
let johnHigherBMI = false;
if (markBMI > johnBMI) {
  markHigherBMI = true;
  console.log(`Mark\s BMI is higher than John\'s`);
} else if (johnBMI > markBMI) {
  johnHigherBMI;
  console.log(`John\s BMI is higher than Mark\'s`);
} else {
  console.log(`Mark\s BMI is the same as John\'s`);
}

// > Challenge #1
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

console.log("Mark's NEW BMI", markBMI.toFixed(2));
console.log("John's NEW BMI", johnBMI.toFixed(2));

// > Challenge #2
markHigherBMI = false;
johnHigherBMI = false;
if (markBMI > johnBMI) {
  markHigherBMI = true;
  console.log(`Mark\s NEW BMI is higher than John\'s`);
} else if (johnBMI > markBMI) {
  johnHigherBMI;
  console.log(`John\s NEW BMI is higher than Mark\'s`);
} else {
  console.log(`Mark\s NEW BMI is the same as John\'s`);
}

// ? using the ternery stuff
console.log('Ternery');
markHigherBMI > johnHigherBMI
  ? console.log(`Mark\s NEW BMI is higher than John\'s`)
  : console.log(`John\s NEW BMI is higher than Mark\'s`);
