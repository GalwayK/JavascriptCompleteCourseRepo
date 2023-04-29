"use strict";

const Person = function(strFirstName, numBirthYear)
{
    this.strFirstName = strFirstName;
    this.numBirthYear = numBirthYear;

};

Person.prototype.numCurrentYear = 2023;

Person.prototype.toString = function()
{
    return `This is ${this.strFirstName}.` 
    + ` They are ${this.calcAge()} years old.`;
}

Person.prototype.calcAge = function()
{
    return this.numCurrentYear - this.numBirthYear;
}

const perKyle = new Person("Kyle", 1997);

// Constructor of perKyle.
console.log(perKyle.__proto__.constructor);

// Constructor of Person constructor's prototype.
console.log(perKyle.__proto__.__proto__.constructor);

// Creating a new array with the array constructor.
const arrNumbers = new Array(1, 2, 1, 3, 6, 3, 4);

// Array prototype equals Array constructor's prototype field. 
console.log(arrNumbers.__proto__ === Array.prototype);

// Prototype of Array prototype.
console.log(arrNumbers.__proto__.__proto__);

arrNumbers.sort((currentNumber, nextNumber) => 
{
    return currentNumber >= nextNumber ? 1 : -1;
});

Array.prototype.unique = function()
{
    return [...new Set(this)];
}

// Customizing prototype Array with new method (don't do this)
console.log(arrNumbers.unique());

const headerOne = document.querySelector("h1");
console.log(headerOne);

// Prototype chain for an HTML header object.
console.dir(headerOne.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);