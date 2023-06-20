let playerScore = 0;
let computerScore = 0;
const button = document.querySelector('input');

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
function playRound(playerSelection) {

let computerSelection = getComputerChoice();
let result = "";

const outcome1 = "Computer Wins! Too Bad!";
const outcome2 = "You Win! Celebration!";
const outcome3 = "Tie Game! Try again maybe you'll have better luck";

if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1;
        result = outcome2;

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
        }
    } else if (playerSelection == computerSelection) {
        result = outcome3 + " You both chose: " + playerSelection + "<br><br>Player score: " +
        "<br>Computer Score: " + computerScore;
    } else {
        computerScore += 1;
        result = outcome1 + " " + computerSelection + " beats " + playerSelection + "<br><br>Player score: " +
        playerScore + "<br>Computer Score: " + computerScore;

        if (computerScore == 5) {
            result += "<br><br>I won the game! Reload the page to play again";
        }
    }
}

button.addEventListener('click', function() {
    playRound(button.value);
});

