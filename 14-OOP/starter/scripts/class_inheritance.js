"use strict";

// Inheritance with Constructor functions.

/*
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
};

const StudentClass = function(strFullName, numBirthYear, numStudentID, 
    arrNumGrades)
{
    Person.call(this, strFullName, numBirthYear);
    this.numStudentID = numStudentID;
    this.arrNumGrades = arrNumGrades;
};

StudentClass.prototype = Object.create(Person.prototype);
StudentClass.prototyoe.constructor = StudentClass;
console.dir(StudentClass.prototype.constructor);

StudentClass.prototype.getLastGrade = function()
{
    console.log("Retrieving most recent grade.");
    return this.arrNumGrades?.slice(-1)[0];
};

const stuLiam = new StudentClass("Liam Galway", 1997, 814, [98, 95, 100]);
const perKyle = new Person("Kyle", 1998);
console.log(stuLiam.getLastGrade());
console.log(stuLiam.toString());
console.dir(stuLiam);


console.log(stuLiam instanceof Person);
console.log(stuLiam instanceof StudentClass);
console.log(stuLiam instanceof Object);

*/

// Inheritance with ES6 Classes
/* 
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

// Use extends keyword to assign prototype of Student to Person prototype.
class Student extends PersonClass
{
    constructor(strFullName, numBirthYear, numStudentID, arrNumGrades)
    {
        // Use super keyword to call person constructor with this keyword.
        // Super creates the this keyword and must come before assignments.
        super(strFullName, numBirthYear);
        this.numStudentID = Student.validateID(numStudentID) 
            ? numStudentID
            : null;
        this.arrNumGrades = arrNumGrades;
    }

    get lastGrade()
    {
        return this.arrNumGrades.slice(-1)[0];
    }

    // Student will have all of Person's methods and also printName
    printName()
    {
        consolel.log(this.strFullName);
    }

    // Override parent toString with child toString
    toString()
    {
        return `${this.strFullName} was born in ${this.numBirthYear} has a`
         + ` student ID of ${this.numStudentID}!`; 
    }

    static validateID(numStudentID)
    {
        return (""+numStudentID).length == 3;
    }
}

const perLiam = new PersonClass("Liam Galway", 1997);
const stuKyle = new Student("Kyle Galway", 1997, 418, [98, 97, 91]);
const stuLiam = new Student("Liam Galway", 1999, 81, [50, 65, 45]);

console.log(Student.validateID(12));
console.log(stuKyle.toString());
console.log(stuLiam.toString());
console.log(stuKyle.__proto__.__proto__.toString.call(stuKyle));
console.log(stuKyle.lastGrade);
console.log(stuLiam.lastGrade);

// If no constructor is specified for ES6 child class, will automatically use 
// parent constructor. Additional parameters will be ignored as in parent.

console.log(stuKyle.__proto__.__proto__.__proto__);
*/

// Inheritance with Object.create()
/*
const Person = 
{
    constructPerson(strName, numAge)
    {
        this.strName = strName;
        this.numAge = numAge;
    },

    toString()
    {
        return `${this.strName} is ${this.numAge} years old!`;
    },

    greet()
    {
        console.log(`Hello, my name is ${this.strName}`);
    }
};

// Create prototype Student object from Person object.
const Student = Object.create(Person);
Student.constructStudent = function(strName, numAge, numID)
{
    Person.constructPerson.call(this, strName, numAge);
    this.numId = numID;
};

Student.toString = function()
{
    return `Student ${this.strName} is ${this.numAge} years old!`;
};

const stuKyle = Object.create(Student);
stuKyle.constructStudent("Kyle", 26, 418);
console.dir(stuKyle.toString());
stuKyle.greet();
console.dir(stuKyle.__proto__.__proto__.toString.call(stuKyle));
*/