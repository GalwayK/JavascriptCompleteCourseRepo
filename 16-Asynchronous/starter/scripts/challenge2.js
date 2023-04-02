"use strict";

const divImages = document.querySelector(".images");
const arrImages = [];
const arrSources = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];


const funcCreateImage = function()
{
        const funcWait = function(numSeconds)
        {
            console.log("Beginning timer!", numSeconds);
        
            return new Promise((funcResolve, funcReject) => 
            {
                setTimeout(funcResolve, numSeconds * 1000, 
                    `${numSeconds} seconds have passed!`);
            });
        };
        
        const funcHideImage = function()
        {
            console.log("Hiding image.")
            arrImages[numLoops].style.display = "none";
            return Promise.resolve(++numLoops);
        };
        
        const insertImage = (response) => 
        {
            console.log("Inserting image.")
            console.log(numLoops);
            divImages.insertAdjacentElement("afterBegin", arrImages[numLoops]);
            return Promise.resolve(2);
        }
        
        const funcPromiseImages = function(promise)
        {
            arrImages[numLoops] = document.createElement("img");
            arrImages[numLoops].src = `img/${arrSources[numLoops]}`;
            console.log(arrImages[numLoops]);
            
            return new Promise(function(funcResolve, funcReject)
            {
                arrImages[numLoops].addEventListener("load", (event) => 
                {
                    funcResolve(event);
                });
        
                arrImages[numLoops].addEventListener("error", (event) =>
                {
                    funcReject(event);
                });
            });
        };
        
        const funcPrintErrors = function(error)
        {
            console.error(error);
        }

        let numLoops = 0;
        const proImage = funcPromiseImages();

        proImage
            .then(insertImage)
            .then(funcWait)
            .then(funcHideImage)
            .then(funcPromiseImages)
            .then(insertImage)
            .then(funcWait)
            .then(funcHideImage)
            .then(funcPromiseImages)
            .then(insertImage)
            .catch(funcPrintErrors);
};

funcCreateImage();


