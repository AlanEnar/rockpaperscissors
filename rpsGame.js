// DOM manipulation variables and functions
const resultsDiv = document.getElementById("results");
const lastRoundDiv = document.getElementById("last-round");
const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");

function editLastRoundDiv (text){
    lastRoundDiv.textContent = text;
}

function editResults (pScore, cScore){
    playerScoreDiv.textContent = "Player: " + pScore;
    computerScoreDiv.textContent = "AI: " + cScore;
}

// Game variables and functions
let choices = ["Rock", "Paper", "Scissors"];
let outcomes = ["Player Wins", "Tie", "AI Wins"];
let computerScore = 0;// Used to determine who wins 5 rounds first
let playerScore = 0;

function computerChoice (){
    let randInt = Math.floor(Math.random()* 3);
    
    return randInt;
}

function playerChoice (input){
    switch (input){
        case "rock-btn":
            return 0;
            break;
        case "paper-btn":
            return 1;
            break;
        case "scissors-btn":
            return 2;
            break;
        default: 
            // If the player inputs something other than the three options, an error message will appear.
            alert("Invalid entry - reload page");
            break;
    }
}

function playRound (computerChoice, playerChoice){
    //console.log("Player selects " + playerChoice);
    //console.log("Computer selects " + computerChoice);

    if (computerChoice === playerChoice){
        // if the two inputs are equal, it's a tie.
        //console.log("playRound returns a tie");
        return 1;
    }

    // Because the inputs are integers between 0 & 2, I can subtract the inputs from eachother, and depending on the result, call the game.
    switch ((playerChoice - computerChoice)){
        case 1:
            // Player wins
            //console.log("playRound returns player win");
            playerScore ++;
            return 0;
            break;
        case -1:
            // Computer wins
            //console.log("playRound returns a computer win");
            computerScore ++;
            return 2;
            break;
        case 2:
            // Computer wins
            //console.log("playRound returns a computer win");
            computerScore ++;
            return 2;
            break;
        case -2:
            // Player wins
            //console.log("playRound returns player win");
            playerScore ++;
            return 0;
            break;
    }
}

function game (input){
    // Create variables with the two choices
    let cd = computerChoice();
    let pd = playerChoice(input);

    // Create a variable storing the result of the round
    let round = playRound(cd, pd);

    // Use the three variables and the arrays of choices and outcomes to log the game.
    editResults(playerScore, computerScore)
    editLastRoundDiv("Player: " + choices[pd] + ", AI: " + choices[cd] + "; " + outcomes[round]);

    // Check to see if an entity has won five rounds;
    if (playerScore >= 5 || computerScore >= 5){
        // If so, figure out which entity won
        let winner = computerScore > playerScore ? "AI" : "Player";

        // Create a pop-up announcing the winner
        alert(winner + " Wins! \nClose pop-up to play a new game.");

        // Reset scores and text
        computerScore = 0;
        playerScore = 0;
        editResults(playerScore, computerScore);
        editLastRoundDiv("Choose Button To Start")
    }
}

// Run game when user presses a button
const moveBtns = document.querySelectorAll("button");

moveBtns.forEach((button) => {
    // For every button in the node list,
    // Listen for a click
    // and play a game with button's id determining choice
    button.addEventListener('click', () => {
        game(button.id);
    });
});
