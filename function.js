"use strict";

// const bookings = [];

// const creatBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 23 * numPassengers
// ) {
// ES5
//   numPassengers ||= 1;
//   price ||= 1;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// creatBooking("LH123");
// creatBooking("LH123", 12, 532);
// creatBooking("LH123", 6);
// creatBooking("LH123", 10);

// creatBooking("LH123", undefined, 100);

//////////////////////////////////////////////////////

// const flight = "LH123";
// const soma = {
//   name: "Soma Nwokem",
//   passpost: 2346789876543,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH313";
//   passenger.name = "Mrs." + passenger.name;

//   if (passenger.passpost === 2346789876543) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, soma);
// console.log(flight);
// console.log(soma);

/////////////////////////////////////////////////

// CALLBACK FUNCTIONS

// const high5 = function () {
//   console.log("👋");
// };

// document.body.addEventListener("click", high5);

// ["John", "Jane", "Pal"].forEach(high5);

// const greeting = function (greeted) {
//   return function (name) {
//     console.log(`${greeted} ${name}`);
//   };
// };

// const greetHey = greeting("Hey");
// greetHey("Jonas");
// greetHey("Dan");

// // CHALLENGE
// const greetArr = (greeted) => (name) => console.log(`${greeted} ${name}`);

// greetArr("Hi")("Soma");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book = function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: ` ${this.iataCode} ${flightNum}`,
//       name,
//     });
//   },
// };
// lufthansa.book("234", "Soma");
// lufthansa.book("622", "Johnson");
// console.log(lufthansa);

// // CALL METHOD
// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // DOESNT WORK
// // book(23, "Stacy");

// book.call(eurowings, 23, "Sammy");
// console.log(eurowings);

// const swiss = {
//   airline: "Swiss Airlines",
//   iataCode: "LX",
//   bookings: [],
// };
// book.call(swiss, 532, "Maria");
// console.log(swiss);

// // APPLY METHOD
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // BIND METHOD
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(12, "Emeka");

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Somachi");
// bookEW23("Anna");

// // WITH EVENT LISTENERS

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// // CHALLENGE

// // const greeting = function (greeted) {
// //   return function (name) {
// //     console.log(`${greeted} ${name}`);
// //   };
// // };

// const taxCal = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = taxCal(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// CHALLENGE

// const poll = {
//   question: "What is your favorite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//   },
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

///////////////////////////////////////////////

// const runOnce = function () {
//   console.log("This will never run again");
// };

// runOnce();

// // Immediate invoked function expression
// (function () {
//   console.log("This will never run again");
// })();

// (() => console.log("This will ALSO not work"))();

/////////////////////////////////////////////

// CLOSURE

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();

// // example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 333;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// //

// h();
// f();

// // example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

// //  CHALLENGE

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.body.addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();

// CHALLENGE;

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
};

document
  .querySelector(".buy")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
