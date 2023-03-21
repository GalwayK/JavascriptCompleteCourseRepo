"use strict";

let testArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(testArray);

// THE FILL METHOD 

// We can create arrays manually if we already have our data. However, we can 
// also create our arrays programmatically. For example, if ever pass in only 
// one argument into an array's constructor, it will create an array with a 
// number of empty elements equal to the number we passed into the constructor.

// Generates an array with 10 empty indexes. 
let emptyArray = new Array(10);
console.log(emptyArray);

// We cannot use an empty array for anything - we can't use the map, filter, 
// reduce, find, findIndex, or any other methods. However, we can call the fill 
// method on this empty array. 

// The fill method can be called on an empty array to fill up that array with 
// a specified value, such as 5. This mutates the original array. 
// emptyArray.fill(5);

// We can also specify where we want the fill method to start filling. It will 
// fill up the array, not including the index where the fill began. The fill 
// method cannot create additional empty slots in an array, only fill slots. 
let value = 5;
const startIndex = 1;
const endIndex = 9;
emptyArray.fill(value, startIndex, endIndex);
console.log(emptyArray);
testArray.fill(23, 5, 8);
console.log(testArray);

// THE FROM METHOD 
// The from method is a new method which can be used to create an array and 
// populate its contents in one line. It receives as argument an object with a 
// length field, and a callback function specifying the value to fill the array.
// The from method is intended to convert an iterable object into an array. 

let fromArray = 
    Array.from({"length": 7}, (_, indexNumber, iterableObject) => 
{
    return indexNumber + 1;
});

console.log(fromArray);

const rollDiceFunction = () => parseInt(Math.random() * 6 + 1);

const diceArray = Array.from({"length": 100}, rollDiceFunction);
console.log(diceArray);

// Array.from is intended to convert iterables into arrays. Iterables can be
// anything such as a string, map, or set. We can also use it on iterable 
// values such as the nodeList returned by querySelectorAll.

const retrieveMovementNumbers = (movementDiv) => 
    Number(movementDiv.textContent.slice(0, -1).replace(" ", ""));

const labelClickFunction = function(event)
{
    event.preventDefault();
    const movementsNode = document.querySelectorAll(".movements__value");

    // Using the spread operator. 
    const movementsArrayTwo = [...movementsNode];
    movementsArrayTwo.map(retrieveMovementNumbers);

    // Using Array.from(nodeList, mappingFunction)
    const movementsArray = Array.from(movementsNode, retrieveMovementNumbers);
    console.log(movementsArray);
};

labelBalance.addEventListener("click", labelClickFunction);

// The second argument in the Array.from() method is a mapping method which can 
// map the elements of the array into a different format. Much like how flatMap
// serves two functions of flattening and then mapping an array, Array.from 
// serves two purposes of creating arrays from iterables and mapping them. 
// We could also use the spread operator in order to spread the nodelist, but 
// then we would have to do the mapping later. 