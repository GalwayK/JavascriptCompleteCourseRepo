"use strict";

function setStartState()
{
    console.log("Initializing game.");
    pageBody.style.backgroundColor = "#222";
    buttonGuess.textContent = "Check!";
    buttonGuess.disabled = false;
    currentScore = 20;
    labelCurrentScore.textContent = currentScore;
    labelMessage.textContent = "Start Guessing...";
    inputGuess.value = "";
    answer = parseInt(Math.random() * MAX + MIN);
    labelNumber.textContent = "?";
    labelNumber.style.width = "15rem";
}

function setFinishState()
{
    console.log("Game is finished.");
    pageBody.style.backgroundColor = "green";
    labelHighScore.textContent = highScore;
    buttonGuess.disabled = true;
    buttonGuess.textContent = "Congrats!";
    labelNumber.textContent = answer;
    labelNumber.style.width = "30rem";
}

function setLoseState()
{
    console.log("Game has been lost.");
    pageBody.style.backgroundColor = "red";
    labelMessage.textContent = "You lose!";
    buttonGuess.disabled = true;
    buttonGuess.textContent = "Defeat!";
    labelNumber.textContent = "!";
    labelNumber.style.width = "30rem";
}

const pageBody = document.querySelector("body");

const inputGuess = document.querySelector(".guess");

const buttonReset = document.querySelector(".reset");
const buttonGuess = document.querySelector(".check");

const labelBetween = document.querySelector(".between");
const labelCurrentScore = document.querySelector(".score");
const labelHighScore = document.querySelector(".highscore");
const labelMessage = document.querySelector(".message");
const labelNumber = document.querySelector(".number");

const MIN = 0;
const MAX = 20;

let currentScore;
let highScore = 0;

let answer;
let guess;

inputGuess.min = MIN;
inputGuess.max = MAX;

labelBetween.textContent = `Between (${MIN} and ${MAX})`;

setStartState();

buttonGuess.addEventListener("click", () => 
{
    guess = inputGuess.value;
    guess = parseInt(guess);

    if (guess != 0 && !guess)
    {
        labelMessage.textContent = "Enter a number!";
    }
    else if (guess !== answer) 
    {
        currentScore -= 1;
        labelCurrentScore.textContent = currentScore;
        if (currentScore === 0)
        {
            setLoseState();
        }
        else 
        {
            let output = guess > answer ? "Too high!" : "Too low!";
            labelMessage.textContent = output;
        }
    }
    else if (guess === answer)
    {
        labelMessage.textContent = "You got it!";
        if (currentScore > highScore)
        {
            highScore = currentScore;
        } 
        setFinishState();
    }
});

buttonReset.addEventListener("click", () =>
{
    console.log("Resetting game...");
    setStartState();
});
