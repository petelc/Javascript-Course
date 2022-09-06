'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('---------Challenge 1-----------');
// ! Task 1
const [players1, players2] = game.players;

// ! Task2
const BM = {
  name: game.team1,
  date: game.date,
  odds: game.odds.team1,
};
const [gk, ...fieldPlayers] = players1;
BM.gk = gk;
BM.fieldPlayers = fieldPlayers;
console.log(BM);

const BD = {
  name: game.team2,
  date: game.date,
  odds: game.odds.team2,
};
const [gk2, ...fieldPlayers2] = players2;
BD.gk = gk2;
BD.fieldPlayers = fieldPlayers2;
console.log(BD);

// ! Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// ! Task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// ! Task 5
// const { team1, x: draw, team2 } = game.odds; this works
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// ! Task 6
const printGoals = function (...players) {
  let goals = 0;
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};

// ! Task 7
team1 < team2 && console.log(`${BM.name} likely winner`);
team1 > team2 && console.log(`${BD.name} likely winner`);

// ! Test Data

printGoals('Davies', 'Muller', 'Lewandowkski', 'Kimmich');
printGoals(...game.scored);

// * Challenge 2

console.log('---------Challenge 2-----------');

// ! Task 1
for (var [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// ! Task 2
console.log('------Task 2-------');
let sum = 0;
let avg = 0;
let count = 0;
for (const item in game.odds) {
  sum += game.odds[item];
  count++;
}
avg = sum / count;
console.log(`Average odd is ${avg}`);

// * So I should have used Object.Values
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log('Teachers Solution', average);

// ! Task 3

console.log('-------Task 3-------');

for (var p in game.odds) {
  const team = (p ||= game.team1 ||= game.team2 ||= draw);
  team === 'x'
    ? console.log(`Odd of draw: ${game.odds[p]}`)
    : console.log(`Odd of victory ${team}: ${game.odds[p]}`);
}

console.log('The official solution');
// ? So this is more elegant
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

console.log('-----BONUS-----');

console.log('I did not get this.');
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

console.log('---------Challenge 3-----------');

// ! Task 1
console.log('--------Task 1----------');

const eventsSet = new Set();
for (const [key, value] of gameEvents) {
  eventsSet.add(value);
}
const eventsArr = [...eventsSet];
console.log(eventsArr);

// ! Task 2

console.log('--------Task 2---------');
gameEvents.delete(64);
console.log(gameEvents);

// ! Task 3

console.log('--------Task 3----------');

// * Divide 90 by size of Map

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// ! Bonus Demo
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// ! Task 4

console.log('---------Task 4-----------');

for (const [min, event] of gameEvents) {
  min < 45
    ? console.log(`[FIRST HALF]${min}: ${event}`)
    : console.log(`[SECOND HALF]${min}: ${event}`);
}
