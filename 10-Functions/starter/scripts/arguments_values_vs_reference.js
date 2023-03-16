"use strict";

// Remember that values have two types, primitive types and reference types. 

const flightNumber = "LM234";

const toString = function()
{
    return `Name: ${this.fullName}, Passport Number: ${this.passportNumber}`
    + ` Gender: ${this.gender}`;
}

const passengerKyle = 
{
    fullName: "Kyle", 
    passportNumber: "1234567890", 
    gender: "Male"
};

const passengerKylie = 
{
    fullName: "Kylie Galway", 
    passportNumber: "0987654321", 
    gender: "FEMALE"
};

const passengerEve = 
{
    fullName: "Eve Diamand", 
    passportNumber: "6789012345",
    gender: "N/A"
};

const checkIn = function(flightNumber="LK123", passengerObject)
{
    flightNumber = "KH999";
    if (passengerObject?.gender.toLowerCase() === "male")
    {
        passengerObject.fullName = `Mr. ${passengerObject.fullName}`;
    }
    else if (passengerObject?.gender.toLowerCase() === "female")
    {
        passengerObject.fullName = `Mrs. ${passengerObject.fullName}`;
    }
    console.log(passengerObject);
    console.log(`Ticket for ${passengerObject.fullName} on flight ${flightNumber}.`);
};

checkIn(undefined, passengerKyle);
checkIn(flightNumber, passengerKylie);
checkIn(flightNumber, passengerEve);
console.log(flightNumber);
console.log(passengerKylie.fullName);
console.log(toString.call(passengerKyle));

// In this example, passengerKylie's name is changing because it is passed 
// by reference (the reference of which is a value), while flightNumber is 
// not changing because it is pass by value. The value of the function's
// flightNumber is, after it has been passed, unrelated to the value of 
// the global flightNumber. 


const newPassport = function(passengerObject)
{
    passengerObject.passportNumber = "13375K1LL5";
}

// If we change our passport to a different value inside of a function, it 
// will change the value of our passport in the global object, since it is 
// actually going only passing the location of the object in memory, which 
// it will then go to and use to change the object's passport number. It is 
// important to remember that the value of an object in a variable is really 
// only a pointer to that object's location in memory, and that the variable
// itself is not actually equal to the object, and is functionally only a 
// label. This is actually incredibly useful for object oriented programming 
// since it lets us pass around object between variables and to make alterations
// based on that object's state which will affect the entire object regardless 
// of where in the code we are making these changes. At the same time, this is 
// something we need to be aware of when coding to not make mistakes. 
newPassport(passengerKyle);
checkIn(flightNumber, passengerKyle);

console.log("Kyle toString: ", passengerKyle);

// Remember that when we saying passing by reference, we are still passing by 
// reference, it is just that the value contained in an object variable is 
// itself a reference. This is a meaningful distinction between programming 
// languages (C++ does have passing by reference, for example).


// I can bind a function into an object's method in order to ensure 
// that the this keyword will always use the object I have bound it to. 
passengerKyle.toString = toString.bind(passengerKyle);
passengerKylie.toString = toString.bind(passengerKylie);
passengerEve.toString = toString.bind(passengerEve);

console.log(passengerKyle);
console.log(passengerKylie);
console.log(passengerEve);