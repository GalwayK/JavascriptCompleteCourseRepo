"use strict";

const rollDice = () => 
{
    numberRolled = parseInt(Math.random() * 6 + 1);
    if (numberRolled === 1)
    {
        changePlayer();
    }
    else 
    {
        playerScores[currentPlayer] += numberRolled;
        if (playerScores[currentPlayer] >= 100)
        {
            endGame();
        }
    }
}

const changePlayer = () =>
{
    playerAreas[currentPlayer].classList.remove("player--active");
    currentPlayer = currentPlayer === 1 ? 0 : 1;
    playerAreas[currentPlayer].classList.add("player--active");
}

const endGame = () =>
{

}

const buttonNewGame = document.querySelector("btn--new");
const buttonRollDice = document.querySelector("btn--roll");
const buttonHold = document.querySelector("btn-hold");

const players = [];
players[0] = 
{
    "playArea" = document.querySelector("player--0");
}

const playerAreas = [];

playerAreas[0] = document.querySelector("player--0");
playerAreas[1] = document.querySelector("player--1");

const playerScores = [];
playerScores[0] = document.querySelector("score--0");
playerScores[0] = document.querySelector("score--1");

const playerTotals = [];
playerTotals[0] = document.getElementById("current--0");
playerTotals[1] = document.getElementById("current--1");

const imageDice = document.querySelector("dice");

let currentPlayer = 0;
let numberRolled;

buttonRollDice.addEventListener("click", rollDice)