"use strict";
const game = 
{
    teamOne: "Bayern Munich", 
    teamTwo: "Borrusia Dortmund", 
    players: 
    [
        [
            "Neuer",
            "Pavard",
            "Martinez", 
            "Alaba", 
            "Davies", 
            "Kimmich",
            "Goretzka", 
            "Coman", 
            "Muller", 
            "Gnarby", 
            "Lewandoski"
        ], 
        [
            "Burki", 
            "Schulz", 
            "Hummels", 
            "Akanji", 
            "Hakimi", 
            "Weigli", 
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho", 
            "Gotze"
        ]

    ],
    score: "4.0",
    score: ["Lewandoski", "Gnarby", "Lewandoski", "Hummels"],
    date: "November 9th, 2037",
    odds: 
    {
        teamOne: 1.33,
        x: 3.25,
        teamTwo: 6.5
    }
};

// Question 1.
// for (const scores of game.score.entries())
// {
//     let [index, scorer] = scores;
//     console.log(`Score #${index + 1}: ${scorer}`)

// }


// Question 2. 
// const odds = game.odds;
// let sum = 0;
// let count = 0;
// for (const odd of Object.values(odds))
// {
//     count = count + 1;
//     sum += odd;
// }
// console.log(sum / count);

//Question 3.
// const oddsObjects = game.odds;

// let teamKeys = Object.keys(game.odds);
// teamKeys = [...teamKeys]
// console.log(teamKeys)
// let drawKey;
// for (const key of teamKeys)
// {
//     let teamName = game?.[key];
//     let teamOdds = game.odds?.[key];
//     if( teamName === undefined)
//     {
//         drawKey = key;
//         continue;
//     }
//     console.log(`Team ${teamName} odds: ${teamOdds}`)
// }
// console.log(`Draw odds: ${game.odds?.[drawKey]}`)

// Question 4. 
const scorers = {

}

console.log(game.score)

for (const scorer of game.score)
{
    console.log(scorer);
    scorers[scorer] &&= scorers[scorer] + 1;
    scorers[scorer] ??= 1;
}

console.log(scorers)