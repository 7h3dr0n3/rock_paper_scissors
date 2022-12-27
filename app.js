
const p = document.getElementById('compChoice');

function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissor") {
        return `"You Win! Rock crushed Scissor "`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `"You Win! Rock could'nt crush Paper"`;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return `"You Win! Scissor cut's Paper"`;
    } else if (playerSelection === computerSelection) {
        return "Play Again";
    } else {
        return `You Lose! ${playerSelection} lost against ${computerSelection}`;
    }
}


// console.log(singleRound("rock", getComputerChoice()));

// function game() {
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
// const playerSelection = prompt();
// const computerSelection = getComputerChoice();
//         const round = i + 1;
// const results = singleRound(playerSelection, computerSelection);
//         if (results.includes('Win')) {
//             score += 1;
//         }
// console.log(`Round: ${round}: ` + results);
//     }
//     console.log(`Your Score is ${score}`);
// }
// game();

function singleGame() {
    this.addEventListener('click', (e) => {
        const playerSelection = e.target.value;
        const computerSelection = getComputerChoice();
        // console.log(singleRound(playerSelection, computerSelection));
        const playerChoice = document.querySelector('#player');
        const compChoice = document.querySelector('#computer');
        const result = document.querySelector('#result')
        playerChoice.innerText = 'Your Choice: ' + playerSelection;
        compChoice.innerText = 'Computer Choice: ' + computerSelection;
        result.innerText = `${singleRound(playerSelection, computerSelection)}`;

    });
}


const button = document.querySelectorAll('button');
button.forEach(e => singleGame());













