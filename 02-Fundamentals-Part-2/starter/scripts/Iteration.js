'use strict';
// // For loop keeps running while condition is true.
// for (let i = 0; i < 10; i++)
// {
//     console.log("Weight repetition " + (i + 1));
// }

// const kyleArray = ["Kyle", "Galway", 26, "Researcher"];
// const types = [];
// for (let i = 0; i < kyleArray.length; i++)
// {
//     console.log(kyleArray[i]);
//     types[i] = typeof(kyleArray[i]);
//  }

//  types.forEach((type) => 
//  {
//     console.log(type);
//  })
// ;

// const years = [1997, 2006, 1980];

// const calcAge = (currentYear, birthYear) => 
// {
//     return currentYear - birthYear;
// };

// years.forEach((year) => 
// {
//     console.log(calcAge(2023, year));
// });
// let i = 0;
// while (true)
// {
//     i++
//     if (i % 2 !== 0)
//     {
//         continue;
//     }
//     console.log(i);
//     if (i === 10)
//     {
//         break;
//     }
// }

// const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = arrayNums.length - 1; i >= 0; i--)
// {
//     console.log(arrayNums[i]);
// }
// let exercise = 0;
// while (exercise < 5)
// {
//     console.log(`Starting exercise ${exercise + 1}`);
//     let rep = 0;
//     while (rep < 5)
//     {
//         console.log(`Repetition ${rep + 1}`);
//         rep++;
//     }
//     console.log(`Exercise ${exercise + 1} done!`);
//     exercise++;
// }
let randomNum;
while (randomNum !== 6)
{
    randomNum = parseInt(Math.random() * 6 + 1);
    console.log(`You rolled a ${parseInt(randomNum)}`);
}