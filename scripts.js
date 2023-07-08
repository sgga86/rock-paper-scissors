const buttons = document.querySelectorAll('.btn');
const rpsButtons = document.querySelector('.rpsButtons');
const content = document.querySelector('.content');


const choice = document.querySelector('.choice');
const roundResult = document.querySelector('.round-result');
const scoreboard = document.querySelector('.scoreboard');
const askPlayAgain = document.querySelector('.askplayagain');
const gameResult = document.querySelector('.game-result');


const container = document.querySelector('.container');
const startBtn = document.getElementById('startBtn');
const main = document.querySelectorAll('main');
const hover = document.querySelectorAll('.hover');

let computerSelection;
let yourDiv = document.createElement('div');
let myDiv = document.createElement('div');

let computerScore = 0;
let playerScore = 0;
let computerScoreboard = document.createElement('div');
let playerScoreboard = document.createElement('div');
let FinalResult = document.createElement('div');
let eachGameResult = document.createElement('div');
let resultMessage;
let replay = document.createElement('div');
let playAgainBtnYes = document.createElement('button');

// computerScoreboard.textContent = `Computer's Score: ${computerScore}`;
// playerScoreboard.textContent = `Player's Score: ${playerScore}`;
// content.appendChild(computerScoreboard);
// content.appendChild(playerScoreboard);

// Main page: hide elements

container.style.display = 'none';

// When '.startBtn' clicked, main page disabled and hidden elements reappear
startBtn.addEventListener('click', () => {
    for (let i = 0; i < main.length; i++) {
        main[i].style.display = 'none';
    }
    container.style.display = 'flex';
})

// Get 'button id' when certain buttons clicked
// 
let playerSelection =
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            playerSelection = e.target.id;
            computerSelection = getComputerChoice();
            addToDom();
            playRound(playerSelection, computerSelection);
        })
    });

// Calculate score 
function calculateScore() {
    computerScoreboard.textContent = `Computer's Score: ${computerScore}`;
    playerScoreboard.textContent = `Your Score: ${playerScore}`;
    scoreboard.appendChild(computerScoreboard);
    scoreboard.appendChild(playerScoreboard);

    if (playerScore === 5 || computerScore === 5) {
        (playerScore > computerScore)
            ? FinalResult.textContent = "Game Over. You won." : FinalResult.textContent = "Game Over. Computer won"
        gameResult.appendChild(FinalResult);
        buttons.forEach((button) => button.disabled = true,
            roundResult.textContent = '',)
        hover.forEach((hov) => hov.classList.remove('hover'))
        playAgain();
    }
}

function playAgain() {
    replay.textContent = "Do you want to play again?"
    askPlayAgain.appendChild(replay);
    playAgainBtnYes.textContent = 'Yes, please!'
    askPlayAgain.appendChild(playAgainBtnYes);

    playAgainBtnYes.addEventListener('click', e => {
        buttons.forEach((button) => button.disabled = false,
            choice.textContent = '',
            roundResult.textContent = '',
            scoreboard.textContent = '',
            askPlayAgain.textContent = '',
            gameResult.textContent = '',
            hover.forEach((hov) => hov.classList.add('hover')),
            computerScore = 0,
            playerScore = 0
        )
    })
}

function showResultMessage() {
    eachGameResult.textContent = resultMessage;
    roundResult.appendChild(eachGameResult);
}

// Add computer's selection to DOM 
// Add player's selection to DOM
function addToDom() {
    console.log('addToDom Fired')
    yourDiv.textContent = `Computer chose [${computerSelection}]`;
    myDiv.textContent = `You chose [${playerSelection}]`;
    choice.appendChild(yourDiv);
    choice.appendChild(myDiv);
}

// Function for computer's RPS choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        resultMessage = "Draw!"

    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore += 1;
            resultMessage = "Computer won this round!" + "\n" + `[${computerSelection}] beats [${playerSelection}]`;
        }
        if (computerSelection === "Scissors") {
            playerScore += 1;
            resultMessage = "You won this round!" + "\n" + `[${playerSelection}] beats [${computerSelection}]`;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore += 1;
            resultMessage = "You won this round!" + "\n" + `[${playerSelection}] beats [${computerSelection}]`;
        }
        if (computerSelection === "Scissors") {
            computerScore += 1;
            resultMessage = "Computer won this round!" + "\n" + `[${computerSelection}] beat [${playerSelection}]`;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore += 1;
            resultMessage = "You won this round!" + "\n" + `[${playerSelection}] beat [${computerSelection}]`;
        }
        if (computerSelection === "Rock") {
            computerScore += 1;
            resultMessage = "Computer won this round!" + "\n" + `[${computerSelection}] beats [${playerSelection}]`;
        }
    }


    showResultMessage();
    calculateScore();
}