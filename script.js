let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', playRound)});



function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    return array[Math.floor(Math.random() * 3)]; 
    }

    
function playRound() {
    
    const displayResult = document.querySelector('#displayResult');
     displayResult.textContent = '';
     let playerSelection = this.textContent;
     let computerSelection = getComputerChoice();
    
    if ((playerSelection === 'rock' && computerSelection === 'paper') 
      || (playerSelection === 'paper' && computerSelection === 'scissors') 
      || (playerSelection === 'scissors' && computerSelection === 'rock'))
       {
        computerScore++;
        if (computerScore < 5) {       
             displayResult.textContent = `Computer wins, the score is computer ${computerScore} : ${playerScore} you`;
        }
        else { 
            displayResult.textContent = `Game over! The final score is computer ${computerScore} : ${playerScore} you`;
        }
       }
       else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
       || (playerSelection === 'paper' && computerSelection === 'rock') 
       || (playerSelection === 'scissors' && computerSelection === 'paper'))
       {
        playerScore++;
        if (playerScore < 5) {   
        }
        else {
            displayResult.textContent = `Game over! The final score is computer ${computerScore} : ${playerScore} you`;
        }
        displayResult.textContent = `You win, the score is computer ${computerScore} : ${playerScore} you`;
       }
       else { 
        displayResult.textContent = `It is a tie, the score is computer ${computerScore} : ${playerScore} you`;
       }
  
     
}



 



