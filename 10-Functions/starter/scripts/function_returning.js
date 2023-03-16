"use strict";

// Because of how we can implement First-Class functions as higher order 
// functions, we can not only use a function as an argument, but also 
// return a function from another function. 

const greetingFunction = function(greetingString)
{
    // We are going to return this function, which will let us customize 
    // this function and then call upon this customized function whenever we
    // want. 
    const greetByNameFunction = function(nameString)
    {
        // We can use the greetingString inside of the returned function 
        // because of something called closure. Closures themselves are 
        // an example of a function preserving its lexical environment, 
        // allowing us to continue to use any variables which were declared 
        // at the time the function was created. In practice, this means that 
        // we can use the greetingString variable even without access to the 
        // greetingFunction. 
        console.log(`${greetingString} ${nameString}`);
    }
    return greetByNameFunction;
};

const returnedHelloFunction = greetingFunction("Hello");
returnedHelloFunction("Kyle");

// Because the greetingFunction returns a function, we just call the returning
// function immediately without assigning it to a variable. This is extremely 
// useful for functional programming, which is a programming paradigm which 
// predominantly uses functions instead of Object Oriented Prorgramming. 
greetingFunction("Go away")("Dagoth Ur");