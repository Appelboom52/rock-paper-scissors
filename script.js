
const computerSelection = getComputerChoice();
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    return array[Math.floor(Math.random() * 3)]; 
    }

    
function playRound() {
    if ((playerSelection === 'rock' && computerSelection === 'paper') 
      || (playerSelection === 'paper' && computerSelection === 'scissors') 
      || (playerSelection === 'scissors' && computerSelection === 'rock'))
       {
        return result = `${computerSelection} beats ${playerSelection}, current score is ${playerScore}:${++computerScore}`;
    }
       else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
       || (playerSelection === 'paper' && computerSelection === 'rock') 
       || (playerSelection === 'scissors' && computerSelection === 'paper'))
       {
        return result = `${playerSelection} beats ${computerSelection}, current score is ${++playerScore}:${computerScore}`;  
    }
    else { 
        return result = `It is a tie, current score is ${playerScore}:${computerScore}`;
    }
    console.log(result);
    console.log(`you ${playerScore}:${computerScore} computer`);
}


function game() {
    for (let i = 0; i < 5; i++) {
        checkForValidity();
        console.log(`computer: ${computerSelection}`);
        console.log(`you: ${playerSelection}`);
    }
    console.log(`Final score is ${playerScore}:${computerScore}`);
}


function checkForValidity() {
    playerSelection = prompt('enter "rock", "paper", or "scissors":').toLowerCase();
    if ((playerSelection.toLowerCase() === 'rock')
        || (playerSelection.toLowerCase() === 'paper')
        || (playerSelection.toLowerCase() === 'scissors')) {
            console.log(playRound(playerSelection, computerSelection))
        }
        else {
            console.log("enter 'rock', 'paper', or 'scissors', you cheater");
            checkForValidity();
        }
}
game();

