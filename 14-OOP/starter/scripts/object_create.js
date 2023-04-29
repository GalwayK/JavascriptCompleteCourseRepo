"use strict";

// Object.create allows use to declare the prototype for an object literal
// It is rarely used in practice, but all the same rules apply to it
// We do not need a constructor, we manually set the object prototype.
const PersonProto = 
{
    numCurrentYear: 2023,

    get calcAge()
    {
        return this.numCurrentYear = this.numBirthYear;
    },

    construct(strFirstName, numBirthYear)
    {
        this.strFirstName = strFirstName;
        this.numBirthYear = numBirthYear;
    }
}

const perKyle = Object.create(PersonProto);
perKyle.numBirthYear = 1997;
console.log(perKyle.calcAge);

const perLiam = Object.create(PersonProto);
perLiam.construct("Liam", 1423);
console.log(perLiam);
console.log(perLiam.calcAge);

console.log(perLiam.__proto__.numCurrentYear);