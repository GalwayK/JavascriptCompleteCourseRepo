"use strict";

// A common type of object we need to handle in JavaScript is dates and time.

// There are four ways of creating dates. All of them use the new Date() method.

// 1. Use the new Date constructor with no arguments for current date.
const dateNow = new Date();
console.log(dateNow);

// 2. Parse the date from a date String. 
const dateFromString = new Date("Aug 2 2020 10:05:41");
console.log(dateFromString);

const dateChristmas = new Date("December 25 1991 12:12:12");
console.log(dateChristmas);

// Generally writing out your own String to parse into a date is considered 
// unreliable due to human and format error possibility, but using a string 
// generated or obtained programmatically is quite safe.

// 3. Creating Dates with arguments.
// This will create a date for November the 19th, 2037, at 15:23:5. Note that 
// for these arguments, the month is zero based and ranged from 0 to 11.
// January will have a month of 0 and December will have a month of 11
const dateJanuary = new Date(2037, 0, 19, 15, 23, 5);
const dateDecember = new Date(2037, 11, 25, 0, 0, 0);
console.log(dateJanuary);
console.log(dateDecember);

// JavaScript will also auto correct the date for the argument by incrementing 
// the excess days into the next month, and so on as time passes. Despite the 
// month being set to Febuary, the excess days will spill over into March. 
const dateMarch = new Date(2042, 1, 31, 1, 1, 1);
console.log(dateMarch);

// 4. Passing in milliseconds since the Unix Epoch. 
// let numSecondsSinceEpoch = new Date().getTime();
let numSecondsSinceEpoch = Date.now() / 1000;
console.log(numSecondsSinceEpoch * 1000);
const dateSinceEpoch = new Date(numSecondsSinceEpoch * 1000);
console.log(dateSinceEpoch);
const dateThreeDaysAfterEpoch = new Date(3 * 24 * 60 * 60 * 1000);
console.log(`Three days after the Epoch will be ${dateThreeDaysAfterEpoch}`);

// The time value in milliseconds is called a timestamp, which is useful.

// Some functions and methods only return the number of milliseconds since the 
// Unix Epoch, and we can use this as an argument to construct a date object.

// Dates are objects with fields corresponding to year, month, day, hour,
// minute, and seconds, and we can obtain these fields with date methods. 

console.log(dateDecember.getDate());
console.log(dateDecember.getFullYear());

const dateGraduation = new Date(2024, 11, 15, 12, 30, 0);
const arrayMonths = ['January', "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

const arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

let yearGraduation;
let monthGraduation;
let weekdayGraduation;
let monthdateGraduation;
let timeGraduation;
console.log(dateGraduation.getDate());

yearGraduation = dateGraduation.getFullYear();
monthGraduation = dateGraduation.getMonth();
weekdayGraduation = dateGraduation.getDay();
monthdateGraduation = dateGraduation.getDate();
timeGraduation = dateGraduation.getTime();
console.log(dateGraduation.getDate());

console.log(arrayMonths[10]);
console.log(`I will graduate from Sheridan on ${arrayMonths[monthGraduation]} `
+ `${monthdateGraduation}, ${yearGraduation} on a `
+ `${arrayDays[weekdayGraduation]}. Looking forward to it! By the time I `
+ `Graduate, ${timeGraduation / 1000} seconds will have passed since the `
 + `Epoch.`);

// We can also obtain the ISOstring for a date: a universal date string.
console.log(dateGraduation.toISOString());

// The getYear() method is deprecated and only returns the year - 1990. 
// console.log(dateGraduation.getYear());

// If we want to obtain the current timestamp for this moment, we can.
const timeCurrent = Date.now();
console.log(timeCurrent);
console.log(new Date(timeCurrent));

// We can also use the setter methods to change the value of a date. For example 
// if my expected year of graduation changed...
dateGraduation.setFullYear(2025);

yearGraduation = dateGraduation.getFullYear();
monthGraduation = dateGraduation.getMonth();
weekdayGraduation = dateGraduation.getDay();
monthdateGraduation = dateGraduation.getDate();
timeGraduation = dateGraduation.getTime();
console.log(`I will graduate from Sheridan on ${arrayMonths[monthGraduation]} `
+ `${monthdateGraduation}, ${yearGraduation} on a `
+ `${arrayDays[weekdayGraduation]}. Looking forward to it! By the time I `
+ `Graduate, ${timeGraduation / 1000} seconds will have passed since the `
 + `Epoch. Dang it.`);

// We can also perform operations on dates. If we subtract a date from another 
// date, it will convert the dates into timestamps. This lets us do a number 
// of useful operations, such as finding out the difference between two dates. 

function funcFindDifferenceBetweenDates(dateOne, dateTwo) 
{
    return dateOne - dateTwo;
}

function funcConvertTimestampToDay(timestampValue)
{
    return timestampValue / 1000 / 60 / 60 / 24;
}

let dateOne = new Date(2020, 1, 1, 1, 1, 1);
let dateTwo = new Date(2021, 1, 1, 1, 1, 1);
let timeDifferenceMilliseconds = funcFindDifferenceBetweenDates(dateOne, dateTwo);
timeDifferenceMilliseconds = Math.abs(timeDifferenceMilliseconds);
let timeDifferenceDays = funcConvertTimestampToDay(timeDifferenceMilliseconds);
console.log(timeDifferenceDays);

// If we need more precise date operations, we should use a dedicated library 
// such as moment.js.