"use strict";

const gameEvents = new Map([
    [17, "GOAL"], 
    [36, "SUB"], 
    [47, "GOAL"], 
    [61, "SUB"],
    [64, "YELLOW"], 
    [69, "RED"], 
    [70, "SUB"], 
    [72, "SUB"], 
    [76, "GOAL"], 
    [80, "GOAL"], 
    [92, "YELLOW"]
]);

console.log(gameEvents);

// 1. Create an array with no duplicates. 
const arrayEvents = [...new Set(gameEvents.values())]
console.log(arrayEvents);

// 2. Remove the Yellow Card at minute 64.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Calculate the average time between actions. 
const averageTimeBetweenActions = 90 / gameEvents.size
console.log(`On average, there was ${averageTimeBetweenActions} ` +
`minutes between events.`);

// 4. Log every eent to the console as well as what half it took place in.
for (const [key, event] of gameEvents.entries())
{
    if (key < 45)
    {
        console.log(`${event} in the first half at minute ${key}.`);
    }
    else if (key < 90)
    {
        console.log(`${event} in the second half at minute ${key}.`);
    }
    else 
    {
        console.log(`${event} in overtime at minute ${key}!`)
    }
}