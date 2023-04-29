"use strict";

// Class expression 
// let PersonClass = class {


// };

// Class statement

class PersonClass
{
    // Everything in constructor belongs to instance.
    constructor(strFirstName, numBirthYear)
    {   
        this.strFirstName = strFirstName;
        this.numBirthYear = numBirthYear;
    }   

    // Everything outside of constructor belongs to prototype.
    toString()
    {
        return `${this.strFirstName} was born in ${this.numBirthYear}`; 
    }

    calcAge()
    {
        return this.numCurrentYear - this.numBirthYear;
    }
}

// We can access the prototype of the PersonClass class (which is a function)
PersonClass.prototype.numCurrentYear = 2023;

const perKyle = new PersonClass("Kyle", 1997);

console.log(perKyle.toString());

console.log(`${perKyle.strFirstName} is ${perKyle.calcAge()} years old.`);

// Properties of instance.
console.dir(perKyle);

// Properties of prototype.
console.dir(perKyle.__proto__);