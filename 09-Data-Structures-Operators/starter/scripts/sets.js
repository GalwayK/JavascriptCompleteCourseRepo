"use strict";
// In the past, Javascript had few built in data structures. 
// ES6 two more data structures were introduced: sets and maps. 

// A set is a collection of unique values. A set can never have duplicates. 
// To instantiate a set, you must pass in a iterable object of any kind.

const orderSet = new Set(["Pizza", "Pasta", "Tacos", "Pizza", "Pasta"]);
const letterSet = new Set("Kyle Galway");

console.log(letterSet);

console.log(orderSet);

orderSet.add("Pizza");

// A set is similar to an array, but it has no defined order, and no copies.

// A set uses the .size property to return its number of elements. 
console.log(orderSet.size)

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Burger");
console.log(orderSet);
orderSet.delete("Burger");
console.log(orderSet);
console.log(orderSet.values());

for (const letter of letterSet)
{
    console.log(letter);
}


// If you goal is to store values and then to retrieve then you would just use 
// an array. You cannot retrieve the values out of a set. You should only use 
// a set to check if a set has a specific value. 

// One of the main uses of a set is to remove duplicate values from an array. 

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Owner", "Chef"];
// const staffSpots = new Set(staff).size;

// console.log(`Welcome to the restaurant, we have ${staffSpots} jobs.`);

// const staffUnique = [...new Set(staff)];

// // console.log(staffUnique);

// const firstName = prompt("Enter your name: ");
// const nameLength = new Set(firstName).size;

// console.log(`Your name has ${nameLength} unique letters.`);

// Sets are not intended to replace arrays. If you need to store ordered data 
// and don't care about duplicates, then just use an array. They are important 
// to know, but you don't need to use them for everything. 


