"use strict";
// const myArray = 
// [
//     "Kyle", 
//     "Liam", 
//     "Galway",
//     2023 - 1997, 
//     ["Kyle", "Liam", "Galway"]
// ];

// const myDict = {
//     "FirstName": "Kyle", 
//     "MiddleName": "Liam", 
//     "LastName": "Galway", 
//     "Age": 26,
//     "Job": "R"
// };

// console.log(myDict["FirstName"]);

// console.log(myDict.FirstName);

// const nameKey = "FirstName";
// console.log(myDict[nameKey]);

// const query = prompt("What do you want to know about me? Choose between FirstName, LastName, MiddleName, Age, and Job: ");
// const response = myDict[query];

// console.log(typeof(response));

// if (!response)
// {
//     console.log("Sorry, please enter a valid value.");
// }
// else
// {
//     console.log(`Wanna know about my ${query}? Sure, ${myDict[query]}`);
// }

// myDict.Address = "Mississauga";
// console.log(myDict.Address)
// myDict["Dogs"] = ["Centi", "Bobbo", "Tundra"];

// console.log(`My name is ${myDict["FirstName"]} I have ${myDict.Dogs.length} dogs. My favorite dog is ${myDict["Dogs"][0]}`);

const CURRENT_YEAR = 2023;
const calculateAge = (year) =>
{
    return CURRENT_YEAR - year;
}

const myDict = 
{
    "firstName": "Kyle", 
    "middleName": "Liam", 
    "lastName": "Galway", 
    "birthYear": 1997,
    "job": "Researcher", 
    "hasDriversLiscence": false, 

    "calcAge": function()
    {
        if (!this.age)
        {
            myDict.age = CURRENT_YEAR - this.birthYear;
        }
        return myDict.age
    },
    
    "makeSummary": function()
    {
        if (!this["summary"])
        {
            myDict["summary"] = `${myDict["firstName"]} ${myDict["middleName"]} ${myDict["lastName"]} is a ${myDict["calcAge"]()} year old ${myDict.job}.`;
        }
        return myDict["summary"];
    }
};
console.log(myDict.age);
console.log(myDict["calcAge"]());
console.log(myDict.calcAge());

console.log(`${myDict["makeSummary"]()}`);
