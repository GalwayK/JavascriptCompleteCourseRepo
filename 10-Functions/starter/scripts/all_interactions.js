"use strict";

(function () {
    const header = document.querySelector('h1');

    function changeColorFunction()
    {
        if (header["style"]["color"] != "blue")
        {
            header["style"]["color"] = "blue";
        }
        else 
        {
            header["style"]["color"] = "white";
        }
    }

    header.addEventListener("click", changeColorFunction);
})();

"use strict";

const pollObject = 
{
    questionString: "What is your favourite programming language?",
    optionsArray: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

    // This generates [0, 0, 0, 0]. More in the next section!
    answersArray: new Array(4).fill(0),
    registerNewAnswerMethod()
    {
        console.log(this)
        console.log(this.questionString);
        for (let [indexNumber, optionString] of this.optionsArray.entries())
        {
            console.log(`${indexNumber + 1}: ${optionString.slice(3)}`);
        }
        const inputString = prompt("Your Answer: ");

        if (!isNaN(inputString))
        {
            const inputNumber = Number(inputString);
            this.answersArray[inputNumber - 1] += 1;
            this.displayResultsMethod();
        }
        else 
        {
            console.log("Error: Invalid Entry");
        }
    }, 
    displayResultsMethod(outputTypeString="string")
    {
        if (outputTypeString.toLowerCase() === "string")
        {
            console.log(`The results are: ${this.answersArray.join(" ")}`);
        }
        else
        {
            console.log(`${this.answersArray}`)
        }

    }
};

const pollAnswerButton = document.querySelector(".poll");
pollAnswerButton.addEventListener("click", 
    pollObject.registerNewAnswerMethod.bind(pollObject));

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
    

lufthansaAirlineObject.bookMethod = bookFunction.bind(lufthansaAirlineObject);
lufthansaAirlineObject.bookMethod("123", "Kyle Galway");
console.log(lufthansaAirlineObject);

const bookFlight2Method = bookFunction.bind(eurowingsAirlineObject, 
    23);


bookFlight2Method("George");

lufthansaAirlineObject.planeCountNumber = 300;

function buyPlaneFunction()
{
    this.planeCountNumber++;
    console.log(this.planeCountNumber);
    console.log(this);
};

lufthansaAirlineObject.buyPlaneMethod = buyPlaneFunction;

document.querySelector(".buy").addEventListener("click", 
    lufthansaAirlineObject.buyPlaneMethod.bind(lufthansaAirlineObject));

