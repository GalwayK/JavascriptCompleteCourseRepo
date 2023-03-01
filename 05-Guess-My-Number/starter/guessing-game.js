"use strict";

function setStartState()
{
    console.log("Initializing game.");
    pageBody.style = "background-color: #222;"
    buttonGuess.textContent = "Check!";
    buttonGuess.disabled = false;
    currentScore = 20;
    labelCurrentScore.textContent = currentScore;
    labelMessage.textContent = "Start Guessing...";
    inputGuess.value = "";
    answer = parseInt(Math.random() * MAX + MIN);
    console.log(answer);
}

function setFinishState()
{
    console.log("Game is finished.")
    labelHighScore.textContent = highScore;
    pageBody.style = ("background-color: green;")
    buttonGuess.disable = true;
    buttonGuess.textContent = "Congrats!";
}

const pageBody = document.querySelector("body");

const inputGuess = document.querySelector(".guess");

const buttonReset = document.querySelector(".reset");
const buttonGuess = document.querySelector(".check");

const labelBetween = document.querySelector(".between");
const labelCurrentScore = document.querySelector(".score");
const labelHighScore = document.querySelector(".highscore");
const labelMessage = document.querySelector(".message");

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
        return null;
    }
    if (guess > answer)
    {
        labelMessage.textContent = "Too high!"
        currentScore -= 1;
        labelCurrentScore.textContent = currentScore;
    }
    else if (guess < answer)
    {
        labelMessage.textContent = "Too low!";
        currentScore -= 1;
        labelCurrentScore.textContent = currentScore;
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
