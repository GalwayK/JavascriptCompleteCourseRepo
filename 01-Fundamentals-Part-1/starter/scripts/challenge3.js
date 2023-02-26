let dolphinScores = [5, 112, 101];
let koalaScores = [5, 95, 106];
let dolphinScoreSum = 0;
let koalaScoreSum = 0;

for (let s = 0; s < dolphinScores.length; s++)
{
    dolphinScoreSum += dolphinScores[s];
    koalaScoreSum += koalaScores[s];

}

let dolphinScoreAverage = dolphinScoreSum / dolphinScores.length;
let koalaScoreAverage = koalaScoreSum / koalaScores.length;
alert(`The Dolphins scored ${dolphinScoreAverage}\nThe Koalas scored ${koalaScoreAverage}`)

if (dolphinScoreAverage > koalaScoreAverage && dolphinScoreAverage >= 100)
{
    alert("The Dolphins are the winners!");
}
else if (koalaScoreAverage > dolphinScoreAverage && koalaScoreAverage >= 100)
{
    alert("The Koalas are the winners!")
}
else if (koalaScoreAverage === dolphinScoreAverage && koalaScoreAverage >= 100 && dolphinScoreAverage >= 100)
{
    alert("The match is a draw!")
} 
else 
{
    alert("No team has won!")
}