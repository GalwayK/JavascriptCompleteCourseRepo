"use strict";

// Sometimes we only want a function to execute once, and then never again. We 
// can do this by wrapping a function in parentheses and then calling it. 
(function()
{
    console.log("This will never run again.")
})();

// The above function will be called once, and then, because it is assigned 
// as a value to no variable, it is impossible to ever call it again.

(() => 
{
    const localString = "I only exist inside of this function!";
    console.log(localString);
})();
// console.log(localString); This prompts an error as localString is not global.

// The reason we might want to do this again is if we want to define some 
// new variables for a purpose without having these variables become present 
// in the global variable space. This helps with data privacy, and is useful
// fo ensuring our variables are not overwritten or overwrite any other values.

function testFunction()
{
    // We can however return a immediately executed function if we want it to 
    // continue to exist. There is however, basically no reason to ever do this.
    return (function()
    {
        console.log("Please don't kill me.");
    });
}

const shouldNotExistFunction = testFunction();
shouldNotExistFunction();
shouldNotExistFunction();

// Because let and const variables use the scope of their block, this means that 
// we can also just use a set of curly braces to define private variables.
{
    const privateString = "This String is private!"
    console.log(privateString);
}
// console.log(privateString); Produces an error, as privateString is blocked.
// Because we can just use blocks of braces, we don't use immediate functions.
// Still, immediate invoked functions are good when you want to use a function 
// only once. 


