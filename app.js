
const p = document.getElementById('compChoice');

function getComputerChoice() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber == 1) {
        p.textContent = "Rock";
    } else if (randomNumber == 2) {
        p.textContent = "Paper";
    } else {
        p.textContent = "Scissors";
    }
}

getComputerChoice();