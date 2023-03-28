"use strict";

// ES 2021 introduced numeric separators, which are intended to make large 
// numbers easier to read. 

// Example: 287460000000
// This number is difficult to read and to understand. Counting the zeroes is 
// especially difficult for most people. In English we use thousand separators.
// With numeric separators, we can easily see that this number is 287 billion, 
// four-hundred sixty million. 
// We can insert numeric separators into our numbers to improve clarity.
const diameterSolarSystemNum = 287_460_000_000;

// The JavaScript engine complete ignores all numeric separators. 
// We can therefore use these underscores to give an intrinsic meaning to our 
// numbers. For example, indicate that a value is in cents instead of dollars. 
// Keep in mind that the underscore has no effect on the value of a variable. 

const priceCentsNum = 345_99;
console.log(priceCentsNum);

// We can only place the underscore between two numbers, not between decimals. 
// We also cannot place two numeric separators at once, which is an error. 
const PI_NUM = 3.1_4_1_5;

// We also cannot convert a String with a numeric separator into a number (NaN).
console.log(Number("230_000"));

// We should only use separators on literals to make our code clearer to read. 