"use strict";
const calculateAverage = scores => 
{
    let sum = 0;
    scores.forEach(score => {
        sum += score;
    });
    return sum / scores.length;
}

const checkWinner = function (dolphinAverage, koalaAverage)
{
    const winningTeam = dolphinAverage >= koalaAverage * 2 ? "Dolphins win!" : 
    (koalaAverage >= dolphinAverage * 2 ? "Koalas win" : "It is a draw!");
    console.log(winningTeam);
}

const dolphinScores = [80];
const koalaScores = [40];

const dolphinAverage = calculateAverage(dolphinScores);
const koalaAverage = calculateAverage(koalaScores);
console.log(dolphinAverage);
console.log(koalaAverage);

checkWinner(dolphinAverage, koalaAverage);


