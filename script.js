let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.result');

// function to get random choice for computer
function getComputerChoice() {

    // gets random value between 0 and 3
    let value = (Math.floor(Math.random() * 3));

    switch (value) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

// function to compare selections between computer and user and output winner statement
function playRound(playerSelection, computerSelection) {
    let roundResult = "";

    if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'ROCK' && computerSelection == 'LIZARD') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'LIZARD') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
        (playerSelection == 'PAPER' && computerSelection == 'SPOCK') ||
        (playerSelection == 'LIZARD' && computerSelection == 'PAPER') ||
        (playerSelection == 'LIZARD' && computerSelection == 'SPOCK') ||
        (playerSelection == 'SPOCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SPOCK' && computerSelection == 'ROCK')) {
        
        playerScore += 1;
        displayRound("You win this one! Make another choice.");

    } else if (playerSelection == computerSelection) {
        displayRound("Tie Game! I feel like I got this!");
    } else {
        computerScore += 1;
        displayRound("You lose this one! Maybe your next choice will be luckier");
    }

    keepPlayerScore();
    keepComputerScore();
}

function displayRound (str) {
    container.animate([{ opacity: 0}, { opacity: 1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });
    container.textContent = str;
}

// event listener for five button choices
// also checks if the player or computer already has 5 points and if so, they win.
// creates new div with parent result for round outcome text
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        button.onclick = transformButton();
        setTimeout(resetButton, 175);

        function transformButton () {
            button.style.transform = "scale(0.97)";
            button.style.transition = "transform 0.2s ease";
            button.style.border = "4px solid #ffc600";
            button.style.boxShadow = "0 0 5px 2.5px #ffc600";
        }

        function resetButton() {
            button.style.transform = "scale(1.0)";
            button.style.border = "2px solid white";
            button.style.boxShadow = "none";
        }

        playRound(button.value, computerSelection);

        if (playerScore == 5) {
            disableButtons();
            displayRound("You won the game!");
        } else if (computerScore == 5) {
            disableButtons();
            displayRound("Ha! I win the game!");
        }
    });
})

function keepPlayerScore () {
    let playerScoreBox = document.querySelector(".playerScore");

    playerScoreBox.animate([{ opacity: 0 }, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    playerScoreBox.textContent = playerScore;
}

function keepComputerScore () {
    let computerScoreBox = document.querySelector(".computerScore");

    computerScoreBox.animate([{ opacity: 0 }, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    computerScoreBox.textContent = computerScore;
}

function disableButtons () {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('lizard').disabled = true;
    document.getElementById('spock').disabled = true;
}

