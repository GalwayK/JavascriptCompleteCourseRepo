'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex)
  {
      return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  }
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = secondary;
secondary = main;
main = temp;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
let order = restaurant.order(2, 3);
let [itemOne, itemTwo] = order;
console.log(itemOne, itemTwo);

// Destructuring is an ES6 feature that allows us to unpack arrays into separate
// variables - breaking complex structures into simple structures. 

// const arrayNums = [2, 3, 4];
// const [x, y, z] = arrayNums;
// console.log(x, y, z);
// // console.log(arrayNums);

// We can also use destructuring to receieve multiple return values from a 
// function. 

const nestedArray = [1, 2, [1, 2, 3]];
let [first, , nested] = nestedArray;
console.log(first, nested)

// We can also destructure inside of a destructured array. 
let [i, ,[j, k, l]] = nestedArray;
console.log(j, k, l);

// Lastly, we can use defalt values if we do not know the length of the array. 

const [p, w, r=0] = [8, 9]
console.log(p, w, r)