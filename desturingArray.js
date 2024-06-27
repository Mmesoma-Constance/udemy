"use strict";

const weekdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Stacy Cuisine",
  location: "Via Anambra, 123 Avenue",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Rice", "Beans", "Salad", "Bread", "Garlic"],
  mainMenu: ["Pizza", "Pasta", "Shawarma"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "6:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};

// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
//   console.log(day);
// }
// console.log(openStr);

////////////////////////////////////////
// LOOPING ARRAY: FOR-OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

////////////////////////////////////////////
// OR OPERATOR ||

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;

// console.log(guest); // 10

// // NULLISH OPERATOR ??
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect); // 0

//////////////////////////////////////////////////

// REST PATTERN BECAUSE ON THE LEFT SIDE OF =

// const [a, b, ...others] = [1, 2, 3, 4, 6];
// console.log(a, b, others);

// const [pizza, , shawarma, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, shawarma, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) sum += number[i];
//   console.log(sum);
// };

// add(2, 5);
// add(4, 6, 2, 4, 5);
// add(9, 1, 5, 2, 6, 4, 7, 3);

// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");

////////////////////////////////////////

// SPREAD OPERATOR (...) BECAUSE ON THE RIGHT SIDE OF =

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArray = [3, 4, ...arr];
// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, "Abacha", "Fried Rice", "Sauce"];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menuJoined = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuJoined);

// // Iterables: arrays, strings, maps, set, NOT Objects
// const string = "Soma";
// const letters = [...string, "", "N."];
// console.log(letters);
// console.log(...string);

// const ingredients = [
//   //   prompt("Let's make pasta! ingredients 1?"),
//   //   prompt("Ingredients 2?"),
//   //   prompt("Ingredients 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(
//   (ingredients[0] = "eggs"),
//   (ingredients[1] = "sadine"),
//   (ingredients[2] = "fish")
// );
// restaurant.orderPasta(...ingredients);

// // OBJECTS
// const newRestaurant = {
//   foundedIn: 1990,
//   ...restaurant,
//   founder: "Mmesoma Constance",
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Soma's Kitchen";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////

// DESTURING ARRAYS

// restaurant.orderDelivery({
//   time: "12:30",
//   address: "no 7 Ugbaja Street, Awada",
//   mainIndex: 1,
//   starterIndex: 1,
// });

// restaurant.orderDelivery({
//   address: "no 13 Achina Street, Awada",
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // "=" is used to set a default value
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 421;
// const obj = { a: 1, b: 2, c: 8 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// /////////////////////////////////

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const nested = [2, 4, [5, 6]];
// // //const [i, , j] = nested;

// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // // DEFAULT VALUES
// // const [r = 1, p = 1, q = 1] = [4, 6];
// // console.log(r, p, q);

/////////////////////////////////////
// DESTURING ARRAYS

// // 3
// for(const [team, odd] )

// /////////////////////////////////////////

// // SET

// const orderSet = new Set(["Pizza", "Pizza", "Pasta", "Pizza", "Pizza"]);
// console.log(orderSet.size);
// console.log(orderSet.has("Pizza")); // true
// console.log(orderSet.has("bread")); // false
// orderSet.add("Sauce");
// orderSet.add("Sauce");
// orderSet.delete("Pizza");
// // orderSet.clear();

// console.log(orderSet);

// // looping set
// for (const order of orderSet) console.log(order);

// // example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter", "Chef"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff.size)); // DONT
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Waiter", "Chef"]).size
// );

// console.log(new Set("MMESOMACHUKWU").size);

///////////////////////////////////////
// MAP

// const rest = new Map();
// rest.set("name", "Classico");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Rice", "Beans", "Salad", "Bread", "Garlic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are close :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 25;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.delete(2));
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

/////////////////////////////////////////////////
// MAP:ITERATION

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct🎉"],
//   [false, "Try Again!"],
// ]);

// console.log(question);

// // quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer"));

// // // long method
// // const correctAnswer = question.get("correct");
// // if (answer === correctAnswer) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// // using map for short method
// console.log(question.get(question.get("correct") === answer));

////////////////////////////////////////////

// CHALLLENGE

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔄 Substition"],
//   [47, "⚽ GOAL"],
//   [61, "🔄 Substition"],
//   [64, "🟡 Yellow Card"],
//   [69, "🔴 Red Card"],
//   [70, "🔄 Substition"],
//   [72, "🔄 Substition"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🟡 Yellow Card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

///////////////////////////////////////////

// SLICE, INCLUDES, INDEXOF

// const airline = "TAP Air Portugal";
//const plane = "A320";

// console.log(plane[0]); // A
// console.log("B340"[2]); // 4

// console.log(airline.length); // 16
// console.log(airline.indexOf("r")); // 6
// console.log(airline.lastIndexOf("a")); // 14
// console.log(airline.indexOf("Portugal")); // 8
// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); //Air
// console.log(airline.slice(0, airline.indexOf(" "))); // TAP
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal
// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seat
//   const s = seat.slice("-1");
//   if (s === "B" || s === "E") console.log("You got the middle seat 🤦‍♀️");
//   else console.log("You got lucky!😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// const passenger = "jOnAs";
// console.log(passenger);

// console.log(`${passenger[0].toUpperCase()}${passenger.slice(1).toLowerCase()}`);

// // Comparing Emails
// const email = "hello@soma.io";
// const loginEmail = " Hello@Soma.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalEmail = loginEmail.toLowerCase().trim();
// console.log(normalEmail);

// // replacing

// const priceGB = "423,64#";
// const priceUS = priceGB.replace("#", "$").replace(",", ".");
// console.log(priceGB);
// console.log(priceUS);

// const announcement =
//   "All passengers come to the boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));

// const plane = "A32neo";

// console.log(plane.includes("A"));
// console.log(plane.includes("booeing"));
// console.log(plane.startsWith("a"));

// if (plane.startsWith("A") && plane.endsWith("neo")) {
//   console.log("YES it does!");
// }

// // Practice exercise
// const checkBeggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are Not allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBeggage("I have a laptop, some Food and a pocket Knife");
// checkBeggage("Socks and camera");
// checkBeggage("Got some snacks and a gun for protection");

////////////////////////////////////////////

// SPLIT aAND JOIN

// console.log("a+very+nice+string".split("+"));
// console.log("Soma Nwokem".split(" "));

// const [firstName, lastName] = "Somachi Nwokem".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join("_");
// console.log(newName);

// // Capitalize the first letters

// const capitalizeNames = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeNames("jessica ann smith davis");

// // Padding

// const message = "Go to gate 23e";
// console.log(message.padStart(45, "+").padEnd(30, "+"));
// console.log("Jonas".padStart(20, "="));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(4232468876));
// console.log(maskCreditCard(6934214988048));
// console.log(maskCreditCard(123456616798654));

// // repeat
// const message2 = "Bad weather... All Departures Delayed... ";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} in line ${"✈".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(2);
// planesInLine(15);

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_depature

//CHALLENGE
// const figures = +_Arrival;bru124568842,fao7532146,11:45
// +_Arrival;bru124568842,fa  7532146,12:45
// +_Arrival;bru124568842,fao7532146,11:45

// const getCode = str => str.slice(0, 3).toUpperCase()

// for (const flight 0f flights)
