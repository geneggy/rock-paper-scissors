const computerPlay = function () {
  const gameArray = ["rock", "paper", "scissors"];
  let computerSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  return computerSelection;
};

const selectionArray = {
  rock: {
    lose: "paper",
    win: "scissors",
    loseMsg: "You lose! Paper beats rock!",
    winMsg: "You win! Rock beats Scissors!",
  },
  paper: {
    lose: "scissors",
    win: "rock",
    loseMsg: "You lose! Scissors beats paper!",
    winMsg: "You win! Paper beats rock!",
  },
  scissors: {
    lose: "rock",
    win: "paper",
    loseMsg: "You lose! Rock beats scissors!",
    winMsg: "You win! Scissors beats paper!",
  },
};

const singleRound = function (playerSelection, computerSelection) {
  // if (selectionArray[playerSelection].lose === computerSelection) {
  //   console.log("you lose!");
  // } else if (selectionArray[playerSelection].win === computerSelection) {
  //   console.log("you win!");
  // } else {
  //   console.log("tie game!");
  // }

  if (playerSelection === computerSelection) {
    console.log("tie game!");
  } else if (selectionArray[playerSelection].win === computerSelection) {
    console.log(selectionArray[playerSelection].winMsg);
  } else {
    console.log(selectionArray[playerSelection].loseMsg);
  }
};

singleRound("rock", "paper");
