"use strict";

// One of the less common primitive datatypes is the bigInt datatype. 

// Numbers are represented internally as 64 bits. There are exactly 64 bits
// in every number. 53 of these bits are used to store the digits, and the rest 
// are used to store the decimal point and the number's signage. This means that 
// there are 2 ^ 53 -1 possible numbers, which is over 9 quadrillion. 
// While a huge number, there are some applications which will call for even 
// larger numbers. The size in memory of a bigInt is determined dynamically 
// by the memory of the system the script is running on. As a result, they have 
// a functionally limitless upper range of values - big enough to count every 
// value in the entire universe. 

// We can actually see this value in the Number namespace.
console.log(Number.MAX_SAFE_INTEGER);
let numMax = Number.MAX_SAFE_INTEGER;
console.log(++numMax);
console.log(++numMax);

// No matter how many times we add to it, we cannot increasea number beyond 
// this maximum value of 9007199254740992. To do so, we need to use bigInt.
// BigInt can store numbers are large as we want. We create a bigInt by 
// appending an n to the end of a number literal. We can also use the bigInt 
// constructor, but this can result in errors as the argument to the constructor
// will still be an number constrained to the limits of the number data type. 

let bigIntNumber = BigInt(456789012345676543234565432);
console.log(bigIntNumber)
bigIntNumber = 456789012345676543234565432n;
console.log(bigIntNumber);

// Operations with big int numbers are largely the same as operations with 
// numbers. 
console.log(100n * 200n);

// We cannot mix bigInt numbers with regular numbers. We must convert the number 
// to a bigInt number, or vice versa, though this may result in a loss of 
// precision. We can use the constructor to convert a number to a bigInt number.

console.log(100n + BigInt(100));

// If we want to compare a bigInt number to a number, we must use either the 
// loose equality operator or convert the number to a bigInt number. Keep in 
// mind that while both use numeric values, they are not the same data type.
console.log(100n == 100);
console.log(100n === 100);

// We also cannot use the Math namespace operations on a bigInt. We cannot 
// use Math.sqrt(10n) for example, or any other Math methods or operations. 

// BigInt is also specifically an integer, which means it has no decimal values. 
// We cannot perform decimal operations on a big int. If we try to use division
// on a bigInt, it will simply use integer division on the value. 

// This will result in 3 instead of 3.33 repeating, as BigInt has no decimals. 
console.log(10n / BigInt(3));