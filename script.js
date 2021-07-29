const computerSpan = document.querySelector(".computerSpan");
const gameChoices = ["rock", "paper", "scissors"];
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

let scores = { player: 0, comptuter: 0 };

const computerPlay = function () {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};
//test

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
    if (gameChoices.indexOf(playerChoice) > -1) {
      console.log(singleRound(playerChoice, computerChoice));
    } else {
      console.log(
        "not a valid selection, please pick rock, paper, or scissors"
      );
      i -= 1;
    }
  }
};

game(5);
