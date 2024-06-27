"use strict";

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

///////////////////////////////////////////

// const myName = "mmeSomA NwokeM";
// const username = myName
//   .toLowerCase()
//   .split(" ")
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(username); // Mmesoma Nwokem

// FILTER METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// const deposit = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);

// // function(mov) {
// //   return mov > 0
// // }
// //  // AND
// // mov => mov > 0
// // // IS THE SAME!

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 50);
// console.log(balance);

// Exercise

// const calAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 * age * 4));
// };

// calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const withdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(withdrawal);

// // // BOTH THE SAME
// // currentPin && currentPin === loginPin
// // currentPin?. === loginPin

// console.log(movements.includes(-130));

// // SOME:
// console.log(movements.some((mov) => mov === -130));
// const anyDeposit = movements.some((mov) => mov > 1500);
// console.log(anyDeposit);

// // EVERY
// console.log(movements.every((mov) => mov > 0));

// FLAT

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

////////////////////////////////////////////////////////

// const covertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

//   const exceptions = [
//     "a",
//     "an",
//     "and",
//     "the",
//     "but",
//     "or",
//     "on",
//     "in",
//     "with",
//     "is",
//   ];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(" ");

//   return capitalize(titleCase);
// };

// console.log(covertTitleCase("this is a nice title"));
// console.log(covertTitleCase("this is a LONG title but not too long"));
// console.log(covertTitleCase("and here is another title with an EXAMPLE"));

////////////////////////////////////////////////////////

// CODING CHALLENGE

const dogs = [
  { weight: 22, curfood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curfood: 200, owners: ["Mathilda"] },
  { weight: 13, curfood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curfood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curfood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curfood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curfood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
console.log(dogs.some((dog) => dog.curfood === dog.recFood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curfood > dog.recFood * 0.9 && dog.curfood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
