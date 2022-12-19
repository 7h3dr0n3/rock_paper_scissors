
const p = document.getElementById('compChoice');

function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.info(playerSelection, computerSelection);
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.info(playerSelection, computerSelection);
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.info(playerSelection, computerSelection);
        return "You Lose! Paper beats Rock";
    } else {
        return "Play Again";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));
