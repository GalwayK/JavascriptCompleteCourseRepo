// We can also destructure objects. 
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
  george: "Hi",
  order: function(starterIndex, mainIndex)
  {
      return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  }, 
  orderDelivery: function({starterIndex = 0, mainIndex = 0, time = "21:00",
    address = "Bleck"})
  {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and 
${this.starterMenu[mainIndex]} at ${time}, delivered to ${address}`);
  }
};


const delivery = {
    time: "22:30", 
    address: "Heck", 
    mainIndex: 2, 
    starterIndex: 4
}
restaurant.orderDelivery({});


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
let {fri: {open, close}} = openingHours;
console.log(open, close);

// const 
// {
//     name: restaurantName, 
//     openingHours: hours, 
//     categories: tags, 
//     george: myeh = "Bleh"
// } = restaurant;

// let a = 111; 
// let b = 999;
// const testObject = {a: 23, b: 7, c: 14};

// ({a, b} = testObject);
// console.log(a, b);

// console.log(restaurantName, hours, tags, myeh);
