const weekDays = ["mon", "tues", "wed"];
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

// console.log(restaurant.openingHours.mon?.open);

// // With optional chaining, if a property does not exist, an undefined
// // value is immediately return. 

// console.log(restaurant.openingHours.mon?.open);

// let stuff = restaurant.blech?.tacos;
// console.log(stuff)

const days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

for (const day of days)
{
    let status = restaurant.openingHours[day]?.open ?? "Closed";

    if (status != "Closed")
    {
        status = "Open";
    }
    console.log(`${status} on ${day}`);
}

// Only if the property before the ?. operator exists, will the 
// property be called. It only checks for nullish falsy values, 
// which are undefined and null. All other falsy values will 
// return true and return the property. 

// Both optional chaining and the nullish operator rely on the concept 
// of nullish values of null or undefined, which are distinct from 
// falsy values of 0, null, "", or undefined. 

console.log(restaurant.gerbils?.(0, 1) ?? "Method does not exist.")

// We can also use optional chaining on methods to check if they 
// exist. 

// Optional chaining even works on array to check if an array 
// is empty. 

let users = [{name: "Kyle", Bleh: "Worfle"}];

console.log(users[0]?.name ?? "User does not exist." )