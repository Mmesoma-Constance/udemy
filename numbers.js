"use strict";

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // CONVERSION
// console.log(Number("23")); // OR
// console.log(+"23");

// // PARSING
// console.log(Number(parseInt("30px", 10)));
// console.log(Number(parseInt("e30", 10)));

// console.log(Number(parseInt("2.5rem")));
// console.log(Number(parseFloat("2.5rem"))); // ALWAYS USE THIS

// console.log(Number.isNaN(20));
// console.log(Number.isNaN("20"));
// console.log(Number.isNaN(+"20X"));
// console.log(Number.isNaN(23 / 0));

// //

// console.log(Number.isFinite(20));
// console.log(Number.isFinite("20"));

// /////
// console.log(Math.max(5, 12, 23, 11, 2)); // 23
// console.log(Math.max(5, 12, "23", 11, 2)); // 23
// console.log(Math.min(5, 12, "23", 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.trunc(Math.random() * 6 + 1));

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// // Rounding numbers

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.9)); // 24
// console.log(Math.floor("23.9")); // 24

// console.log(Math.trunc(-23.3)); // 23
// console.log(Math.floor(-23.3)); // 24 USE FLOOR!

// // Rounding decimals | toFixed() is for decimal places | they are strings
// console.log((2.7).toFixed(0)); // 3
// console.log((2.7).toFixed(3)); // 2.700
// console.log((2.345).toFixed(2)); // 2.35
// console.log(+(2.345).toFixed(2)); // 2.35 // numbers

/////////////////////////////////////
// REMAINDER OPERATOR

// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5
// console.log(8 % 3); // 2
// console.log(8 / 3); // 2.66666666665

// // EVEN NUMBERS

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8)); // true
// console.log(isEven(23)); // false
// console.log(isEven(456)); // true

// // Numeric Seperator

// ///245,674,000,000
// const diameter = 245_674_000_000;
// console.log(diameter);

// console.log(Number("230_000")); // NaN
// console.log(parseInt("230_000")); // 230

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 4);

// // Using BigInt
// console.log(34423467956331124567899865321n);
// console.log(BigInt(34423467956331124567899865321n));
// // console.log(Math.sqrt(16n)); // error

// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(20n == "20"); // true

// const huge = 3447287391839748634882938n;
// const num = 23;
// // console.log(huge * num); // error

// console.log(huge * BigInt(num));

// console.log(huge + " is REALLY big!!");

// // DIVISION
// console.log(10n / 3n); // 3n
// console.log(10 / 3); // 3.33333333335

/////////////////////////////////////////////////////

// Dates

// const now = new Date();
// console.log(now);

// console.log(new Date("May 11, 2002"));
// console.log(new Date(2020, 5, 11, 12, 23, 5));
// console.log(new Date(2020, 10, 34));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // working with date
// const future = new Date(2034, 4, 11, 15, 6, 13);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2030969173000));
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

/// DATE FORMATTING
// day/month/year

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// // const seconds = now.getSeconds();

// const currentDate = document.getElementById("date");
// currentDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;
// // console.log(day);

// //

// const future = new Date(2034, 10, 11, 15, 6, 13);
// console.log(+future);

// const calDaysPassed = (date1, date2) =>
//   Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calDaysPassed(new Date(2034, 4, 15), new Date(2034, 4, 3));
// console.log(days1);

// const daysPaased = calDaysPassed(new Date(), days1);
// console.log(daysPaased);

// if (daysPaased === 0) return "Today";
// if (daysPaased === 1) return "Yesterday";
// if (daysPaased <= 7) return `${daysPaased} days ago`;
// else {
//   const day = `${now.getDate()}`.padStart(2, 0);
//   const month = `${now.getMonth() + 1}`.padStart(2, 0);
//   const year = now.getFullYear();
//   return `${day}/${month}/${year}`;
// }

// // const calDaysPassed = (date1, date2) =>
// //     Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const currentDate = document.getElementById("date");

// // DIDNT WORK!
// const formatDate = function (date) {
//   const calDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//   const daysPaased = calDaysPassed(new Date(), date);
//   console.log(daysPaased);

//   if (daysPaased === 0) return "Today";
//   if (daysPaased === 1) return "Yesterday";
//   if (daysPaased <= 7) return `${daysPaased} days ago`;

//   const day = `${date.getDate()}`.padStart(2, 0);
//   const month = `${date.getMonth() + 1}`.padStart(2, 0);
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };
// formatDate(date);

/////////////////////////////////////////////////////
// INTERNATIONALIZING DATES

// const  account1 = {
//     owner: 'Mmeso',
//     currency: 'USD',
//     locale: 'en-US'
// }

// const  account2 = {
//     owner: 'Stacy',
//     currency: 'USD',
//     locale: 'en-US'
// }

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // also 2-digit
  year: "numeric", // also 2-digit
  weekday: "short", // also 2-digit
};

const locale = navigator.language;
console.log(locale);
currentDate.textContent = new Intl.DateTimeFormat("locale", options).format(
  now
); // en-US, en-UK

/////////////////////////////////////////////////

// const num = 3882652.23;

// const option = {
//   style: "currency",
//   currency: "USD", // EUR
// };

// console.log("US: ", new Intl.NumberFormat("en-US", option).format(num)); // $3,882,652.23
// console.log("German: ", new Intl.NumberFormat("de-DE", option).format(num)); // $3.882.652,23
// console.log("Syria: ", new Intl.NumberFormat("ar-SY", option).format(num)); // $3,882,652.23

///////////////////////////////////////////////

// TIMER!

// long way
// setTimeout(function() {
//   console.log('Here is your pizza 🍕')
// }, 3000)

// Short way
const ingredients = ["sausage", "cabbage"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  // "sausage",
  // "cabbage"
  ...ingredients
);
console.log("Waiting...");

// if (ingredients.includes("cabbage")) clearTimeout(pizzaTimer);

// setInterval(function () {
//   const now = new Date();
//   const day = now.getDate();
//   const hours = `${now.getHours()}`.padStart(2, 0);
//   const minutes = `${now.getMinutes()}`.padStart(2, 0);
//   const seconds = `${now.getSeconds()}`.padStart(2, 0);

//   const currentTime = document.getElementById("today");
//   currentTime.textContent = ` ${hours}:${minutes}:${seconds}`;
// }, 1000);

const timerCountdown = document.getElementById("timer");
const startTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");

    // In each call, print the remaining time in UI

    timerCountdown.textContent = `${min}:${sec}`;

    // when time is 0, stop timer
    if (time === 0) {
      clearInterval(timer);
      timerCountdown.textContent = "Time has ellapsed!";
    }
    // decrease 1 seconds
    time--;
  };

  // set time to 2 mins
  let time = 120;

  // call the time every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

let timer;

if (timer) clearInterval(timer);

timer = startTimer();

//
// clearInterval(timer);
// timer = startTimer();
