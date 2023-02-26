// There are three ways of declaring variables. 
// let and const are both block scoped. 

// var is globally scoped when declared outside a function, and local scope
// when it is declared inside of a function. When we declare a variable 
// with var, it is hoisted to the tope of the scope and initialially 
// assigned a value of undefined. 

// let: We use let to define variables that are mutable.
let mutableVariable = "";
mutableVariable = 2;
let age = 25;

// const: We use const to define variables that are immutable. 
const immutableVariable = 2;
const birthyear = 1997;
// Const variables cannot be assigned empty values.
// immutableVariable = 3; This is an error.

