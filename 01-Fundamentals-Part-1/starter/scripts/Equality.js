// There are two types of equality operators: == and ===.

// == checks if a value equal to another if coerced or not coerced. 
// It is called the loose equality operator. 

// === checks if a value is equal to another if it is not coerced.
// It is called the strict equality operator.

a = '12';

b = 12;

console.log(a == b);

console.log(a === b);

// Generally, you should use the strict equality operator. 
MY_NUMBER = 100;

// while (true)
// {
//     number = prompt("Guess my number: ");
//     number = Number(number);
//     console.log(typeof(number))
//     if (number > MY_NUMBER)
//     {
//         alert("Too high!");
//     }
//     else if (number < MY_NUMBER)
//     {
//         alert("Too low!");
//     }
//     else if (number === MY_NUMBER)
//     {
//         alert("You got it!");
//         break;
//     }
// }

// There is also the != and !-==. 

