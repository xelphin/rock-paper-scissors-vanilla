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

// DOM

// Title
let title = document.querySelector('#title');
// Cards
const optionCards = document.querySelectorAll('.option-card');
let optionCardsArr = Array.from(optionCards);
// Result Text
const resText = document.querySelector('#result-text');
// Score Player
const scorePlayer = document.querySelector('#score-amount-player');
// Score Computer
const scoreComputer = document.querySelector('#score-amount-computer');

// --------------------------------------------
//                  GAME LOGIC
// --------------------------------------------


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
        return true;
    }
    return false;
}

function printWin() {
    let res;
    if (score.player > score.computer) {
        res = ".Game Over. Player Won!";
        title.textContent = "PLAYER WON!";
    } else {
        res = ".Game Over. Computer Won!";
        title.textContent = "COMPUTER WON!";
    }
    return res;
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
        scorePlayer.textContent = score.player;
    } else {
        res ="You Lose! "+ computerSelection +" beats "+ playerSelection ;
        score.computer++;
        scoreComputer.textContent = score.computer;
        
    }
    console.log(res);
    if (checkWin()) {
        res += printWin();
    } 
    resText.textContent = res;
    
}


// --------------------------------------------
//                      DOM
// --------------------------------------------


// ATTACH EVENTS

// Card Events
optionCardsArr.forEach( (card) => {
    card.addEventListener("click", (event) => playRound(event) );
});