'use strict';

// A function is a piece of code we can reuse. 
// Using a function is called calling / running / invoking the function.

// function logger(value)
// {
//     console.log(value);
// }

// function fruitProcessor(apples, oranges)
// {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }   

// const juice = fruitProcessor(2, 3);
// logger(juice);

const CURRENT_YEAR = 2023;

// Function declaration
// function ageCalculator(birthyear)
// {
//     return CURRENT_YEAR - birthyear;
// }

// console.log(ageCalculator(1997))

// Function declarations can be called before being defined. 
// Functions expressions cannot be called before being defined.


// Function expression 
// const calculateAge = function(birthyear) 
// {
//     return CURRENT_YEAR - birthyear;
// }

// console.log(calculateAge(1997));

// Arrow functions are the third type of function. 
// If your function is one line,  you may wish to use an arrow function.

// Arrow function 
// const calculateAge = birthyear => CURRENT_YEAR - birthyear;

// console.log(calculateAge(1997))

// Three types of functions: 
// Function declarations: Declaring a function.
// Function expressions: Assigning a function to a variable.
// Arrow functions: Using arrow syntax to make a function. 

// Functions can also call other functions from within themselves. 
// const cutFruit = fruit => 
// {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges)
// {
//     apples = cutFruit(apples);
//     oranges = cutFruit(oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }
// console.log(`${fruitProcessor(2, 4)}`)

const calculateAge = (year) =>
{
    return CURRENT_YEAR - year;
}

const yearsUntilRetirement = function(yearOfBirth, firstname)
{
    const age = calculateAge(yearOfBirth);
    const retirement = 65;
    return retirement - age > 0 ? retirement - age : -1;
    return retirement - age;
}

const yearsToRetirementKyle = yearsUntilRetirement(1997, "Kyle");
const yearsToRetirementWalter = yearsUntilRetirement(1950, "Walter");

const walterRetirementStatus = yearsToRetirementWalter > 0 ? `Walter has ${yearsToRetirementWalter} years to retire.` : "Walter is already retired!";

console.log(walterRetirementStatus)

