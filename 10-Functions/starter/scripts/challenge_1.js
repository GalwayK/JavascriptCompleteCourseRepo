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

// pollObject.registerNewAnswerMethod = 
//     pollObject.registerNewAnswerMethod.bind(pollObject);

// pollObject.displayResultsMethod = 
//     pollObject.displayResultsMethod.bind(pollObject);


// BONUS
// const displayObject = 
// {
//     answersArray: [1, 5, 3, 9, 6, 1], 
// };

// displayObject.displayResultMethod = 
//     pollObject.displayResultsMethod.bind(displayObject);
// displayObject.displayResultMethod("array");
// displayObject.displayResultMethod("string");