// GLOBALS
const options = ["rock", "paper", "scissors"];

const stronger = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

let score = {
    player: 0,
    computer: 0
}

// GET CHOICE FUNCTIONS

function getPlayerSelection() {
    let playerSelection = prompt("Please enter your pick").toLowerCase().trim();
    while (!options.includes(playerSelection)) {
        playerSelection = prompt("Please enter a valid pick").toLowerCase().trim();
    }
    return playerSelection;
}

function getComputerSelection() {
    let randNum = Math.floor(Math.random() * 3);
    return options[randNum];
}

// GAME FUNCTIONS

function playRound(playerSelection, computerSelection) {
    let res
    if (playerSelection === computerSelection) {
        res = "Tie";
    }
    else if (stronger[playerSelection] === computerSelection) {
        res = "You Win! "+ playerSelection +" beats "+ computerSelection;
        score.player++;
    } else {
        res ="You Lose! "+ computerSelection +" beats "+ playerSelection ;
        score.computer++;
    }
    return res;
}

function startGame() {
    for(let i=0; i< 5; i++) {
        console.log(playRound(getPlayerSelection(), getComputerSelection()));
    }
    console.log("Player Score: " + score.player);
    console.log("Computer Score: " + score.computer);

    if (score.player > score.computer) {
        console.log("Player is the winner!");
    } else if (score.player < score.computer) {
        console.log("Computer is the winner!");
    } else {
        console.log("Tie between Player and Computer.");
    }
}

// START GAME

// startGame();