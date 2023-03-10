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

let playersTeamOne = [...game.players[0]];
let playersTeamTwo = [...game.players[1]];
console.log(`Players Team One: ${playersTeamOne}`);
console.log(`Players Team Two: ${playersTeamTwo}`);
let [goalKeeper, ...players] = game.players[0];
console.log(goalKeeper);
console.log(players);

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

const playersOneFinal = 
    [...playersTeamTwo, "Thiago", "Coutinho", "Perisic"];

console.log(playersOneFinal);

let {teamOne, x=draw, teamTwo} = {...game.odds};
console.log(teamOne, x, teamTwo)

const printPlayers = function(...players)
{
    let sum = 0;
    for (let i = 0; i < players.length; i++)
    {
        sum += 1;
        console.log(`${players[i]}: ${sum}}`)
    }
}

printPlayers(...playersTeamOne);

console.log()

console.log(teamTwo > teamOne && "Team one wins.")