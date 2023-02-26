// Operators allow us to transform or do work with values. 

// There are mathematics operators, logical operators, assignment operators, and more. 

// const CURRENT_YEAR = 2023;
// let birthYearKyle = 1997;
// let birthYearSarah = 2001;
// let exponent = 2 ** 3;
// console.log(`2 ** 3 is ${exponent}`)
// console.log(`Your age is ${CURRENT_YEAR - birthYearKyle}.\nYou are ${(CURRENT_YEAR - birthYearKyle) - (CURRENT_YEAR - birthYearSarah)} years older than Sarah.`)
// birthYearKyle += 2
// console.log(birthYearKyle)
// birthYearKyle *= 2
// console.log(++birthYearKyle)
// console.log(birthYearKyle++)
// console.log(birthYearKyle)
// console.log(birthYearKyle--)

// // Boolean Operators are used to compare values and states. 
// birthYearKyle = 1997;
// birthYearSarah = 1998;
// let ageKyle = (CURRENT_YEAR - birthYearKyle);
// let ageSarah = (CURRENT_YEAR - birthYearSarah);
// let oldest = ageKyle >= ageSarah ? (ageKyle == ageSarah ? "They are the same age." : "Kyle is eldest") : "Sarah is eldest."
// console.log(oldest);

const CURRENT_YEAR = 2023;
let birthYearKyle = 1997;
let birthYearSarah = 2001;
let ageKyle = (CURRENT_YEAR - birthYearKyle);
let ageSarah = (CURRENT_YEAR - birthYearSarah);

// Different operators have different precedence, which determines the order 
// of which they are executed. 

let x, y;
x = y = 25 - 10;
console.log(`x is ${x}`)
console.log(`y is ${y}`)
console.log(`The average age is ${(ageKyle + ageSarah) / 2}`)
