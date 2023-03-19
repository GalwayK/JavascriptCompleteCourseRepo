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

const calculateAverageDogAge = function(dogAgeArray)
{
    // We can find the average of a list of numebers by dividing each number 
    // by the length of the list, and then finding the sum of the numbers. The 
    // original array is also passed in as the fourth argument of the reduce 
    // method, which allows us to access its properties, like length.

    const dogAgeAverageNumber = dogAgeArray.reduce(calculateDogAgeAverage, 0);
    // const dogAgeAverageNumber = dogAgeSumNumber / dogAgeArray.length;
    return dogAgeAverageNumber;
};

// const dogAverageAgeNumber = calculateAverageDogAge(adultDogAgeArray);

const processDogAgeInformation = function(dogAgeArray)
{
    const dogHumanAgeArray = dogAgeArray.map(calculateDogHumanAge);
    const adultDogAgeArray = dogHumanAgeArray.filter(filterDogAdultAge);
    const dogAverageAgeNumber = calculateAverageDogAge(adultDogAgeArray);
    console.log(adultDogAgeArray);
    console.log(dogAverageAgeNumber);
};

processDogAgeInformation(dogAgeArrayOne);
processDogAgeInformation(dogAgeArrayTwo);

