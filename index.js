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
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock"
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors"
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock"
  }
}

let computerSelection = getComputerChoice()
let playerSelection = "Rock"
console.log(playRound(playerSelection, computerSelection))
