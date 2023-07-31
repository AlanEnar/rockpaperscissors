let choices = ["Rock", "Paper", "Scissors"];
let outcomes = ["Player Wins", "Tie", "Computer Wins"];

function getComputerChoice (){
    let randInt = Math.floor(Math.random()* 3);
    
    return randInt;
}

/*
function playerChoice (){
    // Create a variable to store the user's choice, converted to all lower case.
    let choice = prompt("Type 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    
    switch (choice){
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default: 
            // If the player inputs something other than the three options, an error message will appear.
            alert("Invalid entry - reload page");
            break;
    }
}
*/

function getPlayerChoice (){
    const btns = document.querySelectorAll("button");// Create a node list of buttons

    // Loop through the node list
    btns.forEach((btn) => {
        // Listen for clicks on each node
        btn.addEventListener("click", () => {
            // When there's a click, do something with the button's id
            alert(btn.id);
        });
    });
}
getPlayerChoice();

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
            return 0;
            break;
        case -1:
            // Computer wins
            //console.log("playRound returns a computer win");
            return 2;
            break;
        case 2:
            // Computer wins
            //console.log("playRound returns a computer win");
            return 2;
            break;
        case -2:
            // Player wins
            //console.log("playRound returns player win");
            return 0;
            break;
    }
}

function playGame (){
    // Create variables with the two choices
    let cd = getComputerChoice();
    let pd = getPlayerChoice();

    // Create a variable storing the result of the round
    let round = playRound(cd, pd);

    // Use the three variables and the arrays of choices and outcomes to log the game.
    console.log("Player chose " + choices[pd] + ", Computer chose " + choices[cd] + ", Result: " + outcomes[round]);
}

