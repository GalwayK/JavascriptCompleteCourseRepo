'use strict';

// We can use default files in order to assign a function a default parameter  
// if the user does not manually pass in a value. 
const arrayBookings = [];
const createBooking = function(price=1000.00, numberPassengers=1, 
    flightNumber=12)
{
    // flightNumber ??= 12; Old way of default values.
    const booking = {
        flightNumber, 
        numberPassengers, 
        price
    }
    arrayBookings.push(booking);
    console.log(booking);
}

createBooking(1);

// The old way of setting falsy values was to use short circuiting with the 
// nullish or OR operators. These days, Javascript allows us to use default 
// parametersmade in the arguments of the function. If we want to use a 
// default parameter and skip other elements, we can use the value of 
// undefined. For example, if I want to use the default value of price 
// but not the default value of numberPassengers, I can just skip 
// price with undefined, 
createBooking(undefined, 34, undefined);

// The above will use the default values of price and flightNumber but not 
// numberPassengers.
