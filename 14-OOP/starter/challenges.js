'use script';

// console.log('-----Challenge 1-----');

// // ! 1. Create a car object
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);

// car1.accelerate(); // 120 + 10 = 130
// car1.brake(); // 130 - 5 = 125
// car1.accelerate(); // 125 + 10 = 135

// car2.accelerate(); // 95 + 10 = 105
// car2.brake(); // 105 - 5 = 100
// car2.accelerate(); // 100 + 10 = 110

// console.log('-----Challenge 2-----');

// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed = this.speed - 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return speed * 1.6;
//   }
// }

// const ford = new CarCL('Ford', 120);
// const bmw = new CarCL('BMW', 120);
// const mercedes = new CarCL('Mercedes', 95);

// console.log(ford.speedUS);
// console.log(ford);
// console.log(bmw);
// console.log(mercedes);

// bmw.accelerate(); // 120 + 10 = 130
// bmw.brake(); // 130 - 5 = 125
// bmw.accelerate(); // 125 + 10 = 135

// mercedes.accelerate(); // 95 + 10 = 105
// mercedes.brake(); // 105 - 5 = 100
// mercedes.accelerate(); // 100 + 10 = 110

// console.log('Ford GT500 🤙');
// console.log('Start', ford.speed);
// const sUS = ford.speedUS;
// console.log('Get US', sUS);
// ford.speedUS = sUS;
// console.log('Set US', ford.speedUS);
// console.log('Speed', ford.speed);
// ford.accelerate(); // 120 + 10 = 130
// ford.brake(); // 130 - 5 = 125
// ford.brake(); // 125 - 5 = 120
// ford.accelerate(); // 120 + 10 = 130
// ford.accelerate(); // 130 + 10 = 140
// ford.accelerate(); // 140 + 10 = 150

// console.log('-----Challenge 3-----');

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.init = function () {
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const CarEV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // ! Link prototypes
// CarEV.prototype = Object.create(Car.prototype);

// // ! Set the prototype constructors
// CarEV.prototype.constructor = CarEV;
// //console.dir(CarEV.prototype.constructor);

// // ! charge battery function
// CarEV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`Charging ${this.make} to ${this.charge}%`);
// };

// // ! override the init function
// CarEV.prototype.init = function () {
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// // ! override the accelerate function
// CarEV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// // ! Regular Gas powered Cars
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.init();
// mercedes.init();

// const tesla = new CarEV('Tesla', 120, 23);
// console.log(tesla);
// tesla.init();
// tesla.chargeBattery(50);
// tesla.init();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();

console.log('-----Challenge 4-----');

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  init() {
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return speed * 1.6;
  }
}

class EV extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Charging ${this.make} to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

// ! Gas Powered Vehicles
const ford = new CarCL('Ford', 120);
const bmw = new CarCL('BMW', 120);
const mercedes = new CarCL('Mercedes', 95);

ford.init();
bmw.init();
mercedes.init();

// ! Electric Powered Vehicles
const rivian = new EV('Rivian', 120, 23);

// ! Chain methods for the rivian
rivian
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .chargeBattery(78)
  .accelerate()
  .brake();

console.log(rivian);
