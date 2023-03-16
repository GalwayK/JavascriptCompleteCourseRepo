"use strict";

// Closures are used to retain the variable space of a function's scope. We do 
// not create closures manually, we use them when they automatically occur.

const generateBookingFunction = function(nameString="Kyle") 
{
    // In this case, we are using closure to maintain the value of the 
    // nameString, even after we have returned the bookingFunction and 
    // it is not longer part of the generateBookingFunction's scope. It 
    // is important to realize that the generateBookingFunction's execution 
    // context really is gone. It no longer exists and cannot be accessed.
    const bookingFunction = (eventString)=>
    {
        return `${eventString} booked for ${nameString}`;
    }
    return bookingFunction;
};
// Closure is used so that we can retain the variables of the upper function's 
// scope. In this case, we can still access the nameString ("Kyle") even though 
// the execution content of the upper scope where the variables was created no 
// longer exists. We can say that closure allows a function to remember all of 
// the variables that existed when a function was created. All this means is 
// that all functions have access to the environment in which they were created.
let kyleBookingFunction = generateBookingFunction("Kyle");
console.log(kyleBookingFunction("Concert"));
console.log(kyleBookingFunction("Archery Contest"));

// Variables used for closure have priority even over the scope chain - even 
// global variables will not be used over a closure variable. Like a backpack.
// Note that we cannot even access closed over variables: they are closed. 

const generateBookingCounterFunction = () => 
{
    let passengerCount = 0;
    return function()
    {
        return ++passengerCount;
    };
};

const bookingCounterFunction = generateBookingCounterFunction();
for (let i = 0; i < 20; i++)
{
    console.log(bookingCounterFunction());
}

// We can look at a closure's variables with console.dir on any function 
// which uses dir. If the output of .dir is enclosed within [[]] brackets 
// that means it is an internal property which cannot be used by programmers. 
console.dir(bookingCounterFunction);

// Note that we don't need to return a function for closure to occur. It 
// only requires a function to remember it's execution context after that 
// context has ceased to exist. 

let testVariableF;

const testFunctionOne = function()
{
    const testVariableA = 23;
    testVariableF = function()
    {
        console.log(testVariableA * 2);
    };
}

const testFunctionTwo = () => 
{
    const testVariableB = 101;
    testVariableF = function()
    {
        console.log(testVariableB * 2);
    }
}

testFunctionOne();
// In this example, we used a global variable inside of a function and assigned 
// that variable to a function. It still remembered the value of testVariableA
// even though testFunction has run and no longer exists.
testVariableF();
testFunctionTwo();
testVariableF();

// As we can see, when we run the second variable it overrides the previous 
// scope of testFunctionOne, only retaining the value of the testFunctionTwo.
// The function will always remember the variables that existed each time it 
// was declared. This is even if we don't need to use closure. 
console.dir(testVariableF);

// Timers are also an example of closure. 

const boardPassengersFunction = function(passengersNumber, waitTime)
{
    // const passengersPerGroupNumber = passengersNumber / 3;
    let boardedPassengersNumber = 0;
    let intervalIdNumber;

    // We can use the setTimeout function to timeout after a set number of 
    // milliseconds. 1 second is equal to 1000 milliseconds.

    // The callback function will be called independently from the parent 
    // function. Even though it runs 10 seconds after the parent function 
    // has stopped existing, it still remembers all of the variables.

    const beginBoardingFunction = function()
    {
        console.log(`We have begun boarding all `
        + `${passengersNumber} passengers.`);
        
        // Set interval is used to create a repeated timeout. It returns a 
        // interval ID which must be used to turn it off with clearInterval.
        intervalIdNumber = setInterval(boardNextGroupFunction, 2000);
    };

    const boardNextGroupFunction = () =>
    {
        boardedPassengersNumber += passengersPerGroupNumber;
        console.log(`${boardedPassengersNumber} of ${passengersNumber} `
        + `have boarded!`);
        if (boardedPassengersNumber >= passengersNumber)
        {
            console.log("All passengers have boarded!");
            clearInterval(intervalIdNumber);
        }
    };

    // In this example, in spite of the fact that the two functions running on 
    // the timeout and interval will be running after their parent function has 
    // returned, the values of the parent function will remain for them to 
    // access. This is an example of how closure is used with the ansynchronous 
    // nature of JavaScript, and how often is is used with callback functions.
    setTimeout(beginBoardingFunction, waitTime * 1000);

    console.log(`Will start boarding in ${waitTime} seconds.`);
};

// If a variable can be found with closure, it will be used first. If the 
// variable is not found with closure, it will look into the global execution 
// context for the variable. An example of this is found below. 

let passengersPerGroupNumber = 250;
// The above variable will only be used if the variable inside of the 
// boardingPassengersFunction does not exist or is commented out. 

boardPassengersFunction(1000, 2);

