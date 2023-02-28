// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const findAmplitude = (temperatures, temperaturesTwo) => 
{
    temperatures = temperatures.concat(temperaturesTwo);

    let min = temperatures[0];
    let max = temperatures[0];
    for (let i = 0; i < temperatures.length; i++)
    {
        if (temperatures[i] === "error" || typeof(temperatures[i]) === String)
        {
            continue;
        }
        if (temperatures[i] < min)
        {
            min = temperatures[i];
        }
        if (temperatures[i] > max)
        {
            max = temperatures[i];
        }
    }
    console.log(max);
    console.log(min);
    
    return max - min;
}
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

console.log(`The amplitude for the temperatures is ${findAmplitude(temperatures, [-6, 20])}.`);

// const measureKelvin = () =>
// {
//     const measurement = 
//     {
//         "type": "temp",
//         "unit": "celsius", 
//         "value": prompt("Degrees Celsius: "),
//     }

//     const kelvin = parseInt(measurement["value"]) + 273;
//     return kelvin;
// }

// console.log(measureKelvin());