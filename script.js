let randomNumber = 0;
let computerChoice;
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if 
        (randomNumber === 2) {
            computerChoice = 'paper';
        }
    else computerChoice = 'scissors';
    return computerChoice;
    }


getComputerChoice();
console.log(computerChoice);
