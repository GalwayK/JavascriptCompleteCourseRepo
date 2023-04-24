"use strict";

const strAPI = "https://restcountries.com/v2/";
const strAPICanada = `${strAPI}name/canada`

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// CODE BEGINS HERE 

const funcLocateSelf = async function(strCountry, 
    strAPI="https://restcountries.com/v2/", strError="Country Not Found")
{

    // FUNCTIONS

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

    const funcGetCountryWithErrorCheck = function(strCall)
    {
        return fetch(strCall)
            .then(funcErrorCheck)
    }

    const funcErrorCheck = function(response)
    {
        console.log(response.ok);
        if (!response.ok)
        {
            return Promise.reject(`${strError}: ${response.status}`)
        }
        return response
    };

    const getResponse = (response) => 
    {
        console.log(response);

        return response.json();
    };

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
                arrBorders.forEach(async (strBorder) =>
                {
                    try
                    {
                        const proNeighbour = await
                        funcGetCountryWithErrorCheck(`${strAPI}alpha/${strBorder}`);
                        const proResponse = await getResponse(proNeighbour);
                        printNeighbour(proResponse);
                    }
                    catch (error)
                    {
                        console.log(error);
                    }
                    finally 
                    {
                        
                    }
                    
                }); 
            }
        })()
         : throwError("No data recovered!"));
    };

    function printError(error)
    {
        console.log(error);
        const strHTML = `<div style = 'border-radius: 50px; background-color: red; margin: 10vh; border: thick red solid; padding: 10vh;'>${error}</div>`;
        countriesContainer.insertAdjacentHTML("afterBegin", strHTML);
    }

    const printNeighbour = (data) =>
    {
        insertCountryHTML(data, "neighbour")
    };

    function removeOpacity()
    {
        countriesContainer.style.opacity = 1;
    }

    // ASYNCHRONOUS CODE 

    try 
    {
        const strFullAPI = `${strAPI}name/${strCountry}`;
        const proAPI = await funcGetCountryWithErrorCheck(strFullAPI);
        const jsonCountry = await getResponse(proAPI);
        printCountry(jsonCountry);
    }
    catch (error)
    {
        console.log(error);
    }
    finally
    {
        removeOpacity();
    }
};

funcLocateSelf("Germany");
console.log("The thread continues.");

function funcAsyncEvent(event)
{
    event.preventDefault();
    funcLocateSelf("Germany");
}

// btn.addEventListener("click", funcAsyncEvent);

// Async / Await 

// There is now an even better method of resolving promises with async/await. 
// We can declare a function as an async function with the async keyword.
// Inside an async function we can have one or more await statements. The await
// will stop the execution at the await statement until the promise fulfills.
// Keep in mind that async functions run in the background by default, so an 
// async function will not stop the main thread of execution. This is what 
// makes async/await special, it makes code appear synchronous while functioning
// asynchronously. This means that rather than constantly using callback 
// functions and then/catch/finally chains, we can just await an asynchronous 
// response and then assign the response to a variable. This avoids us needing 
// to use callback functions at all. 

// Async await is simply syntatic sugar over promises that changes the visual 
// component of promise chaining with then. 

// btn.addEventListener("click", funcCountryEvent);
