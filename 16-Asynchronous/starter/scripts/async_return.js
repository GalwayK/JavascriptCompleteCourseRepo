"use strict";

//  19.037, 72.873
//  -33.933, 18.474

// Because JavaScript runs async functions in the background, lines put after an
// async function all can appear before the async function has finished running.
// This means that if we try to return a value from an async function, it is
// possible that the async function will not yet have been returned yet. In this 
// case, the async function will return a promise which will eventually be the 
// returned value of the async function. Because of this, async functions will 
// always return promises which when fulfilled will be the returned value.

// An async function will always return a fulfilled promise, even if the promise 
// was rejected or cancelled by an error. Because async functions always return 
// promises, it is important to ensure that this promise is correctly rejected 
// if the function does not correctly execute. 


const strAPI = "https://geocode.xyz/{LONG},{LAT}?geoit=JSON&auth=458526957798350311103x47267";
const htmlBody = document.querySelector("body");
const strAPICanada = `${strAPI}name/canada`

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function insertForm()
{
    htmlBody.insertAdjacentHTML("beforeEnd", `<div class = "geo"><form> 
    <p><label for = "lat">Latitude: <input type = "number" id = "lat" name = "lat"></label></p>
    <p><label for = "long">Longtitude: <input type = "number" id = "long" name = "long"></label></p>
    <p><input type = "submit" value = " Locate Country " class = "btnLocate"></p>
    </form></div>`);
}

insertForm();

const inputLong = document.querySelector("#long");
const inputLat = document.getElementById("lat");
const btnLocate = document.querySelector(".btnLocate");
const divGeo = document.querySelector(".geo");

inputLong.value = "52.508";
inputLat.value = "13.381";

const funcLocateEvent = function(event)
{
    const strLat = parseFloat(inputLat.value).toFixed(3);
    const strLong = parseFloat(inputLong.value).toFixed(3);
    event.preventDefault();
    // funcRunAPIScript("API call has failed!", strLong, strLat);
    // funcRunAPIScript("API call has failed!", ...["19.037", "72.873"].reverse());
    console.log("1. Will get location.");
    // let proNation = funcRunAPIScript("API call has failed!", ...[-33.933, 18.474].reverse());
    console.log("2. Got location!");
    let strCountry;

    (async () => 
    {
        try
        {    
            const strCountry = await funcRunAPIScript(
                "API call has failed!", ...[-33.933, 18.474].reverse());
            console.log(`Country: ${strCountry}`);
        }
        catch (error)
        {
            console.error(`Error!\n` + error.message);
        }
    })();
};

async function funcRunAPIScript(strError, strLat, strLong)
{try {

    console.log("strLat: ", strLat);
    console.log("strLong:", strLong);
    let strCountry = "";
    try 
    {
        const proResponse = await funcFetchAPIWithErrorCheck(strAPI, strLat, 
            strLong, "API Call has Failed");
        const jsonResponse = await funcConvertResponseToJSON(proResponse);
        strCountry = await funcPrintCountry(jsonResponse);
        getCountryData(strCountry);
    }
    catch (strError)
    {
        funcPrintError(strError);
        throw new Error(strError);
    }

    // funcFetchAPIWithErrorCheck(strAPI, strLat, strLong, "API Call has Failed")
    //     .then(funcConvertResponseToJSON)
    //     .then(funcPrintCountry)
    //     .then(getCountryData)
    //     .catch(funcPrintError);

    function funcFetchAPIWithErrorCheck(strAPI, strLat, strLong)
    {
        const strAPIGeo = 
            strAPI.replace("{LAT}", strLat).replace("{LONG}", strLong);
        console.log(strAPIGeo);

        return fetch(strAPIGeo)
            .then(funcCheckError);
    }
    
    function funcCheckError(promise)
    {
        console.log(promise);
        if (promise.status == 403)
        {
            throw new Error("Slow down, you are requesting too much!");
        }
        else if (!promise.ok)
        {
            throw new Error(`${strError}: ${promise.status}`);
        }
        return promise;
    }

    function funcConvertResponseToJSON(response)
    {
        console.log(response);
        return response.json();
    }

    function funcPrintCountry(data)
    {
        console.log("Data!");
        console.log(data);
        if (!data.state)
        {
            throw new Error("No Country Located at Coordinates!");
        }
        console.log(`These coordinates point to: ${data.state}`);
        return data.country;
    }

    function funcPrintError(error)
    {
        const strHTML = `<div style = 'border-radius: 50px; background-color: red; margin: 10vh; border: thick red solid; padding: 10vh;'>${error.message}</div>`;
        htmlBody.insertAdjacentHTML("beforeend", strHTML);
    }

    async function getCountryData(strCountry, strAPI="https://restcountries.com/v2/", 
        strError="Country Not Found")
    {
        const funcErrorCheck = function(response)
        {
            console.log(response.ok);
            if (!response.ok)
            {
                throw new Error(`${strError}: ${response.status}`)
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
                    arrBorders.forEach(async (strBorder) =>
                    {
                        try
                        {
                            const proCountry = await funcGetCountryWithErrorCheck(
                                `${strAPI}alpha/${strBorder}`);
                            const proResponse = await getResponse(proCountry);
                            printNeighbour(proResponse);
                        }
                        catch (objError)
                        {
                            console.log(
                                `Something went wrong: ${objError.message}`);
                        }
                    }); 
                }
            })()
            : throwError("No data recovered!"));
        };

        function throwError(strMessage)
        {
            throw new Error(strMessage);
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
            const strHTML = `<div style = 'border-radius: 50px; background-color: red; margin: 10vh; border: thick red solid; padding: 10vh;'>${error.message}</div>`;
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

        try 
        {
            const proCountry = await funcGetCountryWithErrorCheck
            (`${strAPI}name/${strCountry}`)

            const proResponse = await getResponse(proCountry);
            printCountry(proResponse);
        }
        catch (objError)
        {
            printError(objError);
            throw new Error(objError);
        }
        finally 
        {
            removeOpacity();
        }
    };
    return strCountry;
}
catch (objError)
{
    throw new Error(objError);
}}

btnLocate.addEventListener("click", funcLocateEvent);
