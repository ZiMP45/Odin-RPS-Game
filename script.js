let playerScore = 0;
let computerScore = 0;
let round = 0;
let computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');

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
        round += 1;
        roundResult += "You win this round! I bet you can't do that again! Player score: " + 
        playerScore + " Computer score: " + computerScore;

    } else if (playerSelection == computerSelection) {
        round += 1;
        roundResult = "Tie game, You both chose: " + playerSelection + " Player score: " + 
        playerScore + " Computer Score: " + computerScore;
    } else {
        computerScore += 1;
        round += 1;
        roundResult = "Ha! I win! " + computerSelection + " beats " + playerSelection + 
        " Player score: " + playerScore + " Computer Score: " + computerScore;
    }

    return roundResult;
}

// event listener for five button choices
// also checks if the player or computer already has 5 points and if so, they win.
// creates new div with parent result for round outcome text
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        button.onclick = transformButton();
        setTimeout(resetButton, 225);

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
        
        const container = document.querySelector('.result');

        const outcome = document.createElement('div');
        outcome.classList.add('outcome');
        outcome.textContent = (playRound(button.value, computerSelection));

        container.appendChild(outcome);

        if (playerScore == 5) {
            disableButtons();
            outcome.textContent = "You won the game!"
        } else if (computerScore == 5) {
            disableButtons();
            outcome.textContent = "Ha! I win the game!"
        }
    });
})

function disableButtons () {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('lizard').disabled = true;
    document.getElementById('spock').disabled = true;
}

