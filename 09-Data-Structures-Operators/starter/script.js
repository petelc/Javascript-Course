'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // NOTE with default values
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// LEC String Methods Practice
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

// console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )}, from ${getCode(from)}, to ${getCode(to)}, (${time.replace(
    ':',
    'h'
  )})`.padStart(50, '-');
  console.log(output);
}

// LEC Working with Strings Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are the middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 🤮');
//   } else {
//     console.log('You got Lucky 🤘');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// LEC Working with Strings Part 2

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// ! Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// ! Comparing Email

// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io  \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23, Boarding door 23!';
// console.log(announcement);

// console.log(announcement.replace('door', 'gate'));

// // console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.startsWith('Air'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// Practice
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome Aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// LEC Working with strings Part 3

// ! SPLIT AND JOIN
// console.log('a+very+nice+string'.split('+'));
// console.log('Peter Carroll'.split(' '));

// const [firstName, lastName] = 'Peter Carroll'.split(' ');
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   // * create an array of the string
//   const names = name.split(' ');

//   // * create and array for capitalized name
//   const namesUpper = [];

//   // * loop over array
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // ! another way to accompllsh this
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('peter larson carroll');

// * Padding a string
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// const maskCredit = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCredit(72694070));
// const card1 = maskCredit(6729792652526255);
// const card2 = maskCredit('8103047692840164');
// console.log(card1);
// console.log(card2);

// * Repeat

// const message2 = 'Bad Weather, ALL Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(10);
// planesInLine(3);
// planesInLine(15);

// LEC SETS

// ! A set is a collection of unique values

// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);

// console.log(orderSet);
// console.log(new Set('Peter'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// ! NO way to get data out of a set
// ! But they are iterable
// for (const order of orderSet) console.log(order);

// ! Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// LEC MAPS: Fundementals

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// ! We can chain sets together
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// // * create an array
// const arr = [3, 4];

// rest.set([1, 2], 'Test');
// rest.set(arr, 'Test 2');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// ! this won't work because the array called here is not
// ! the same as the one user to create the map entry
// console.log(rest.get([1, 2]));
// ! this will work because it is calling the same
// ! object in the heap
// console.log(rest.get(arr));

// LEC Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct 🎊'],
//   [false, 'Try Again 🥴'],
// ]);

// console.log(question);

// ! convert object to map
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// ! iteration - Maps are iterable

// * Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your Answer'));
// const answer = 3;
// console.log(answer);

// * take answer and compare to answers
// console.log(
//   question.get(
//     answer === question.get(1) &&
//       answer === question.get(2) &&
//       answer === question.get(3)
//   )
// );

// * another solution
// console.log(question.get(question.get('correct') === answer));

// ! convert map to array
// console.log([...question]);

// LEC Looping objects: Object Keys, Values, and Entries

// ! property names
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// ! property values
// const values = Object.values(hours);
// console.log(values);

// ! Entries
// const entries = Object.entries(hours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }

// LEC Optional Chaining
// console.log(restaurant.hours.mon?.open);

// console.log(restaurant.hours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   //console.log(day);
//   const open = restaurant.hours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// ! Calling Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// ! Arrays
// const users = [{ name: 'Peter', email: 'hello@traxs.dev' }];

// console.log(users[0]?.name ?? 'User array empty');

// console.log(users[1]?.name ?? 'User array empty');

// LEC Enhanced Object Literals
// ! restaurant object has been modified to show
// console.log(hours);
// console.log(restaurant);

// LEC Looping Arrays: the for-of loop
// ! this was introduced in es6
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (var item of menu) console.log(item);

// for (var [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// LEC Logical Assignment Operators
// NOTE introduced in ES2021
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// const rest3 = {
//   name: 'Giacomos',
//   owner: 'Sal Salvatore',
//   numGuests: 0,
// };

// using OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// NOTE Assignment operator

// * OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest3.numGuests ||= 10;

// * Nullish assignment operator
// ! see note below defining nullish
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// rest3.numGuests ??= 10;

// * AND assignment operator
/**
 * NOTE to replace value of an object pattern
 */
// rest2.owner = rest2.owner && '<ANONYMOUSE>';

// rest1.owner &&= '<ANONYMOUSE>';
// rest2.owner &&= '<ANONYMOUSE>';
// rest3.owner &&= '<KEEP SECRET>';

// console.log(rest1);
// console.log(rest2);
// console.log(rest3);

// LEC Nullish Coalescing Operator (??)

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

/**
 * NOTE works with nullish values and not falsey values
 * NOTE nullish:
 *    ! null
 * NOTE and
 *    ! undefined
 * NOTE and not
 *    ! 0
 * NOTE or
 *    ! ' '
 */

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// LEC Short Circuiting

// NOTE can use any data type, can return any datatype, and can short circuiting

// console.log('--------- OR ----------');
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--------- AND ----------');
// console.log(0 && 'Peter');

// console.log(7 && 'Peter');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Pepporoni', 'sausage');
// }

// restaurant.orderPizza &&
//   restaurant.orderPizza('Pepporoni', 'onions', 'green peppers');

// LEC Rest Patterns and Parameters
// ! Rest packs into an array. Spread Operator expands array

// * DESTRUCTURING

// NOTE SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// NOTE REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);
// BUG remember rest element has to be the last element in the destructuring

// NOTE objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// * FUNCTIONS

// NOTE rest parameters
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// NOTE Order Pizza example
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinich');

// LEC Spread Operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log('Spread', newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// NOTE Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// NOTE Join 2 or more arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// ! ITERABLES: arrays, strings, maps, sets, but NOT objects
// const str = 'Peter';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// NOTE Real World example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// NOTE Objects as of es2018 you can spread an object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Luigi' };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// LEC Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// NOTE Changing variable name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// NOTE Setting default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// NOTE Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// NOTE Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// NOTE Passing in object to object function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// LEC Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//  NOTE Switching destructured elements
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//  NOTE Destructuring results returned from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//  NOTE Nested Array
// const nested = [2, 4, [5, 6]];
//  const [i, , j] = nested;
//  console.log(i, j);

//  NOTE destructuring a nested array in a destructured array
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//  NOTE Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
