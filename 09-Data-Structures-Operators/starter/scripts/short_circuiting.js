
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
    }, 
    testArray: [1, 2, 3],
    orderPasta: function(ingOne, ingTwo, ingThree)
    {
        console.log(`Here is your pasta with ${ingOne}, ${ingTwo}, ${ingThree}`)
    }, 
    orderPizza: function(mainTopping, ...altToppings)
    {
        let outputString = "";
        for (let i = altToppings.length - 1; i > 0; i--)
        {
            outputString = `${outputString}, ${altToppings[i]}`
        }
        if (altToppings.length)
        {
            outputString = `${outputString}, and ${altToppings[0]}`
        }
        outputString = `Thank you for ordering Pizza with ${mainTopping}${outputString}`;
        return outputString;
    }
  };

// We can use non-boolean values for boolean expressions. 

// OR EXPRESSIONS

// console.log(3 || "Jonas"); // This results in 3. 
// console.log(3 && "Jonas"); // This results in Jonas
// console.log(1 || 0) // OR short circuit. 
// console.log(0 && 1) // AND short circuit.
// console.log(true || 0); // OR short circuit.
// console.log(undefined || null) // OR non-short circuit

// // For OR operators, if the first value is truthy, it will short circuit. 
// // For AND operators, if the second value is falsy, it will short circuit

// // A OR statement will return the first value that is true. 
// console.log(undefined || 0 || "" || "Hello" || 23 || 0);

// const guestOne = restaurant.numGuests || 10;
// console.log(guestOne)

console.log(0 || null || undefined);
// The OR operators will return the first true value, 
// or the last value if all of the values are false. 

// AND EXPRESSIONS 

// The AND operator works in the exact opposite way as the AND operators. 

console.log(0 && "Jonas");

// The AND operators returns the first false value it finds, 
// or the last value if all of the values are true.


let order = restaurant.orderPizza && restaurant.orderPizza("Bleh");
console.log(order);

// We can use the AND operator to check for truthfulness before execution. 
// We can use the OR operator to declare default values. 