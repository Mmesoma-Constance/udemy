"use strict";

// let arr = ["a", "b", "c", "d", "e"];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// // SPLICE
// arr.splice(-1);
// console.log(arr);

// arr.splice(1, 2);

// console.log(arr);

// // REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join("-"));

// // AT
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr.length - 1);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// /////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log("---------------FOREACH---------------");

// movements.forEach(function (mov, i) {
//   if ((mov, i > 0)) {
//     console.log(`You deposited ${i + 1}`);
//   } else {
//     console.log(`You withdraw ${Math.abs($i - 1)}`);
//   }
// });

///////////////////////////////////////

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euto"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set("USD");
