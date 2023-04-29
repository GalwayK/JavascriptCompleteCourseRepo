"use strict";

// Getters and Setters for basic objects
const accountKyle = 
{
    strOwner: "Kyle",
    arrMovements: [200, 500, 300, 150],

    // Getter for basic object
    get getLatest()
    {
        return this.arrMovements.slice(-1)[0];
    },

    // Setter for basic object
    set setLatest(numMovement)
    {
        this.arrMovements.push(numMovement);
    }
}

// Getters and setters are properties and so don't use method calls
console.log(accountKyle.getLatest);
accountKyle.setLatest = 50;
console.log(accountKyle.getLatest)

// Getters and Setters for Classes

class PersonClass
{
    // Everything in constructor belongs to instance.
    constructor(strFullName, numBirthYear)
    {   
        this.strFullName = strFullName;
        this.numBirthYear = numBirthYear;
    }   

    // Getter for class
    toString()
    {
        return `${this.strFullName} was born in ${this.numBirthYear}`; 
    }

    get numAge()
    {
        return this.numCurrentYear - this.numBirthYear;
    }

    get getNumBirthYear()
    {
        return this.numBirthYear;
    }

    set setNumBirthYear(numBirthYear)
    {
        this.numBirthYear = numBirthYear;
    }

    // Add static greet function to class
    static greet()
    {
        console.log("Hey there!");
    }
}

// Add static greet function to constructor
// PersonClass.greet = function(strGreeting)
// {
//     console.log(strGreeting);
// }

PersonClass.greet("Hello!");

// We can access the prototype of the PersonClass class (which is a function)
PersonClass.prototype.numCurrentYear = 2023;

const perKyle = new PersonClass("Kyle", 1997);

console.log(`${perKyle.toString} and is ${perKyle.numAge} years old.`);

perKyle.setNumBirthYear = 1996;
console.log(perKyle.getNumBirthYear);

// Static Methods 

// Array is the constructor for Arrays, and from is a method tied to it.
// All arrays do not inherit the from method, it is only for the constructor.
// This is an example of a static helper, which are often as constructor aid.
console.log(Array.from([1, 2, 3, 4]));

PersonClass.greet();


