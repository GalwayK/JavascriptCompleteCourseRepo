"use strict";

// Javascript has first-class functions, which means that functions are simply 
// values which we can assign to variables or otherwise use. Functions are 
// just considered another type of object. Because objects are values, 
// functions are objects too. We can also pass functions as arguments to 
// other functions. Notably, we do this in order to add event listeners. 
// We can also return a function from another function. It is rarer, but 
// functions can also have methods which we call on. 

document.querySelector("body").addEventListener("click", testFunctionTwo);

function testFunctionTwo()
{   
    console.log("This is a function I passed into another function!");
}

const testFunctionOne = (testFunction=testFunctionTwo) =>
{
    testFunctionTwo();
}

testFunctionOne();

// Because JavaScript uses First-Class Functions, we can use it to create 
// Higher Order Functions: These are functions which receieve a function, 
// return a fucntion, or both. See adding an event listener: it receives a 
// function as an argument, which is used as a callback function. 

function counterFunction() // Higher-Level Function
{
    let counter = 0;
    return function() // Returned Function
    {
        counter++;
        console.log(counter);
    }
};
let count = counterFunction();
for (let i = 0; i < 10; i++)
{
    count();
}

// It is easy to confuse first-class functions with higher-order functions, 
// however they do not mean the same thing. First-class functions are just 
// a feature which allows us to treat functions as objects, or as values.
// Higher-order functions are just a way of implementing this feature to 
// create functions which receieve or return functions. While related, they 
// are not at all the same thing. 

// First-class functions are a concept. 
// Higher-order functions are an implementation. 