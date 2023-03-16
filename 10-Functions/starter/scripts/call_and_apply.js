"use strict";

const lufthansaAirlineObject = 
{
    airlineString: "Lufthansa", 
    iataCodeString: "LH", 
    bookingsArray: [], 
};

// lufthansaAirlineObject.bookMethod("123", "Kyle Galway");
// console.log(lufthansaAirlineObject.bookingsArray);

const eurowingsAirlineObject = 
{
    airlineString: "Eurowings", 
    iataCodeString: "EW", 
    bookingsArray: []
};

const bookFunction = function(flightNumberString, passengerNameString)
{
    const bookingString = `Booked seat for ${passengerNameString} on `
        + `${this.airlineString} on flight ${this.iataCodeString} `
        + `${flightNumberString}`;

    // In this example I can call the this keyword to retrieve 
    // the base object for this method to retrieve field members.
    this.bookingsArray.push(
        {
            flightNumberString,
            passengerNameString,
            airlineString: this.airlineString, 
            iataCodeString: this.iataCodeString
        }
    );
    console.log(bookingString);
}

// In this example, we have an object which also wants to use the bookMethod of 
// the Lufthansa object. If we just copied it between objects, this would be an
// example of poor reuse of code which compromises reusability and modularity. 

// We can also create an outside function and then just assign that function 
// to an object. However, this require we assign the function to each object.
eurowingsAirlineObject.bookMethod = bookFunction;
eurowingsAirlineObject.bookMethod(123, "Kyle Galway");
eurowingsAirlineObject.bookMethod = undefined;

// If we just try to assign the LufthansaAirlineObject's bookMethod to a 
// separate function, we will not have to deal with the fact that a function's
// expression default this keyword points to undefined. To solve this, we need 
// to tell JavaScript explicitly what our this keyword points to with call, 
// apply, and bind. 
// Because a function is an object, it has its own methods as defined in 
// function.prototype. Call, apply, and bind are three of these methods. 

bookFunction.call(eurowingsAirlineObject, 23, 'Kyle Galway');
bookFunction.call(lufthansaAirlineObject, 13, "Kylie Galway");
// The call method allows us to call a function as a method for an object
// using the this keyword of the object we specify. This also allows us to 
// use this function on any number of objects, provided these objects all 
// have the correct format and fields to correctly execute the function. 

const turkishAirlineObject = 
{
    airlineString: "Turkish Airlines", 
    iataCodeString: "890", 
    bookingsArray: []
};

bookFunction.call(turkishAirlineObject, 98, "Dagoth Ur");

// The only difference between the call and the apply methods is that it takes 
// an array of the arguments instead of the agruments in a comma-separated list.

bookFunction.call(turkishAirlineObject, ...[98, 'Dagoth Ur']);
bookFunction.apply(turkishAirlineObject, [98, "Dagoth Ur"]);

// All of this said, we don't use the apply method much anymore, as we can just 
// use the spread operator in order to use an array of arguments with call().

// Summary: call allows us to use a function in any other method. 