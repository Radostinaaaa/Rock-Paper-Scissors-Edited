const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let validGame = 0;
function computerPlay() {
    const randomChoices = choices[Math.floor(Math.random() * choices.length)]
    return randomChoices;
}

function enteredSelection() {
    const options = "Rock, Paper or Scissors?";

    return prompt(options).toLowerCase();
}


const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        validGame++;
    } else if (playerSelection === 'rock') {
        validGame++;
        if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock.');
            computerScore++;
        } else {
            console.log('You Win! Rock beats Scissors.');
            playerScore++;
        }
    } else if (playerSelection === 'paper') {
        validGame++;
        if (computerSelection === 'scissors') {
            console.log('You Lose! Scissors beat Paper.');
            computerScore++;
        } else {
            console.log('You Win! Paper beats Rock.');
            playerScore++;
        }
    } else if (playerSelection === 'scissors') {
        validGame++;
        if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors.');
            computerScore++;
        } else {
            console.log('You Win! Scissors beat Paper.');
            playerScore++
        }
    } else {
        console.log("Invalid input.");
    }


}
function game() {
    while (validGame < 5) {
        playRound(enteredSelection(), computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win, the computer lose.');
    } else if (playerScore < computerScore) {
        console.log('You lose, the computer win.');
    } else {
        console.log("Tie");
    }
}
game()