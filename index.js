"use strict";

// // ARRAYS!

// const friends = ["Dave", "Steven", "Des"];

// const year = new Array(1991, 1992, 2002);

// console.log(friends[0]); // Dave
// console.log(friends[friends.length - 1]); // Des

// // HOW TO REPLACE A ELEMENT
// friends[2] = "Stacy";
// console.log(friends); // removes Des adds Stacy

// // HOW TO ADD A NEW ELEMENT AT THE BEGINNIG USING UNSHIFT()
// friends.unshift("Zara");
// console.log(friends);

// // HOW TO ADD A NEW ELEMENT AT THE END USING PUSH()
// friends.push("Shien");
// console.log(friends);

// // HOW TO REMOVE AN ELEMENT AT THE END USING POP()
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const myName = "Soma";
// const values = [myName, "Jay", 2024 - 2002, "teacher", friends];
// console.log(values);

// console.log(friends.indexOf("Dave")); // 1
// console.log(friends.indexOf("Soma")); // -1

// console.log(friends.includes("Dave")); // true
// console.log(friends.includes("Soma")); // false
// friends.push(22);
// console.log(friends.includes(22)); // true
// console.log(friends.includes("22")); // false

// if (friends.includes("Dave")) {
//   console.log("You have a friend called Dave!");
// }

// // Exercise
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// console.log(calcAge(2002));

// const ages = [1993, 1986, 1999, 2002, 2013];
// const age1 = calcAge(ages[0]); // 1993
// const age2 = calcAge(ages[3]); //2002
// const age3 = calcAge(ages[ages.length - 1]); // 2013

// console.log(age1, age2, age3);

// // EXERCISE
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, bills, total);

/////////////////////////////////////////////////////////////

// OBJECTS!

// const me = {
//   firstName: "Soma",
//   lastName: "Nwokem",
//   job: "Coder",
//   birthYear: 2002,
//   friends: ["Dave", "Steven", "Des"],
//   hasDriverLicense: true,
//   calcAge: function () {
//     // console.log(this);
//     // return 2024 - this.birthYear;

//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age} year old ${
//       this.job
//     }, and she has ${this.hasDriverLicense ? "a" : "no"} driver's licsense`;
//   },
// };
// console.log(me.calcAge());
// console.log(me.age); // 22
// console.log(me["calcAge"](2002)); // 22
// console.log(me.age); // 22;
// console.log(me["age"]); // 22;

// const nameKey = "Name";
// console.log(me["first" + nameKey]); // Soma;

// const interested = prompt(
//   "What do you want to know about Me? Choose between firstName, lastName, job, age, and friends"
// );

// if (me[interested]) {
//   console.log(me[interested]);
// } else {
//   console.log("Wrong Request!");
// }

// me.location = "Nigeria";
// me["twitter"] = "@Stacy_Dev";
// console.log(me);

// // CHALLENGE

// console.log(
//   `${me.firstName} has ${me.friends.length} friends, and her best friend is called ${me.friends[0]}`
// ); // Soma has 3 friends, and her best friend is called Dave

// console.log(me.getSummary());

/////////////////////////////////////////////////////

// LOOPS!

// for loops keeps running while the condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`you are great! ${rep} 🙌`);
// }

// const meArray = [
//   "Soma",
//   "Nwokem",
//   2002,
//   "Coder",
//   ["Dave", "Steven", "Des"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < meArray.length; i++) {
//   console.log(meArray[i], typeof meArray[i]);

//   types.push(typeof meArray[i]);
// }

// console.log(types);

// const years = [1989, 1999, 2013, 2001];

// const agesCount = [];

// for (let i = 0; i < years.length; i++) {
//   agesCount.push(2024 - years[i]);
// }
// console.log(agesCount);

// // CONTINUE
// console.log("------------------ONLY STRINGS");
// for (let i = 0; i < meArray.length; i++) {
//   if (typeof meArray[i] !== "string") continue;

//   console.log(meArray[i], typeof meArray[i]);
// }

// // BREAK
// console.log("------------------ONLY BREAK WITH NUMBER");
// for (let i = 0; i < meArray.length; i++) {
//   if (typeof meArray[i] === "number") break;

//   console.log(meArray[i], typeof meArray[i]);
// }

// //////////////////////////

// // LOOPING BACKWARDS AND LOOPS IN LOOPS

// const meArray = [
//   "Soma",
//   "Nwokem",
//   2002,
//   "Coder",
//   ["Dave", "Steven", "Des"],
//   true,
// ];

// for (let i = meArray.length - 1; i >= 0; i--) {
//   console.log(i, meArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----------Starting Excercise ${exercise} 💥`);

//   for (let rep = 0; rep < meArray.length; rep++) {
//     console.log(`Curently lifting ${rep} 😎`);
//   }
// }

// // WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//   console.log(`going great ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// // CHECK WHEN THE DICE IS 6
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) console.log(`Loop is about to end... `);
// }

// //CHALLENGE
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
// };

// const bills = [22, 110, 176, 52, 134, 1002, 20, 44];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }
// console.log(bills, tips, total);

// let calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(total));
// console.log(calcAverage(tips));

// FIXING BUGS!

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "Celsuis",
//     //C) FIX THE BUG
//     value: Number(prompt("Degree Celsius:")),
//   };

//   // B) FIND THE BUG
//   console.log(measurement);
//   //every value in a prompt is converted into a string

//   // console.table(measurement);

//   console.log(measurement.value);

//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTITFY THE BUG
// console.log(measureKelvin());

////////////////////////////////////////

// DEBUGGING IN CHROME!

// const calcTemp = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     // debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTemp([2, 7, 2], [1, 6, 1]);
// console.log(amplitudeNew);

// // THE 'THIS' KEYWORD
// const me = {
//   firstName: "Soma",
//   lastName: "Nwokem",

//   calcAge: function () {
//     console.log(this);
//     console.log(`Hey ${this.lastName}`);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// me.greet(); // Hey underfined
// me.calcAge(); // Hey Nwokem
// // the arrow function doesnt  work with arrow function

const me = {
  firstName: "Soma",
  lastName: "Nwokem",
  job: "Coder",
  birthYear: 2002,
  friends: ["Dave", "Steven", "Des"],
  hasDriverLicense: true,
  calcAge: function () {
    // console.log(this);
    // return 2024 - this.birthYear;

    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and she has ${this.hasDriverLicense ? "a" : "no"} driver's licsense`;
  },
};
console.log(me.calcAge());
console.log(me.age); // 22
console.log(me["calcAge"](2002)); // 22
console.log(me.age); // 22;
console.log(me["age"]); // 22;

const nameKey = "Name";
console.log(me["first" + nameKey]); // Soma;

const interested = prompt(
  "What do you want to know about Me? Choose between firstName, lastName, job, age, and friends"
);

if (me[interested]) {
  console.log(`This agency is available ${me[interested]}`);
} else {
  console.log(
    "Oops! This agency doesn't seem to exist. Please try another search"
  );
}

me.location = "Nigeria";
me["twitter"] = "@Stacy_Dev";
// console.log(me);
