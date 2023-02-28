"use strict";
// // Arrays are used to bundle together values. They are a fundamental data structure. 

// const friends = ["Michael", "Steven", "Peter"];

// const years = new Array(1997, 1998, 1999, 2000);

// console.log(friends[0]);

// const keys = {"Michael": "Human"};
// console.log(keys["Michael"]);

// console.log(years[years.length - 1]);
// friends[0] = "Kyle";

// const family = [];
// family.push(friends);
// family.push("Liam");
// console.log(family.length);

// const CURRENT_YEAR = 2023;
// const calculateAge = (year) =>
// {
//     return CURRENT_YEAR - year;
// }
// const birthyears = [1997, 2002, 1980];
// const ages = [];

// birthyears.forEach((birthyear) => 
// {
//     ages.push(calculateAge(birthyear));
// });
// console.log(ages);

const friends = ["Ben", "Tyler", "Ryan"];
const length = friends.push("Greg");

// Array opperations, .length, .indexOf, .includes, .pop, .push, .unshift, .shift.
console.log(length);
console.log(friends);
friends.unshift("Murtaza");
console.log(friends);
console.log(friends.shift());
console.log(friends)

console.log(friends.indexOf("Greg"));
console.log(friends.indexOf("Liam"));

console.log(friends.includes("Centi"));
console.log(friends.includes("Greg"));
