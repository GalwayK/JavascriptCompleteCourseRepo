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

// We can loop over arrays because arrays are iterable, but we can loop over 
// objects, but in a non-iterative way. 

// Property names are also called keys. Instead of looping over the object, 
// we can loop over an array of the object's keys, which will allow us to 
// access the object's parameters. 

const restaurantParameters = Object.keys(restaurant);
const openingParams = Object.keys(restaurant.openingHours)

let hourDays = `The restaurant is open for ${openingParams.length } days of the week:`;
let openDays = "";
for (const openDay of openingParams)
{
    openDays += ` ${openDay}`;
}
hourDays += openDays;
console.log(hourDays);

// There are effectively three ways of looping over an object. 
// 1. LOOPING OVER KEYS 
const restaurantKeys = Object.keys(restaurant);
for (const key of restaurantKeys)
{
    console.log(key);
}

// 2. LOOPING OVER VALUES 
const restaurantValues = Object.values(restaurant);
for (const value of restaurantValues)
{
    console.log(value);
}

// 3. LOOPING OVER KEY VALUE PAIRS (ENTRIES)
const restaurantEntries = Object.entries(restaurant);
for (const entry of restaurantEntries)
{
    let [key, ...value] = entry;
    console.log(`${key}: ${value}`);
}

console.log("-----")

const openingHoursEntries = Object.entries(openingHours);

for (const [day, {open: openHour, close: closeHour}] of openingHoursEntries)
{
    console.log(`On ${day} we open at ${openHour} and close at ${closeHour}`);
}
