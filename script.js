console.log("---JS---");

const choice = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const stronger = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    return choice[randNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    let res;
    res = (stronger[playerSelection] === computerSelection) 
        ? "You Win! "+ playerSelection +" beats "+ computerSelection 
        : "You Lose! "+ computerSelection +" beats "+ playerSelection ;
    if (playerSelection === computerSelection) {
        res = "Tie";
    }
    return res;
}

let playerChoice = "rock";
let computerChoice = getComputerChoice();

console.log("Player choice: " + playerChoice);
console.log("Computer choice: " + computerChoice);
console.log(playRound(playerChoice, computerChoice));