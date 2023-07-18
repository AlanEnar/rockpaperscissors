let choices = ["rock", "paper", "scissors"];

function computerChoice (){
    let randInt = Math.floor(Math.random()* 3);
    
    return randInt;
}
let test = computerChoice();
console.log("computerChoice returns " + test);
console.log("That equates to choosing " + choices[test]);