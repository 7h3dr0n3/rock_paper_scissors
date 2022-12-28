
//get compChoice using Math.random();
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

let playerScore = 0, compScore = 0, round = 0;

//play single round of game and return result

function singleRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissor") {
        round++;
        ++playerScore;
        displayScore(playerScore, compScore, round);

        return `"You Win! Rock crushed Scissor "`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        round++;
        ++playerScore;
        displayScore(playerScore, compScore, round);

        return `"You Win! Rock could'nt crush Paper"`;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        round++;
        ++playerScore;
        displayScore(playerScore, compScore, round);

        return `"You Win! Scissor cut's Paper"`;
    } else if (playerSelection === computerSelection) {
        round++;
        displayScore(playerScore, compScore, round);

        return "Its Draw!, Play Again!";
    } else {
        round++;
        ++compScore;
        displayScore(playerScore, compScore, round);

        return `You Lose! ${playerSelection} lost against ${computerSelection}`;
    }
}

// click listener for all choice buttons

const button = document.querySelectorAll('button');

button.forEach(e => {
    e.addEventListener('click', (e) => {
        const playerSelection = e.target.value;
        const computerSelection = getComputerChoice();

        // display choice

        const playerChoice = document.querySelector('#player');
        const compChoice = document.querySelector('#computer');
        playerChoice.innerText = 'Your Choice: ' + playerSelection;
        compChoice.innerText = 'Computer Choice: ' + computerSelection;

        // display result

        const result = singleRound(playerSelection, computerSelection);
        const resultSingleRound = document.querySelector('#result');
        resultSingleRound.innerText = result;

    });

});



// Display the running score

function displayScore(playerScore, compScore, round) {
    const roundDisplay = document.querySelector('#round');
    const playerScoreDisplay = document.querySelector('#playerScore');
    const compScoreDisplay = document.querySelector('#compScore');

    roundDisplay.innerText = `Round : ${round}`;
    playerScoreDisplay.innerText = `Your Score : ${playerScore}`;
    compScoreDisplay.innerText = `Computer Score : ${compScore}`;

    console.log(`Round: ${round}# Your Score: ${playerScore} and Computer Score: is ${compScore}`);

    declareWin(playerScore, compScore, round);

}

//announce a winner of the game once one player reaches 5 points.
function declareWin(playerScore, compScore) {

    if (playerScore === 5 && compScore < 5) {
        const winnerDisplay = document.querySelector('#winner');
        winnerDisplay.innerText = `Congrats!, You Win Computer loses`;
        hideButton();

    } else if (compScore === 5 && playerScore < 5) {
        const winnerDisplay = document.querySelector('#winner');
        winnerDisplay.innerText = `Aw!, You Lose Computer Wins`;
        hideButton();
    }
}

//hide selection button and add reset button

function hideButton() {
    const selection = document.getElementById('selection');
    selection.remove();
    const reset = document.createElement('button');
    reset.innerText = "Reset";
    document.body.appendChild(reset);
    reset.addEventListener('click', () =>
        window.location.reload())
}









