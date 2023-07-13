
// --------------------------------------------
//                  GAME LOGIC
// --------------------------------------------

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

let gameFinished = false;

// GET CHOICE FUNCTIONS

function getPlayerSelection(event) {
    return event.target.getAttribute('data-mytype');
}

function getComputerSelection() {
    let randNum = Math.floor(Math.random() * 3);
    return options[randNum];
}

// GAME FUNCTIONS

function checkWin() {
    if (score.player == 3 || score.computer == 3) {
        console.log("Game Finished");
        gameFinished = true;
    }
}


function playRound(event) {
    if (gameFinished == true) {
        return;
    }
    let res;
    let playerSelection = getPlayerSelection(event);
    let computerSelection = getComputerSelection();
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
    console.log(res);
    checkWin();
    return res;
}


// --------------------------------------------
//                      DOM
// --------------------------------------------

const optionCards = document.querySelectorAll('.option-card');
let optionCardsArr = Array.from(optionCards);


// ATTACH EVENT

// Card Events
optionCardsArr.forEach( (card) => {
    card.addEventListener("click", (event) => playRound(event) );
});