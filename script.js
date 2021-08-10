const computerSpan = document.querySelector(".computerSpan");
const gameChoices = ["rock", "paper", "scissors"];

const rockButton = document.querySelector('.rockButton')
const paperButton = document.querySelector('.paperButton')
const scissorsButton = document.querySelector('.scissorsButton')
const resetButton = document.querySelector('.resetButton')
const playerButtons = document.querySelectorAll('.playerButton')
const currentRound = document.querySelector('.currentRound')
const gameMessage = document.querySelector('.gameMessage')

const playerScore = document.querySelector('.pScore')
const computerScore = document.querySelector('.cScore')
const selectionArray = {
  rock: {
    lose: "paper",
    win: "scissors",
    loseMsg: "You lose! The computer covers your rock with paper!",
    winMsg: "You win! Your rock smashes the computer's scissors!",
  },
  paper: {
    lose: "scissors",
    win: "rock",
    loseMsg: "You lose! the computer cuts your paper with scissors!!",
    winMsg: "You win! Your paper covers the computer's rock",
  },
  scissors: {
    lose: "rock",
    win: "paper",
    loseMsg: "You lose! The computer smashes your scissors with a rock!",
    winMsg: "You win! You cut up the computer's paper with your scissors!",
  },
};

let scores = { player: 0, computer: 0, round:0 };



const computerPlay = function () {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};




const playRound = function (e) {
  scores.round+=1;
  currentRound.innerText = scores.round;
  const playerSelection = e.target.dataset.key;
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    console.log( "tie game!");
    gameMessage.innerText = 'Tie game!'
  } else if (selectionArray[playerSelection].win === computerSelection) {
    console.log( selectionArray[playerSelection].winMsg);
    gameMessage.innerText = `${selectionArray[playerSelection].winMsg}`
    scores.player +=1
    playerScore.innerText = scores.player
  } else {
    console.log( selectionArray[playerSelection].loseMsg);
    gameMessage.innerText = `${selectionArray[playerSelection].loseMsg}`
    scores.computer +=1
    computerScore.innerText = scores.computer
  }

  if(scores.round === 5) {
    playerButtons.forEach(button => button.classList.add('disabled'))
    if (scores.computer === scores.player) {
      gameMessage.innerText = "Game Over! Tie Game!"
    }

    if(scores.computer > scores.player) {
      gameMessage.innerText = 'GAME OVER! YOU ARE THE LOSER!'
    }

    if(scores.player > scores.computer) {
      gameMessage.innerText = 'CONGRATULATIONS YOU ARE THE WINNER!'
    }

  } 

};


const resetGame = function() {
  scores.player = 0
  scores.computer = 0
  scores.round = 0
  playerScore.innerText = scores.player;
  computerScore.innerText = scores.computer;
  currentRound.innerText = scores.round;
  playerButtons.forEach(button => button.classList.remove('disabled'))
}

playerButtons.forEach(button => button.addEventListener('click', playRound))
resetButton.addEventListener('click', resetGame )

resetGame()
