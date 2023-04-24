'use strict';

const strAPI = "https://restcountries.com/v2/name/";
const strAPICanada = `${strAPI}name/canada`

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// function funcGenerateCountryAPIFunc(strAPI)
// {

//     return function(strCountryName)
//     {
//         const strAPIEndpoint = `${strAPI}name/${strCountryName}`;
//         console.log(strAPIEndpoint);
//         const objRequest = new XMLHttpRequest();
//         objRequest.open("GET", strAPIEndpoint);
//         objRequest.send();
    
//         objRequest.addEventListener("load", function() 
//         {
//             console.log(this.responseText);
    
//             const [objData] = JSON.parse(this.responseText);
//             console.log(objData);
    
//             const strTemplateHTML = `<article class="country">
//             <img class="country__img" src="${objData.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${objData.name}</h3>
//             <h4 class="country__region">${objData.region}</h4>
//             <p class="country__row"><span>👫</span>${(String(objData.population) / 1000000).toFixed(2)} million</p>
//             <p class="country__row"><span>🗣️</span>${objData.languages[0]["name"]}</p>
//             <p class="country__row"><span>💰</span>${objData.currencies[0]["name"]}</p>
//             </div>
//             </article>`;
//             countriesContainer.insertAdjacentHTML("beforeEnd", strTemplateHTML);
//             countriesContainer["style"]["opacity"] = 1;
//     });
//     };
// }

// const funcGetCountryData = funcGenerateCountryAPIFunc(strAPI);

// Because the requests are returned asynchronously, we have little control 
// over the order in which they appear on the page (first to arrive displays).
// If we want to control the order in which they appear, we must chain them. 

// function recursionAJAXWhy(arrCountries, count, funcCountry) 
// {   
//     if (count < arrCountries.length - 1)
//     {
//         recursionAJAXWhy(arrCountries, count + 1, funcCountry);
//     }
//     funcCountry(arrCountries[count]);
// };

// function funcGenerateCountryAPIFunc(strAPI)
// {

//     return function(strCountryName)
//     {
//         const strNameEndpoint = `${strAPI}name/${strCountryName}?fullText=true`;
//         console.log(strNameEndpoint);
//         const objRequest = new XMLHttpRequest();
//         objRequest.open("GET", strNameEndpoint);
//         objRequest.send();

//         function insertHTML(objData, strClass="country")
//         {
//             const strTemplateHTML = `<article class="${strClass}">
//             <img class="country__img" src="${objData.flag}" />
//             <div class="country__data">
//             <h3 class="country__name">${objData.name}</h3>
//             <h4 class="country__region">${objData.region}</h4>
//             <p class="country__row"><span>👫</span>${(String(objData.population) / 1000000).toFixed(2)} million</p>
//             <p class="country__row"><span>🗣️</span>${objData.languages[0]["name"]}</p>
//             <p class="country__row"><span>💰</span>${objData.currencies[0]["name"]}</p>
//             </div>
//             </article>`;
//             countriesContainer.insertAdjacentHTML("beforeEnd", strTemplateHTML);
//         }
    
//         objRequest.addEventListener("load", function() 
//         {
//             console.log(this.responseText);
    
//             const [objData] = JSON.parse(this.responseText);
//             console.log(objData);
    
//             insertHTML(objData);
//             countriesContainer["style"]["opacity"] = 1;

//             const objBorders = objData?.borders;
//             if (objBorders)
//             {
//                 objBorders.forEach(function(border)
//                 {
//                     console.log(border);
//                     const objNeighbour = new XMLHttpRequest();
//                     const strURL = `${strAPI}alpha/${border}`;
//                     console.log(strURL);
//                     objNeighbour.open("GET", strURL);
//                     objNeighbour.send();

//                     objNeighbour.addEventListener("load", function()
//                     {
//                         console.log(this.responseText);
                
//                         const objData = JSON.parse(this.responseText);
//                         insertHTML(objData, "neighbour");
//                     });
//                 });
//             }
//     });
//     };
// }

// funcGetCountryData("Canada");

// const arrCountries = ["canada", "germany", "portugal"];
// recursionAJAXWhy(arrCountries, 0, funcGetCountryData);

// console.log("Welcome!");

/* 
<article class="country">
          <img class="country__img" src="" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
*/

// const request = fetch(`${strAPI}name/canada`);
// console.log(request);

function getCountryData(strCountry, strAPI="https://restcountries.com/v2/", 
    strError="Country Not Found")
{
    const funcErrorCheck = function(response)
    {
        console.log(response.ok);
        if (!response.ok)
        {
            return Promise.reject(`${strError}: ${response.status}`)
        }
        return response
    }

    console.log('Fetching country data.');
    function insertCountryHTML(objData, strClass="country")
    {
        const strTemplateHTML = `<article class="${strClass}">
        <img class="country__img" src="${objData.flag}" />
        <div class="country__data">
        <h3 class="country__name">${objData.name}</h3>
        <h4 class="country__region">${objData.region}</h4>
        <p class="country__row"><span>👫</span>${(String(objData.population) / 1000000).toFixed(2)} million</p>
        <p class="country__row"><span>🗣️</span>${objData.languages[0]["name"]}</p>
        <p class="country__row"><span>💰</span>${objData.currencies[0]["name"]}</p>
        </div>
        </article>`;
        countriesContainer.insertAdjacentHTML("beforeEnd", strTemplateHTML);
    }

    const printCountry = (data) =>
    {
        console.log(data);
        (data ? 
        (function()
        {
            const [objCountry] = data;
            console.log(objCountry);

            insertCountryHTML(objCountry);

            const arrBorders = objCountry?.borders ?? undefined;

            if (arrBorders)
            {
                arrBorders.forEach((strBorder) =>
                {
                    funcGetCountryWithErrorCheck(`${strAPI}alpha/${strBorder}`)
                        .then(getResponse)
                        .catch(printError)
                        .then(printNeighbour);
                }); 
            }
        })()
         : throwError("No data recovered!"));
    };

    function throwError(strMessage)
    {
        console.log("Rejecting promise!");
        return Promise.reject(strMessage);
    }

    const printNeighbour = (data) =>
    {
        insertCountryHTML(data, "neighbour")
    };

    const getResponse = (response) => 
    {
        console.log(response);

        return response.json();
    }

    function printError(error)
    {
        console.log(error);
        const strHTML = `<div style = 'border-radius: 50px; background-color: red; margin: 10vh; border: thick red solid; padding: 10vh;'>${error}</div>`;
        countriesContainer.insertAdjacentHTML("afterBegin", strHTML);
    }

    const funcGetCountryWithErrorCheck = function(strCall)
    {
        return fetch(strCall)
            .then(funcErrorCheck)
    }

    function removeOpacity()
    {
        countriesContainer.style.opacity = 1;
    }

    const promiseObj = 
        funcGetCountryWithErrorCheck(`${strAPI}name/${strCountry}`)
            .then(getResponse)
            .then(printCountry)
            .catch(printError)
            .finally(removeOpacity);

    console.log(promiseObj);
};

const funcCountryEvent = function(event)
{
    event.preventDefault();
    countriesContainer.textContent = "";
    // getCountryData("germany");
    getCountryData("bdjawhbdawd");
};

btn.addEventListener("click", funcCountryEvent);

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

// console.log("Yep, that's an asynchronous function all right.");

// Promisifying a Timeout function
// const funcWait = function(numSeconds)
// {
//     console.log("Beginning timer!");

//     return new Promise((funcResolve, funcReject) => 
//     {
//         setTimeout(funcResolve, numSeconds * 1000, 
//             `${numSeconds} seconds have passed!`);
//     });
// };

// const proTimeout = funcWait(3)
//     .then(result => 
//     {
//         console.log(result)
//         funcWait(1)
//         .then((result) => console.log(result));
//     });

// TESTING THE EVENT LOOP 

// console.log("Test Start");

// setTimeout(() => console.log("0 second timer."));

// Promise.resolve("Resolved Promise 1").then(res => console.log(res));

// Promise.resolve("Resolved Promise 2").then(res => 
// {
//     for (let i = 0n; i < 99999999n; i++)
//     {

//     }
//     console.log(res);
// });

// console.log("Test End");


Promise.resolve("Woah look at this result!")
    .then((result) => console.log(result));

Promise.reject("Haha it got rejected!")
    .catch(result => console.error(result));

///////////////////////////////////////


// The goal of asynchronous JavaScript is to perform data processing and 
// actions in the background - most commonly with Asychronous JavaScript, also 
// known as AJAX. Covered is promises, the fetch function, and async await. 

// The most common use case of Async JavaScript is to make AJAX calls to APIs. 

// SYNCHRONOUS CODE 

// Most of the code written thus far is Synchronous - code which is executed
// line by line. As code is reached, it is executed by the thread of execution, 
// which executes the code in the computer's processor.

// Because JavaScript is single threaded, and each line of code must wait for 
// the previous line to finish running, this means that long running tasks 
// which require a lot of computation can severely slow down a program. It also 
// means that any line which pauses the code (such as an alert or prompt) will 
// completely stop any subsequent lines from running. 

// AYNCHRONOUS CODE

// Because we want to be able to run multiple operations, we can use 
// Asynchronous Javascript to run functions or perform operations without 
// completely pausing the execution of the code. Asynchronous code runs in the 
// background and allows the synchronous code to continue executing. Callback 
// functions are an extremely common example of asynchronous code. 

// Asynchronous programming is all about coordinating the flow of the 
// application through asynchronous code over a period of time, instead of 
// running the code line by line until it reaches completion. 

// While callback functions are often used to make code asynchronous make code 
// asynchronous, but not all callback functions are aysnchronous. Many array
// methods such as forEach, map, filter, and reduce use callback functions but 
// are not an example of asychrnonous code. Just like callback funcions, event 
// listeners also do not make code asychronous. To be asynchronous, some amount 
// of processing must be done in the background. 

// Loading an image after an image load event is asynchronous code.

// AJAX 

// AJAX stands for Asynchronous JavaScript and XML. It allows us to communicate 
// with remote web servers in an asynchronous way. We can request data from a 
// web server dynamically and update the page with it without a refresh. 

// With AJAX, we can do an HTTP request to a server for data, and the server 
// will send an HTTP response. This will be received in the background 
// asynchronously in the background. Most AJAX uses use API to perform requests.

// API

// API stands for application programmming interface. An API is software that 
// can be used by another software to allow applications to talk to one another 
// and exchange inforation. There are many APIs used in web development, and 
// the type of API we are interested in with AJAX are online APIs. These are 
// applications running on a web server which can retrieve data from a database 
// and return them to a client as a response. These web APIs are the most common 
// type of API. Making these web APIs require a backend framework, like Node.js
// Most APIs these days use JSON, a JavaScript object converted into a String. 
// Callback functions used to be used for AJAX, but promises are now preferred.
// To use an API, we find the API endpoint, which is the URL used for the API.

// A common problem with using callback functions asynchronously is that people 
// fall into nested callback function structured, known as callback hell. 

// PROMISES 

// In order to avoid callback hell, we can use promises. A promise is an object
// which is used as a placeholder for the result of an asynchronous operation.
// It is like a container for an asynchronously or future returned value. 
// Promises do not rely on events or callback functions. We can also chain 
// promises for a sequence of asynchronous operations. Promises were added to 
// JavaScript in ES2015.

// Promises transfer between states over time. At the start a promise is pending
// which is when the value from the asynchronous task is unavailable. When the 
// operation finishes, the promise wll change states to settled. A settled 
// promise can be either fulfilled (returned) or rejected (error). Once a 
// promise is settled, the state can no longer ever be changed. In order to use 
// a promise, we must consume that promise. In the case of an API, we first 
// build the promise by using the fetch API, and the promise can be consumed 
// when the API either returns the data or an error. We can also build our own 
// promises, but this is less common in basic JavaScript and more for backend. 
// We use the .then(callback) method in order to declare a callback function to 
// run when the result of the promise has been fulfilled. 

// HANDLING REJECTED PROMISES AND FINALLY

// It is common for errors to happen with web applications. A promise in which 
// an error happened is a rejected promise. There are two ways of handling 
// a rejected promise. The first is to use another callback function as a second
// argument to the then method. That said, the better option is to use the catch
// method with a callback function. This catch method will be called whenever a 
// promise is rejected, and it will cancel the entire promise chain. There is 
// also the finally method we can end a promise chain with, and it will always 
// run the callbac function when the promise chain either succeeds or fails. It 
// is commonly used to hide loading screen or remove opacity when the DOM has 
// finished being set up. 

// Note that the fetch method only throws error if there is no Internet 
// connection. This means that our logic may continue to run even though we have 
// a catch, since the promise will still technically not have failed. To catch 
// this, we must implment potential logic checking, or manually throw errors.

// HANDLING REJECTED PROMISES 
// A common problem is that promises that return a 404 error still return a 
// fulfilled promise instead of a rejected promise. This requires us to manually
// throw exception and handle these errors. We can throw our own error with 
// throw new Error(strMessage) after checking one of the response's fields. This
// manually created error will propagate down until it lands in our catch method 
// and is handled by the callback function we have defined for printing errors. 
// Since any error that is thrown will reject the promise and trigger the catch 
// function. It is also just generally bad practice to leave bad but unrejected 
// promise in the code - you should always throw an error to force them to 
// reject. At the same time however, we can easily end up with constant 
// duplicate code if we have to manually throw errors every single time that 
// they occur. We can do this with a wrapper function around our initial 
// promise which will also call the .then() with an error checker function. 
// This error check can check the status of our promise and throw an error if 
// it is not valid. By doing so, we can eliminate the need to constantly write 
// new errors ourself and just use a template function with a customizable 
// message or content, which reduces code repetition. 

// THE EVENT LOOP
// When a function or operation is performed asynchronously, it is executed in 
// the web APIs environment, instead of in the JavaScript runtime environment. 
// The asynchronous activity will be run in the web API environment, and when it
// is completed, it will put the callback into the callback queue - which is an 
// ordered list of all of the callback functions in line to be executed. Because
// it is a queue, any new callback added to the queue will be run last, after 
// every other callback function already in the callback queue. This can mean
// that there are delays if there are a number of other callback functions. A 
// timer function that goes off after 5 seconds will be added to the callback 
// queue after 5 seconds, but it may take longer for the callback queue to get 
// around to running that callback function. 

// The callback queue is also used by events in the DOM. All events added and 
// activated in the DOM will be added to the event loop and may need to wait. 

// The Event Loop is a process by which JavaScript runs functions from the 
// callback queue. It periodially looks into the call stack, and if it is empty, 
// will then look into the callback queue and take the first callback function 
// from the callback queue and put it into the call stack to be executed. Each 
// time the Event Loop does this, it is called a callback tick. This also proves
// that JavaScript has no sense of time - all time related operations are 
// perfromed in the environment while the Event Loop just gives functions from 
// the call stack and callback queue to the JavaScript Engine. If any of these 
// functions take a long time to process, it will still need to finish before 
// any other functions can run. 

// Promises work different than usual asynchronous operations. Promises do not 
// go into the callback queue. Promises and their callback functions have their 
// own Microtasks Queue. The Microtasks Queue has priority over the Callback 
// Queue, which means the Event Loop will always check the Microtasks Queue 
// before the Callback Queue. This also means that nothing from the Callback 
// Queue can be run if there is anything in the Microtasks Queue. If a Microtask
// keeps adding more Microtasks to the Microtask Queue, it can effectively block
// the Callback Queue, even if the Callback Queue is full. JavaScript timers 
// therefore cannot do highly accurate operations - they can be blocked. 


// BUILDING PROMISES 
// We can construct our own promises with the Promise constructor. The promise 
// constructor takes an executor function as an argument. This function receives
// two arguments, both of which are functions. The first of these functions is 
// the resolve function, and the second is the reject function. Whatever value 
// we pass into the resolve and reject function will be passed along in the 
// promise chain. 

// We rarely need to create our own promises from scratch, but the main reason 
// we would do so is to transform predominantly callback based behaviour into 
// promised based behaviour - known as promisifying. For example, we could take 
// the old method of using APIs are create a promise for it, instead of using 
// the fetch method - though the fetch method already handles this for us. 

// If we need to, we can also instantly create a promise that is either resolved
// or rejected. 