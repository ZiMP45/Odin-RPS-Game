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
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')) {
        
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

// event listener for three button choices
// also checks if the player or computer already has 5 points and if so, they win.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(playRound(button.value, computerSelection));
        if (playerScore == 5) {
            disableButtons();
            alert("You won the game!");
        } else if (computerScore == 5) {
            disableButtons();
            alert("Ha! I win the game!");
        }
    });
});

 function disableButtons () {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
 }