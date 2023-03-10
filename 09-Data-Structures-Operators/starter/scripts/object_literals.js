const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const openingHours = 
{
    [weekDays[2]]: {
        open: 10, 
        close: 18
    },
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
};

console.log(openingHours.Wednesday)

const restaurant = 
{
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
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
    orderPizza(mainTopping, ...altToppings)
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

console.log(restaurant.orderPizza("Cheese", "The Souls of the Damned"));

// An object literal is an object which is literally written into code. 
// ES6 has enhanced features to make written object literals easier. 

