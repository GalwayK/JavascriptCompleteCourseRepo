
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

// The Nullish operator was introduced in 2020.
restaurant.numGuests = 0;
let guests = restaurant.numGuests || 10;
console.log(guests);

guests = restaurant.numGuests ?? 10;
console.log(guests);
console.log(null ?? null)
// The nullish operator can be considered a special case of the OR 
// operator that checks for null or undefined values.
