"use strict";

// It is bad practice to change the elements of an original data structure. 

const juliaAgeArray = [3, 5, 2, 12, 7];
const  kateAgeArray = [4, 1, 15, 8, 3];

// 1. Remove first element and last two elements from Julia's array. 
const correctArray = function(ageArray)
{
    const correctedAgeArray = ageArray.slice(1, -2);
    // ageArray.splice(0, 1);
    // ageArray.splice(-2, 2);
    return correctedAgeArray;
};

const juliaCorrectedAgeArray = correctArray(juliaAgeArray);
console.log(juliaCorrectedAgeArray);


// 2. Create an Array by combining Julia and Kate's data. 

const completeAgeArrayOne = [...juliaCorrectedAgeArray, ...kateAgeArray];
console.log(completeAgeArrayOne);

const completeAgeArrayTwo = juliaCorrectedAgeArray.concat(kateAgeArray);
console.log(completeAgeArrayTwo);

// 3. For each dog, output whether they are a puppy or an adult. 

const displayDogAgeStatus = function(completeAgeArrayOne)
{
    const outputDogStatus = function(dogAgeNumber, indexNumber)
    {
        if (dogAgeNumber >= 3)
        {
            console.log(`Dog number ${indexNumber + 1} is an adult `
            + ` and is ${dogAgeNumber} years old, so good!`);
        }
        else
        {
            console.log(`Dog number ${indexNumber} is a puppy and is `
            + `${dogAgeNumber} years old! Adorable!`);
        }
    };

    completeAgeArrayOne.forEach(outputDogStatus);
};

displayDogAgeStatus(completeAgeArrayOne);

// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]