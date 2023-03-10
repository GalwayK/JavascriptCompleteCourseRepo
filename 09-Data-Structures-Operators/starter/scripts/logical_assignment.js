
const restaurant = 
{
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

const res1 = 
{
    name: "Capri", 
    numGuests: 0, 
    owner: null
};

const res2 = {...res1, 
numGuests: undefined, 
owner: "Kyle"};

// res1.owner &&= "Anonymous";
// res2.owner &&= "Anonymous";
// console.log(res1.owner);
// console.log(res2.owner);

// // res1.numGuests = res1.numGuests || 10;
// // res2.numGuests = res2.numGuests || 10;
// // res1.numGuests ||= 10;
// // res2.numGuests ||= 10;
// // res1.numGuests ??= 10;
// // res2.numGuests ??= 10;

// // res1.owner ??= "Anonymous";

// The nullish operator returns false only if null or undefined. 

// console.log(res1.numGuests);
// console.log(res2.numGuests);
// console.log(res1.owner)

// The OR assignment operator will assign a value if the variable 
// does not have a value

// The ?? assignment operator will assign a value if the variable 
// has a null or undefined value. 

// The && assignment operator will assign a value if the variable 
// does have a value.

// res1.owner ||= "Kyle";
// res1.owner ??= "Kyle";
// res1.owner &&= "Kyle";
console.log("Test:", res1.owner);