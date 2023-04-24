"use strict";

const divImages = document.querySelector(".images");
let currentImage = undefined;
let numImage = 1;

function funcCreateProImage(strPath)
{
    console.log(strPath);

    function funcLoadImage(funcResolve, funcReject)
    {
        console.log("Image accepted!");

        const objImage = document.createElement("img");
        objImage.src = strPath;

        objImage.addEventListener("load", () =>
        {
            return funcResolve(objImage);
        });

        objImage.addEventListener("error", () =>
        {
            return funcReject("An error has occured.");
        });
    }

    return new Promise(funcLoadImage);
}

function funcAppendImage(objImage)
{
    currentImage = objImage;
    divImages.insertAdjacentElement("beforeEnd", objImage);
    return objImage;
}

function funcPrintError(strError)
{
    console.log("Catching error...");
    console.error(strError);
}

const funcPromiseWait = (objImage) => 
{
    const funcWait = function(funcResolve)
    {
        setTimeout(funcResolve, 2000, objImage);
    };

    const proWait = new Promise(funcWait);
    return proWait;
};

const funcHideImage = function(objImage)
{
    objImage.style.display = "none";
    numImage += 1;
    return `img/img-${numImage}.jpg`;
};

const proImage = funcCreateProImage("img/img-1.jpg")
    .then(funcAppendImage)
    .then(funcPromiseWait)
    .then(funcHideImage)
    .then(funcCreateProImage)
    .then(funcAppendImage)
    .then(funcPromiseWait)
    .then(funcHideImage)
    .then(funcCreateProImage)
    .then(funcAppendImage)
    .catch(funcPrintError);

// It has been a few weeks since I have had the time to keep up with my 
// JavaScript. This script is to refresh my knowledge of asynchronous JS. 

// 1. Promisify a timer function. 

// const funcPromiseTimer = function(funcResolve, funcReject)
// {
//     setTimeout((strMessage) =>
//     {
//         if (true)
//             return funcResolve("It worked!");
//         else 
//             return funcReject("It failed!");

//     }, 2000, "The timer has expired.");
// };

// const proTimer = new Promise(funcPromiseTimer)

// proTimer
//     .then((strMessage) => 
//     {
//         return Promise.reject(strMessage)
//     })
//     .then((strMessage) => console.log(strMessage))
//     .finally(() => console.log("I am inevitable."))
//     .catch((strMessage) => console.error(strMessage));


// function funcExecutor(funcResolve, funcReject)
// {
//     console.log("Running lottery!");

//     setTimeout(() => 
//     {
//         const numLottery = Math.round(Math.random());

//         console.log(`Your lottery draw is: ${numLottery}`);

//         if (numLottery === 1)
//         {
//             funcResolve("You win the lottery!");
//         }
//         else 
//         {
//             funcReject("You lose the lottery!");
//         }
//     }, 2000);
// }

// const proLottery = new Promise(funcExecutor);

// proLottery.then((response) => console.log(response))
//     .catch((response) => console.error(response));
