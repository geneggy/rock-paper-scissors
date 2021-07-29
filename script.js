const computerPlay = function () {
  const gameArray = ["rock", "paper", "scissors"];
  let computerSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  return computerSelection;
};
//test
const selectionArray = {
  rock: {
    lose: "paper",
    win: "scissors",
    loseMsg: "You lose! Paper beats Rock!",
    winMsg: "You win! Rock beats Scissors!",
  },
  paper: {
    lose: "scissors",
    win: "rock",
    loseMsg: "You lose! Scissors beats Paper!",
    winMsg: "You win! Paper beats Rock!",
  },
  scissors: {
    lose: "rock",
    win: "paper",
    loseMsg: "You lose! Rock beats Scissors!",
    winMsg: "You win! Scissors beats Paper!",
  },
};

const singleRound = function (playerSelection, computerSelection) {
  let playerSelectionLC = playerSelection.toLowerCase();
  if (playerSelectionLC === computerSelection) {
    return "tie game!";
  } else if (selectionArray[playerSelectionLC].win === computerSelection) {
    return selectionArray[playerSelectionLC].winMsg;
  } else {
    return selectionArray[playerSelectionLC].loseMsg;
  }
};

const game = function (rounds) {
  for (let i = 1; i <= rounds; i++) {
    let playerChoice = prompt("Pick rock, paper, or scissors");
    let computerChoice = computerPlay();

    console.log(singleRound(playerChoice, computerChoice));
  }
};

game(5);
