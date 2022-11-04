function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3)
  if (randomNumber === 1) {
    return "Rock"
  } else if (randomNumber === 2) {
    return "Paper"
  } else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw"
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock"
    } else if (computerSelection === "Scissors") {
      return "You Win! Rock beats Scissors"
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You Win! Paper beats Rock"
    } else if (computerSelection === "Scissors") {
      return "You Lose! Scissors beats Paper"
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors"
    } else if (computerSelection === "Paper") {
      return "You Win! Paper beats Scissors"
    }
  }
}

let computerSelection = getComputerChoice()
let playerSelection = "paper"
/* making the playerSelection case-insensitive */
playerSelection = playerSelection.toLocaleLowerCase()
playerSelection =
  playerSelection.charAt(0).toLocaleUpperCase() + playerSelection.slice(1)

console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
