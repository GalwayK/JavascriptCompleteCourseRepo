"use strict";

const oneWord = function(inputString="This is a word.")
{
    return inputString.replaceAll(" ", "");
}

console.log(oneWord("Test word hello!"));

const upperFirstWord = function(inputString="test string")
{
    // First Word with Substrings
    // let firstWordIndex = inputString.indexOf(" ");
    // let firstWord = inputString.slice(0, firstWordIndex);
    // let remainingWords = inputString.slice(firstWordIndex);

    
    // First Word with Array Destructuring 
    let [firstWord, ...remainingWordsArray] = inputString.split(" ");
    firstWord = firstWord.toUpperCase();
    return `${firstWord} ${remainingWordsArray.join(" ")}`;
}

const transformerFunction = function(inputString, callbackFunction)
{
    console.log(`Original String: ${inputString}`);
    console.log(`Transformed String: ${callbackFunction(inputString)}`);
    console.log(`Transformed by ${callbackFunction.name}`);
}

transformerFunction('JavaScript is pretty cool', upperFirstWord);
transformerFunction("JavaScript is cool", oneWord);

console.log(upperFirstWord("Hello, my name is Kyle."));

// Note, name is a keyword. We can use it to retrieve the name of a function.
// When we pass a function into another function in order to call it later, 
// we call this function a callback function.

const highFive = () =>
{
    console.log("👋");
}

document.body.addEventListener("click", highFive);

// We also use callback functions with array, like with the foreach function.

const nameStringArray = ["Kyle", "Liam", "Galway"];

nameStringArray.forEach((nameString) => 
{
    transformerFunction(nameString, upperFirstWord);
});

// Now, why does JavaScript use callback functions all the time. 
// 1. It makes it easier to split up our code into individual and maintainable
// parts. If we later want to change how we transform the String with our 
// transformer funcyion, we can change the function we pass it without having to
// change the transformer function at all. 
// String at all. 
// 2. The more important reason is that callback functions allow us to obtain 
// abstraction. This means that we can hide the detail of code implementation, 
// which allows us to think about problems at a higher and more abstract level. 
// In other words, we don't need to think about how the code functions.
// For example, we don't need to specify how the transformerFunction works, 
// the implementation of this is handled by the callback function which we 
// pass it. 
// Callback functions are one of the most important parts of the JavaScript 
// language, and something that differentiates it from other similar programming
// languages. 

const attackStabFunction = function()
{
    return "stabbed";
}

function attackKickFunction()
{
    return "kicked";
}

const attackPersonFunction = function(personNameString, attackLocationString, 
    attackTypeFunction)
{
    console.log(`You have ${attackTypeFunction()} ${personNameString} `
    + `right in the ${attackLocationString}`);
}

attackPersonFunction("Dagoth Ur", 'Heart of Lorkhan', attackStabFunction);
attackPersonFunction("Fargoth", "Hollow Tree Stump", attackKickFunction);