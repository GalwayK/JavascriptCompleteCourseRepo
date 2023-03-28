// THE REMAINDER OPERATOR 

// The remainder operator returns the remainder after division. It is also 
// known as the modulus operator. 

let mathOutputNum;

// The remainder operator returns what remains after integer division is 
// performed on two different values. 2 goes into 5 twice, leaving 1 as the 
// remainder. 

// mathOutputNum = 5 % 2;
// mathOutputNum = 8 % 3;
// mathOutputNum = 8 / 3;

// To get the remainder with division, we multiple the decimal portion of the 
// the division by the number the dividend. 
// 5 / 2 is 2.5 
// 2.5 - 2 is .5 
// .5 * 2 is 1, which is the remainder. 

console.log(mathOutputNum);

let generateOddOrEvenFunction = () => 
{
    let numTwo = 2;
    return function(number)
    {
        let outputStr = `${number} is`;
        return `${outputStr} ${number % numTwo == 0 ? `even` : "odd"}!`;
    }
};

// A common application of modulus is to find out if a number is even or odd. 
let numberEven = 2;
let numberOdd = 3; 
let isNumberEven = generateOddOrEvenFunction()(numberEven);
let isNumberOdd = generateOddOrEvenFunction()(numberOdd);

// If the output of % 2 is 0, then the original number is even. 
// If the output of % 2 is 1, then the original number is odd.

console.log(`${isNumberEven}!`);
console.log(`${isNumberOdd}!`);
