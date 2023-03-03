"use strict";

const rollDice = () => 
{
    numberRolled = parseInt(Math.random() * 6 + 1);
    changeImage(numberRolled);

    if (numberRolled === 1)
    {
        players[currentPlayer]["scoreNumber"] = 0;

        players[currentPlayer]["scoreArea"].textContent = 0;
        players[currentPlayer]["scoreTotalArea"].textContent = 0;

        changePlayer();
    }
    else 
    {
        players[currentPlayer]["scoreNumber"] += numberRolled;
        players[currentPlayer]["scoreArea"].textContent = 
            players[currentPlayer]["scoreNumber"];

        if (players[currentPlayer]["scoreNumber"] + 
            players[currentPlayer]["scoreTotal"] >= 20)
        {
            endGame();
        }
    }
}

const changeImage = function(numberRolled)
{
    const imageFile = `dice-${numberRolled}.png`;
    imageDice.src = imageFile;
}

const changePlayer = () =>
{
    players[currentPlayer]["scoreTotal"] += 
        players[currentPlayer]["scoreNumber"];

    players[currentPlayer]["scoreTotalArea"].textContent = 
        players[currentPlayer]["scoreTotal"];

    players[currentPlayer]["scoreNumber"] = 0;
    players[currentPlayer]["scoreArea"].textContent = 0;

    players[currentPlayer]["playArea"].classList.remove("player--active")

    currentPlayer = currentPlayer === 1 ? 0 : 1;

    players[currentPlayer]["playArea"].classList.add("player--active");
}

const endGame = () =>
{
    alert(`Player ${currentPlayer + 1} has won!`)
}

const resetGame = () => 
{
    setupGame();
}

const setupGame = () => 
{
    for (let i = 0; i < 2; i++)
    {
        players[i]["scoreNumber"] = 0;
        players[i]["scoreTotal"] = 0;
        players[i]["scoreArea"].textContent = 0;
        players[i]["scoreTotalArea"].textContent = 0;
    }
    if (currentPlayer != 0)
    {
        changePlayer();
    }
}

const buttonNewGame = document.querySelector(".btn--new");
const buttonRollDice = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

const imageDice = document.querySelector(".dice");

let currentPlayer = 0;
let numberRolled;

const players = [];
players[0] = 
{
    "playArea": document.querySelector(".player--0"), 
    "scoreTotalArea": document.querySelector("#score--0"), 
    "scoreArea": document.getElementById("current--0"), 
    "scoreNumber": 0, 
    "scoreTotal": 0
};

players[1] = 
{
    "playArea": document.querySelector(".player--1"), 
    "scoreTotalArea": document.querySelector("#score--1"), 
    "scoreArea": document.getElementById("current--1"), 
    "scoreNumber": 0, 
    "scoreTotal": 0
}
setupGame();
buttonRollDice.addEventListener("click", rollDice)
buttonHold.addEventListener("click", changePlayer)
buttonNewGame.addEventListener("click", resetGame)
