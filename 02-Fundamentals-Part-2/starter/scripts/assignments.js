"use strict";
// const describeCountry = function(countryName, countryPopulation,
//     countryCapital)
// {
// return `${countryName} is a country with a population of ${countryPopulation}.
// The capital of ${countryName} is ${countryCapital}.`
// }
// const countries = [];
// countries[0] = describeCountry("Canada", 30000000, "Ottawa");
// countries[1] = describeCountry("The United Kingdom", 10000000, "London");
// countries[2] = describeCountry("The United States of America", 300000000,
//  "Washington");

// countries.forEach(element => 
// {
//     console.log(element);
// });

const WORLD_POPULATION = 8000000000;

// Arrow function
const percentWorldPopulation = population => 
{
    return population / WORLD_POPULATION;
}

// Function declaration
function makeCountryString(countryName, countryPopulation, populationPercentage)
{
    return `${countryName} has a population of ${countryPopulation}, which is ${populationPercentage * 100}% of the world's population.`;
}

// Function expression
const processArrays = function(countryNames, countryPopulations)
{
    for (let i = 0; i < countryPopulations.length; i++)
    {
        const countryPopulationPercentage = percentWorldPopulation(countryPopulations[i]);

        const outputString = makeCountryString(countryNames[i],     countryPopulations[i], countryPopulationPercentage);

        console.log(outputString);
    }
    return 0;
}

const countryPopulations = [30000000, 300000000, 10000000];
const countryNames = ["Canada", 'The United States of America', 
    "The United Kingdoms"];

processArrays(countryNames, countryPopulations);

