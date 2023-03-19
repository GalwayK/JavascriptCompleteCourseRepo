// Keys are similar to objects, in that they can store key value pairs. 
// Unlike objects, a map can have any datatype as the key. However, a map 
// cannot contain methods only functions which do not have the this keyword. 
"use strict";

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
        outputString = `Thank you for ordering Pizza with 
${mainTopping}${outputString}`;
        return outputString;
    }
};

// // The easiest way to make a map is to make an empty map. 
// const restaurantMap = new Map();

// restaurantMap.set("name", "The Hungry Dragon");
// restaurantMap.set(1, "Oakville, Ontario");
// restaurantMap.set(2, "Mississauga, Ontario");

// // The set method returns the updated map, which lets us chain together set 
// // methods. 

// restaurantMap.set("open", 8);
// restaurantMap.set(close, 21);
// restaurantMap.set(true, "We are open.").set(false, "We are closed.");
// console.log(restaurantMap);

// console.log(restaurantMap.get(true));

// const time = 21;
// console.log(restaurantMap.get(time > restaurantMap.get("open" && time < restaurantMap.get("close"))));

// restaurantMap.delete("name");
// console.log(restaurantMap.get("name"));
// console.log(restaurantMap.size);

// // We can clear a map with the clear method.
// restaurantMap.clear();

// const arrayTest = [1, 2];

// restaurantMap.set(arrayTest, "Test");
// console.log(restaurantMap.get(arrayTest));
// restaurantMap.set(document.querySelector("h1"), "Heading")
// console.log(restaurantMap);


const question = new Map([
    ["Question", "What is the best programming language in the world:"],
    [1, "C"],
    [2, "Java"], 
    [3, "JavaScript"], 
    ["correct", 3],
    [true, "Correct!"],
    [false, "Sorry, not correct."]
]);

// We can convert an object into a map by using the object's entries as the 
// argument for instantiating a new map. 
// const restaurantMap = new Map(Object.entries(restaurant));
// console.log(restaurantMap);

// console.log(question.get("Question"))
// for (const [key, value] of question)
// {
//     if (typeof(key) === "number")
//     {
//         console.log(value);
//     }
// }
// const userAnswer = Number(prompt(question.get("Question")));

// let outputKey = userAnswer === question.get("correct");
// console.log(question.get(outputKey));

// Sometimes we also want to convert a map back to an array. 

const arrayFromMap = [...question];
console.log(arrayFromMap);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()])