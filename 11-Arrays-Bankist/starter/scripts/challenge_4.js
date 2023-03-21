"use strict";

const dogsArray = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];
console.log(dogsArray);

// 1. Calculate recommended food portion and add to dog object. 

const addPortionToDogFunction = function(dogObject, indexNumber, dogsArray)
{   
    let recommendedFoodNumber = dogObject.weight ** .75 * 28;
    dogObject.foodPortion = recommendedFoodNumber;
}

dogsArray.forEach(addPortionToDogFunction);

console.log(dogsArray);

// 2. Find out if Sarah's dog is eating well. 

const findDogByOwnerFunction = (dogObject, indexNumber, dogsArray) => 
{
    return dogObject.owners.includes("Sarah");
}

const displaySarahDogEatingStatusFunction = function()
{
    const sarahDog = dogsArray.find(findDogByOwnerFunction);
    console.log(sarahDog.curFood);
    console.log(sarahDog.foodPortion);
    const feedingString = sarahDog.curFood >= sarahDog.foodPortion - 
    (sarahDog.foodPortion / 10) && sarahDog.curFood <= sarahDog.foodPortion 
    + (sarahDog.foodPortion / 10) ? "eating" : "not eating";

    console.log(`Sarah's dog is ${feedingString} well`)
}

displaySarahDogEatingStatusFunction();

// 3. Create an array of all owners who overfeed their dogs. 

const createOverfeedArray = (dogObject, indexNumber, dogsArray) =>
    dogObject.curFood >= 
        dogObject.foodPortion + (dogObject.foodPortion / 10);

const createUnderfeedArray = (dogObject, indexNumber, dogsArray) =>
    dogObject.curFood <= 
        dogObject.foodPortion - (dogObject.foodPortion / 10);


const overfeedOwners = 
    dogsArray.filter(createOverfeedArray).flatMap((dogObject) =>
{
    return dogObject.owners;
});

const underfeedOwners = 
    dogsArray.filter(createUnderfeedArray).flatMap(dogObject => 
{
    return dogObject.owners;
})
console.log(overfeedOwners);
console.log(underfeedOwners);

// 4. Log all underfeeders and overfeeders to console. 

const outputAbusers = (overfeedOwners, abuseString) => 
{
    console.log(`${overfeedOwners.join(" and ")} ${abuseString} `
    + `their dogs too much!`);
}

outputAbusers(overfeedOwners, "overfeed");
outputAbusers(underfeedOwners, "underfeed");

const checkAnyDogExactFeed = (dogObject) => 
    dogObject.curFood === dogObject.foodPortion;

const checkAnyDogFeedOkay = (dogObject) => 
    dogObject.curFood >= dogObject.foodPortion - (dogObject.foodPortion / 10)
    && dogObject.curFood <= dogObject.foodPortion + (dogObject.foodPortion / 10);

console.log(`A dog is eating perfectly: `
    + `${dogsArray.some(checkAnyDogExactFeed)}`);
console.log(`A dog is eating alright: ${dogsArray.some(checkAnyDogFeedOkay)}`);

const dogsNotAbusedArray = dogsArray.find(checkAnyDogFeedOkay);
console.log(dogsNotAbusedArray);

const sortDogsByPortion = (currentDog, nextDog) => 
    currentDog.foodPortion - nextDog.foodPortion;

const dogsArrayCopy = dogsArray.slice(0).sort(sortDogsByPortion);
console.log(dogsArrayCopy);