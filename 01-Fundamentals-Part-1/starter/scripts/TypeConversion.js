// Types are one of the fundamental aspects of programmming. 
// Converting types is something we do all the time. 
// Javascript has both type conversion and type coercion. 

// Type Conversion: When we manually convert types. 

// Type Coercion: When Javascript automatically converts types. 


// TYPE CONVERSION
const year = '1991';
console.log(Number(year) + 21);
console.log(Number("Yeet"));

// If we can't convert a value to a number, it will give us a NaN value.

let numYear = 1991;

console.log(String(numYear));

//TYPE COERCION
console.log("The value is " + 21 + ".");

console.log("23" - 10);

let n = '1' + 1;
n = n - 1
console.log(n)