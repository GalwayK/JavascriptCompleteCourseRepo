"use strict";

// Part One: Recruit challenge 2 with async function.

// const divImages = document.querySelector(".images");
// let currentImage = undefined;
// let arrStrImages = ["img/img-1.jpg", "img/img-2.jpg", "img/mg-3,jpg"];
// let arrImages = [];
// let numImage = 1;

// async function funcCreateProImage(strPath)
// {
//     console.log(strPath);

//     function funcLoadImage(funcResolve, funcReject)
//     {
//         console.log("Image accepted!");

//         const objImage = document.createElement("img");
//         objImage.src = strPath;

//         objImage.addEventListener("load", () =>
//         {
//             return funcResolve(objImage);
//         });

//         objImage.addEventListener("error", () =>
//         {
//             return funcReject("An error has occured.");
//         });
//     }

//     return new Promise(funcLoadImage);
// }

// function funcAppendImage(objImage)
// {
//     currentImage = objImage;
//     arrImages.push(objImage);
//     divImages.insertAdjacentElement("beforeEnd", objImage);
//     return objImage;
// }

// function funcPrintError(strError)
// {
//     console.log("Catching error...");
//     console.error(strError);
// }

// const funcPromiseWait = (objImage) => 
// {
//     const funcWait = function(funcResolve)
//     {
//         setTimeout(funcResolve, 2000, objImage);
//     };

//     const proWait = new Promise(funcWait);
//     return proWait;
// };

// const funcHideImage = function(objImage)
// {
//     objImage.style.display = "none";
//     numImage += 1;
//     return `img/img-${numImage}.jpg`;
// };
// (async function()
//     {
//         let arrImages = [];
//         let numImage = 1;
//         try 
//         {
//             const objImgOne = await funcCreateProImage("img/img-1.jpg");
//             arrImages.push(objImgOne);
//             funcAppendImage(objImgOne);
//             await funcPromiseWait(objImgOne);
//             const strImgTwo = funcHideImage(objImgOne);

//             const objImgTwo = await funcCreateProImage(strImgTwo);
//             arrImages.push(objImgTwo);
//             funcAppendImage(objImgTwo);
//             await funcPromiseWait(objImgTwo);
//             const strImgThree = funcHideImage(objImgTwo);

//             const objImgThree = await funcCreateProImage(strImgThree);
//             arrImages.push(objImgThree);
//             funcAppendImage(objImgThree);
//             await funcPromiseWait(objImgThree);
//             funcHideImage(objImgThree);

//         }
//         catch (objError)
//         {
//             funcPrintError(objError);
//         }
//         finally 
//         {
//             (() => 
//             {
//                 console.log("And now for the end.");
//                 arrImages.forEach((divImage, numIndex, arrImages) =>
//                 {
//                     divImage.style.display = "block";
//                 });
//             })()
//         }
//     }
// )()
// const proImage = funcCreateProImage("img/img-1.jpg")
//     .then(funcAppendImage)
//     .then(funcPromiseWait)
//     .then(funcHideImage)
//     .then(funcCreateProImage)
//     .then(funcAppendImage)
//     .then(funcPromiseWait)
//     .then(funcHideImage)
//     .then(funcCreateProImage)
//     .then(funcAppendImage)
//     .then(funcPromiseWait)
//     .then(funcHideImage)
//     .finally(() => {
//         console.log("And now for the end.");
//         arrImages.forEach((divImage, numIndex, arrImages) =>
//         {
//             divImage.style.display = "block";
//         });
//     })
//     .catch(funcPrintError);

// Part 2: Promise Combinator Image Loading 

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

const divImages = document.querySelector(".images");

const listStrImages = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];


function funcDisplayImage(objImage)
{
    objImage.className = "parallel";
    divImages.insertAdjacentElement("beforeEnd", objImage);
}

async function funcLoadImages(listStrImages)
{
    try 
    {
        const listProImages = listStrImages.map(funcCreateProImage);
        const listObjImages = await Promise.all(listProImages);
        listObjImages.forEach(funcDisplayImage);
    }
    catch (objError)
    {
        console.error(objError.message);
    }
}

funcLoadImages(listStrImages);