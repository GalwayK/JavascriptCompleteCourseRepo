let weightJohn = 85;
let heightJohn = 1.76;
let bmiJohn = weightJohn / (heightJohn * heightJohn);

let weightMark = 95;
let heightMark = 1.88;
let bmiMark = weightMark / heightMark ** 2;

console.log(`John's BMI is ${bmiJohn}.`);
console.log(`Mark's BMI is ${bmiMark}.`);
let highestBMI = bmiMark > bmiJohn ? "Mark" : "John";

console.log(`${highestBMI} has a higher BMI.`)