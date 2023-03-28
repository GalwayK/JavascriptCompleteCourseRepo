"use strict";

// JavaScript has two timers we can use to set events. The setTimerout()
// will run only once when the timer expires, while the setInterval() timer 
// will constantly run over and over again until we stop it. To use them, we 
// provide a callback function followed by the number of milliseconds to wait
// before we run the callback function. 

const orderPizza = (...args) =>
    console.log(`I am ordering pizza with ${args.join(", and ")} 🍕!`);

// const strToppings = prompt("Please enter all of your toppings!");

// let arrayToppings = strToppings.split(",");
// arrayToppings = arrayToppings.map((strTopping) => strTopping.trim());

const arrayToppings = ["pepperoni", "olives", "cheese"];
let numMilliseconds = 1000;    
const timerPizza = setTimeout(orderPizza, numMilliseconds * 5, ...arrayToppings);

// This script will run the orderPizza function once after 5 seconds.
// It is important to note that the code does not stop after our callback 
// function and timer are declared. The code will continue to run and then 
// call the callback function when the timer has expired. This will be explored 
// more in the section about asynchronous JavaScript. In the setTimeout 
// function, the third argument onwards will be the arguments passed. 
// Also, we can disable a timer with the clearTimeout function. 

if (arrayToppings.includes("pineapple"))
{
    console.log("Cancelling order. No pineapple.");
    clearTimeout(timerPizza);
}

const funcGenerateClockFunction = () => 
{
    let timeStart = Date.now();

    return function()
    {
        let timeCurrent = Date.now();
        let timeDifference = (Math.abs(timeStart - timeCurrent))  / 1000;
        console.log(`It has been ${Math.floor(timeDifference)} seconds since `
         + `this script first ran!`);
    }
};

let intervalClock = setInterval(funcGenerateClockFunction(), 1000);

setTimeout((intervalClock) => 
{
    clearInterval(intervalClock);
}, 1000 * 5, intervalClock);
