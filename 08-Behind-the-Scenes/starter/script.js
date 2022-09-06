'use strict';

// // In Global Scope
// function calcAge(birthYear) {
//   // In function scope
//   const age = 2022 - birthYear;

//   function printAge() {
//     const output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     } else {
//       const str = `Oh, you are NOT a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Peter';
// calcAge(1966);

// NOTE this keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(1966);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAgeArrow(1966);

const pete = {
  year: 1966,
  calcAge: function () {
    console.log(this);
  },
};

pete.calcAge();
