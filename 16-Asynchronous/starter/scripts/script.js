'use strict';

const strAPI = "https://restcountries.com/v2/";
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

function getCountryData(strCountry, strAPI="https://restcountries.com/v2/")
{
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
        // (data ? 
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
                    fetch(`${strAPI}alpha/${strBorder}`)
                        .then(getResponse)
                        .then(printNeighbour);
                });
            }
        })();
        // () : undefined)
    };

    const printNeighbour = (data) =>
    {
        insertCountryHTML(data, "neighbour")
    };

    const getResponse = (response) => response.json();

    function printError(error)
    {
        const strHTML = `<div style = 'border-radius: 50px; background-color: red; margin: 10vh; border: thick red solid; padding: 10vh;'>${error.message}</div>`;
        countriesContainer.insertAdjacentHTML("afterBegin", strHTML);
    }

    function removeOpacity()
    {
        countriesContainer.style.opacity = 1;
    }

    fetch(`${strAPI}name/${strCountry}`)
            .then(getResponse)
            .then(printCountry)
            .catch(printError)
            .finally(removeOpacity);;
            
}

const funcCountryEvent = function(event)
{
    event.preventDefault();
    countriesContainer.textContent = "";
    // getCountryData("Germany");
    getCountryData("dawdawd");
}

btn.addEventListener("click", funcCountryEvent);

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