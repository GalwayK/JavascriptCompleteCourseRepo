function createForecast(temperatures)
{
    let forecast = "";
    for (let i = 0; i < temperatures.length; i++)
    {
        forecast += `${temperatures[i]}\xB0C in ${i + 1} days...`
    };
    console.log(forecast);
}

createForecast([20, 19, 18]);