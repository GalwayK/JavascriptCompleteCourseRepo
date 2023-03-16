// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log("B731"[3].length);
// console.log(airline.indexOf("l"));
// console.log(airline.lastIndexOf("a"));
// console.log(airline.indexOf("Air"));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(airline.indexOf("Air"), airline.length));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(2, -1));

// const checkMiddleSeat = (seat) => 
// {
//     const seatCharacter = seat.slice(-1);

//     if (seatCharacter === "B" || seatCharacter === "E")
//     {
//         console.log(`Ticket ${seat} is a middle seat.`);
//     }
//     else
//     {
//         console.log(`Ticket ${seat} is not a middle seat.`)
//     }
// }

// checkMiddleSeat("11A");

// // In order to use methods on a String, Javascript automatically converts a
// // String primitive into a String object whenever a method is called on it. 

// console.log(airline.toUpperCase());

// const passengerName = "kYle";

// function fixName(passengerName)
// {
//     let firstLetter = passengerName[0];
//     let otherLetters = passengerName.slice(1);
//     return `${firstLetter.toUpperCase()}${otherLetters.toLowerCase()}`;
// }

// console.log(fixName(passengerName));

// const email = "hello@jOnas.io \n";
// console.log(email.trim().toLowerCase().trim("\n"))

// const priceGB = "288,97&";
// const priceUS = priceGB.replace(",", ".").replace("&", "$");
// console.log(priceUS);

// const boarding = "Welcome to boarding door 23. Boarding door 23!";

// console.log(boarding.replace(/door/g, "gate"));

// const newPlane = "Airbus A320neo";
// console.log(newPlane.includes("A320"));
// console.log(newPlane.startsWith("Air"));
// console.log(newPlane.endsWith("neo"));

// if (newPlane.startsWith("Airbus") && newPlane.endsWith("neo"))
// {
//     console.log(true)
// }

// function checkBaggage(items)
// {
//     items = items.toLowerCase();
//     if (items.includes("knife") || items.includes("missile"))
//     {
//         console.log("Holy cow you can't board.");
//     }
//     else 
//     {
//         console.log("Welcome aboard!");
//     }
// }

// checkBaggage("I have socks, a knife, and a thermonuclear missile.");
// checkBaggage("I have an apple and my book");

// const [firstName, middleName, lastName] = "Kyle Liam Galway".split(" ");

// console.log(firstName, middleName, lastName);

// const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const humanName = "doborah ann woll bree";
// function titleName(passengerName)
// {   
//     let names = passengerName.split(" ");
//     let finalName = [];
//     for (const personName of names)
//     {
//         let firstLetter = personName[0].toUpperCase();
//         finalName.push(personName.replace(personName[0], firstLetter));
//     }
//     console.log(finalName);
// }

// titleName(humanName);
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "90"));
// console.log(message.padEnd("9", 50));

// const maskCreditCard = function(cardNumber)
// {
//     cardNumber = `${cardNumber}`;
//     console.log(typeof cardNumber);
//     let lastDigits = cardNumber.slice(-4);
//     return lastDigits.padStart(cardNumber.length, "*")
// }

// let maskedCard = maskCreditCard(33334444);
// console.log(maskedCard);

const alertMessage = "Bad weather... All departures delayed... ";
console.log(alertMessage.repeat(5));

function planesDelayed(numberOfPlanes)
{
    console.log(`There are ${numberOfPlanes} waiting... ${"✈️".repeat(numberOfPlanes)}`)
}
planesDelayed(10);