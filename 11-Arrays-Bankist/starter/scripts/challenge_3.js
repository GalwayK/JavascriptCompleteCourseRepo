"use strict";

const dogAgeArrayOne = [5, 2, 4, 1, 15, 8, 3];
const dogAgeArrayTwo = [16, 6, 10, 5, 6, 1, 4];

// 1. Calculate dog age in human years. 

const calculateDogHumanAge = (dogAgeNumber) => 
    dogAgeNumber <= 2 ? 2 * dogAgeNumber : 16 + dogAgeNumber * 4;

// const dogHumanAgeArray = dogAgeArray.map(calculateDogHumanAge);
// console.log(dogHumanAgeArray);

// 2. Remove all dogs which are less than 18 human years old. 

const filterDogAdultAge = (dogAgeNumber) => dogAgeNumber >= 18;

// const adultDogAgeArray = dogHumanAgeArray.filter(filterDogAdultAge);
// console.log(adultDogAgeArray);

// 3. Calculate the average age of all of the adult dogs. 

const calculateDogAgeAverage = 
    (dogAgeSumNumber, dogAgeNumber, indexNumber, dogAgeArray) => 
        dogAgeSumNumber += (dogAgeNumber / dogAgeArray.length);

const processDogAgeInformation = function(dogAgeArray)
{
    const averageDogAge = dogAgeArray.map(calculateDogHumanAge)
        .filter(filterDogAdultAge).reduce(calculateDogAgeAverage, 0);
    
    console.log(averageDogAge);
};

processDogAgeInformation(dogAgeArrayOne);
processDogAgeInformation(dogAgeArrayTwo);
