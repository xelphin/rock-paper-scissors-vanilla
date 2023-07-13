console.log("---JS---");

const options = {
    "rock": 0,
    "paper": 1,
    "scissors": 2
}

const stronger = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

let score = {
    player: 0,
    computer: 0
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your pick");
    while (options[playerChoice] === undefined) {
        playerChoice = prompt("Please enter a valid pick");
    }
    return playerChoice;
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    return Object.keys(options)[randNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
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

function game() {
    for(let i=0; i< 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
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

game();