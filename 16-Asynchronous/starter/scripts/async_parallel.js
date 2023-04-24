"use strict";

const strAPI = "https://restcountries.com/v2/name/";
const strCountry = "Germany";
const arrCountries = ["Canada", "Germany", "Australia"];

// const funcGetCountries = async function(arrCountries)
// {
//     const arrData = [];
//     const funcGetResponse = async (strEndpoint, strError = "An error occured!") => 
//     {
//         const funcCheckError = function(objPromise)
//         {
//             if (!objPromise?.ok)
//             {
//                 throw new Error(strError)
//             }
//             return objPromise.json();
//         }
//         const proResponse = await fetch(strEndpoint)
//         return await funcCheckError(proResponse);
//     }

//     const arrResponses = [];
//     try 
//     {
//         arrCountries.forEach((arrCountry, numIndex, arrCountries) => 
//         {
//             const strFullAPI = `${strAPI}${arrCountry}`;
//             arrData.push(funcGetResponse(strFullAPI));
//         });
//         const arrCopy = await Promise.all(arrData);
//         arrResponses.push(...arrCopy);
//     }
//     catch (objError)
//     {

//     }
//     finally 
//     {
//         console.log(arrResponses);
//     }
// }

// funcGetCountries(arrCountries);

// In order to keep code running quickly, never run async code in await mode 
// if the code does not depend on the returning value of another await call. 
// These functions can always be run in parallax to ensure that the code runs 
// quickly in the background without any bottlenecks. 

// Other promise combinators 

// Promise.race()

// Promise.race receives an array of promises, and returns the first of the 
// promises that settles. This means that a value is finalized, regardless of 
// whether or not the promise was resolved or rejected. We can say that 
// Promise.race() short circuits whenever a promise is rejected. Promise.race()
// is great for preventing endless or needlessly long promises.

// (async function(arrCountries)
// {
//     const funcGetResponse = async (strEndpoint, strError = "An error occured!") => 
//     {
//         const funcCheckError = function(objPromise)
//         {
//             if (!objPromise?.ok)
//             {
//                 throw new Error(strError)
//             }
//             return objPromise.json();
//         }
//         const proResponse = await fetch(strEndpoint)
//         return await funcCheckError(proResponse);
//     }
//     const arrData = [];
    
//     try 
//     {
        

//         arrCountries.forEach((arrCountry, numIndex, arrCountries) => 
//         {
//             const strFullAPI = `${strAPI}${arrCountry}`;
//             arrData.push(funcGetResponse(strFullAPI));
//         });

//         const proTimeout = new Promise((_, funcReject) =>
//         {
//             setTimeout(() => 
//             {
//                 funcReject("Error: timeout!");
//             }, 2000)
//         });

//         arrData.push(proTimeout);
//         const objCountry = await Promise.race(arrData);
//         console.log(objCountry);
//         console.log(`${objCountry[0]["name"]} was the first to settle!`);
//     }
//     catch (objError)
//     {
//         console.error(objError);
//     }
//     finally 
//     {
//     }
// })(arrCountries);

// Promise.allSettled()

// Promise.allSettled() will take in an array of promises and returns an array 
// of promises that have settled. It will never short circuit, which is the main 
// difference between promise.all(). It waits until all promises are settled.

// const funcGetCountries = async function(arrCountries)
// {
//     const arrData = [];
//     const funcGetResponse = async (strEndpoint, strError = "An error occured!") => 
//     {
//         const funcCheckError = function(objPromise)
//         {
//             if (!objPromise?.ok)
//             {
//                 throw new Error(strError)
//             }
//             return objPromise.json();
//         }
//         const proResponse = await fetch(strEndpoint)
//         return await funcCheckError(proResponse);
//     }

//     const arrResponses = [];
//     try 
//     {
//         arrCountries.forEach((arrCountry, numIndex, arrCountries) => 
//         {
//             const strFullAPI = `${strAPI}${arrCountry}`;
//             arrData.push(funcGetResponse(strFullAPI));
//         });
//         arrData.push(new Promise((funcResolve) => funcResolve("It resolved!")));
//         arrData.push(new Promise((_, funcReject) => funcReject("It rejected!")));
        
//         const arrCopy = await Promise.allSettled(arrData);
//         arrResponses.push(...arrCopy);
//     }
//     catch (objError)
//     {
//         console.error(objError.message);
//     }
//     finally 
//     {
//         console.log(arrResponses);
//     }
// }

// funcGetCountries(arrCountries);

// Promise.any()

// Promise.any() is similar to promise.race(), except that it will ignore any 
// rejected promises and only return the first promise that is resolved. It 
// ignores all rejected promises. We can consider it a counterpart to race.

(async function(arrCountries)
{
    const arrData = [];
    const funcGetResponse = async (strEndpoint, strError = "An error occured!") => 
    {
        const funcCheckError = function(objPromise)
        {
            if (!objPromise?.ok)
            {
                throw new Error(strError)
            }
            return objPromise.json();
        }
        const proResponse = await fetch(strEndpoint)
        return await funcCheckError(proResponse);
    }

    const arrResponses = [];
    try 
    {
        arrCountries.forEach((arrCountry, numIndex, arrCountries) => 
        {
            const strFullAPI = `${strAPI}${arrCountry}`;
            arrData.push(funcGetResponse(strFullAPI));
        });
        arrData.push(new Promise((funcResolve) => funcResolve("It resolved!")));
        arrData.push(new Promise((_, funcReject) => funcReject("It rejected!")));
        
        const proOutput = await Promise.any(arrData);
        console.log(proOutput);
    }
    catch (objError)
    {
        console.error(objError.message);
    }
    finally 
    {
    }
})(arrCountries);

// all: Returns when all promises are resolved. 
// allSettled: Returns all promises are settled. 
// race: Returns the first promise to settle. 
// any: Returns the first promise to be resolved. 