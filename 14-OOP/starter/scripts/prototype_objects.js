"use strict";

/*
Every object in JavaScript automatically has a property called 'prototype'.
Every object created by a constructor will access that constructor's prototype.
A constructor's prototype field is not the prototype of that function, but the 
prototype of all of the objects created by that constructor. It is badly named.
*/

const Person = function(strFirstName, numBirthYear)
{
    // Assign instance properties to object.
    this.strFirstName = strFirstName;
    this.numBirthYear = numBirthYear;

};

// Add field to prototype for all instances to use. These properties are not 
// part of the instance - they belong to the prototype, but instances use them.
Person.prototype.numCurrentYear = 2023;

// Create methods for prototype which can be used by instances.
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

console.log(perKyle.toString());

// Seeing prototype of object with __proto__
console.log(perKyle.__proto__);

// Prototype of object is the same as the prototype of the constructor
console.log(perKyle.__proto__ === Person.prototype);
console.log(Person.__proto__);

// Prototype of function is not function's prototype
console.log(Person.prototype.isPrototypeOf(Person));

// Prototype of person object is the constructor prototype
console.log(Person.prototype.isPrototypeOf(perKyle));

// Person object does not have prototype's properties. 
console.log(perKyle.hasOwnProperty("numCurrentYear"));

// Property does have its own property.
console.log(perKyle.__proto__.hasOwnProperty("numCurrentYear"));

// Prototype does not have instance's properties. 
console.log(perKyle.__proto__.hasOwnProperty("strFirstName"));

// Instance has its own instance properties.
console.log(perKyle.hasOwnProperty("strFirstName"));

