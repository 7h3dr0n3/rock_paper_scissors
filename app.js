
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
        return `"You Win! ${playerSelection} beats ${computerSelection}"`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `"You Win! ${playerSelection} beats ${computerSelection}"`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `"You Win! ${playerSelection} beats ${computerSelection}"`;
    } else if (playerSelection === computerSelection) {
        return "Play Again";
    } else {
        return `"You Lose! ${computerSelection} beats ${playerSelection}"`;
    }
}


// console.log(singleRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        const round = i + 1;
        const results = singleRound(playerSelection, computerSelection);
        console.log(`Round: ${round}: ` + results);
    }
}
game();