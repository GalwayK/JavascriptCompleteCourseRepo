// Data types are one of the most important things to know. 
// Every value is either an object or a primitive value.
// There are seven primitive data types: 

// Number: Floating point numbers used for decimals and integers. 
let age = 25
// String: Sequence of character used for text. 
let firstName = "Kyle"
// Boolean: Logical true or false value. 
let isAdult = true
//Undefined: The value take by a variable that is not defined. 
let hope;
//Null: Value for an empty value. 

// Symbol: Defines a unique value that cannot be changed. 

// BigInt: Integers larger than the number type can hold. 

// Javascript is a dynamically typed language. This means that  we do not have to
// define the data type of a value when it is initialized. Javascript will defined 
// the data type for us. This also means we can change the data type of a variable 
// during our program - this can be useful, but can cause bugs. 
let javascriptIsNotFun = true;
for (let i = 0; i < 2; i++)
{
    let apple = javascriptIsNotFun ? "Yes" : "No";
    alert(`Is Javascript fun: ${apple}`)
    javascriptIsNotFun = false;
}

console.log(typeof(null))
// Null is considered an object. This is a bug but can't be fixed for legacy reasons.


