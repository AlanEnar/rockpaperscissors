let choices = ["Rock", "Paper", "Scissors"];
let outcomes = ["Player Wins", "Tie", "Computer Wins"];

function computerChoice (){
    let randInt = Math.floor(Math.random()* 3);
    
    return randInt;
}

let test = computerChoice();
//console.log("computerChoice returns " + test);
//console.log("That equates to choosing " + choices[test]);

let playerDecision = Math.floor(Math.random()* 3);

function playRound (computerChoice, playerChoice){
    console.log("Player selects " + playerChoice);
    console.log("Computer selects " + computerChoice);

    if (computerChoice === playerChoice){
        // if the two inputs are equal, it's a tie.
        console.log("playRound returns a tie");
        return 1;
    }

    // Because the inputs are integers between 0 & 2, I can subtract the inputs from eachother, and depending on the result, call the game.
    switch ((playerChoice - computerChoice)){
        case 1:
            // Player wins
            console.log("playRound returns player win");
            return 0;
            break;
        case -1:
            // Computer wins
            console.log("playRound returns a computer win");
            return 2;
            break;
        case 2:
            // Computer wins
            console.log("playRound returns a computer win");
            return 2;
            break;
        case -2:
            // Player wins
            console.log("playRound returns player win");
            return 0;
            break;
    }
}
