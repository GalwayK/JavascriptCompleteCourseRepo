'use strict';

// A constructor function is a function which can be called with the new 
// keyword to create an object. Arrow functions do not work for constructors.
/*
Four things happen with constructors behind the scenes: 

1. A blank object is created {}.
2. The function is called with the this keyword pointing to the object. \
3. The new object is linked to the prototype. 
4. The object that is created is returned from the constructor.
*/

const Person = function(strFirstName, numBirthYear)
{
    console.log(this);

    // Assign instance properties to object.
    this.strFirstName = strFirstName;
    this.numBirthYear = numBirthYear;

    console.log(this);

    // Never create a method inside of a constructor function! Use prototypes.
    // this.toString = function()
    // {
    //     return `${this.strFirstName}: ${this.numBirthYear}`;
    // };

    console.log(this);
};

console.log(new Person("Kyle", 1997));

// We can check if an object is an instance of a constructor with instanceof.
console.log(new Person("Jonas", 1981) instanceof Person 
    ? "Jonas is a person!" 
    : "Jonas is not a person!");