
function getComputerChoice() {
    let options = [
        "Rock", "Paper", "Scissors"
    ];
    return options[Math.floor(Math.random()*options.length)];
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    //return `Your choice: ${playerSelection}\nComputer's choice: ${computerSelection}`
    
    
    if (playerSelection === computerSelection) {
        return "You draw!"
    } else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            }
            if (computerSelection === "scissors") {
                return `You won! ${playerSelection} beats ${computerSelection}!`;
            }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return `You won! ${playerSelection} beats ${computerSelection}!`;
        }
        if (computerSelection === "scissors") {
            return `You lose! ${computerSelection} beat ${playerSelection}!`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return `You won! ${playerSelection} beat ${computerSelection}!`;
        }
        if (computerSelection === "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    } else {
        return "Wrong input!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type one from 'Rock, Paper or Scissors'","").toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}


game();