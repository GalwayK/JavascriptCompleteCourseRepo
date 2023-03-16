"use strict";

const lufthansaAirlineObject = 
{
    airlineString: "Lufthansa", 
    iataCodeString: "LH", 
    bookingsArray: [], 
};

const eurowingsAirlineObject = 
{
    airlineString: "Eurowings", 
    iataCodeString: "EW", 
    bookingsArray: []
};

const turkishAirlineObject = 
{
    airlineString: "Turkish Airlines", 
    iataCodeString: "890", 
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
};

// The bind method is similar to the call and apply methods, however it does 
// not call the method, it only binds that method into the object, allowing 
// us to later call it as we wish. When we call upon the newly bound function, 
// it will always use the this keyword of the object we have bound it to.

lufthansaAirlineObject.bookMethod = bookFunction.bind(lufthansaAirlineObject);
lufthansaAirlineObject.bookMethod("123", "Kyle Galway");
console.log(lufthansaAirlineObject);

// We can also bind certain default values when we call the bind method.
// Note that if we do this, we cannot change these default values ever.

const bookFlight2Method = bookFunction.bind(eurowingsAirlineObject, 
    23);

// Because we set the default values, this method will ignore our arguments, 
// and will store them in a args array if we define one. This is known as 
// predefinition. 
bookFlight2Method("George");

lufthansaAirlineObject.planeCountNumber = 300;

function buyPlaneFunction()
{
    this.planeCountNumber++;
    console.log(this.planeCountNumber);
    console.log(this);
};

// If we try to assign a function to an object and then add an event listener 
// to a button to trigger that object, it will use the rules for functions 
// when it comes to defining the key word, which will assign the this keyword to 
// the button that executes the handler, not the airplane. This is because 
// inside of handler functions, the this keyword always points to the DOM 
// element which triggered the event - in this case, the button. However, 
// because we have using the bind() method to bind the function to the airline 
// object, it will still use the correct keyword. This also serves as further 
// proof that the this keyword is set dynamically. 

lufthansaAirlineObject.buyPlaneMethod = buyPlaneFunction;

document.querySelector(".buy").addEventListener("click", 
    lufthansaAirlineObject.buyPlaneFunction.bind(lufthansaAirlineObject));

// It is important we use the bind method here, because we are not trying to
// the method, just defining it so we can call it later as a callback function. 

const addTaxFunction = (rateNumber, valueNumber) => valueNumber + 
    valueNumber * rateNumber;

console.log(`The tax is: ${addTaxFunction(0.1, 200)}`);

const addTaxPortugalFunction = addTaxFunction.bind(undefined, .15);
console.log(`The tax in Portugal is: ${addTaxPortugalFunction(200)}`);

// We can also use the bind function in order to just create a version of a 
// function in which we want to predefine some of the arguments. This is 
// useful even in applications in which we do not care about the this keyword. 
// Keep in mind that when doing this, the order of the arguments will matter. 

const generateAddRateFunction = (taxRateNumber, value=1) => 
{
    // In this example, I am giving the generated function a default value 
    // for cases in which the generated function is not given an argument.
    return (valueNumber=value) => 
    {
        return valueNumber += valueNumber * taxRateNumber;
    }
}

const addRatePortugalFunction = generateAddRateFunction(.15);
console.log(addRatePortugalFunction(200));
console.log(addRatePortugalFunction());

