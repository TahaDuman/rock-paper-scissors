/* fix anonunce still showing after new round started */

/* dom stuff */
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissBtn = document.getElementById("scissors")
const results = document.getElementById("results")
const score = document.getElementById("score")
const announce = document.getElementById("announce")
const resetBtn = document.getElementById("reset")
/* getting computer choice (try to improve this)*/
function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3)
  if (randomNumber === 1) {
    return "Rock"
  } else if (randomNumber === 2) {
    return "Paper"
  } else return "Scissors"
}
/* rock-paper-scissors cases and returns */
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice()
  if (playerSelection === computerSelection) {
    return "Draw! Try again"
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      compResult++
      return "You Lose! Paper beats Rock"
    } else {
      playerResult++
      return "You Win! Rock beats Scissors"
    }
  }

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerResult++
      return "You Win! Paper beats Rock"
    } else {
      compResult++
      return "You Lose! Scissors beats Paper"
    }
  }

  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      compResult++
      return "You Lose! Rock beats Scissors"
    } else {
      playerResult++
      return "You Win! Scissors beats Paper"
    }
  }
}

rockBtn.addEventListener("click", () => {
  results.innerText = playRound("Rock")
  countScore()
})

paperBtn.addEventListener("click", () => {
  results.innerText = playRound("Paper")
  countScore()
})

scissBtn.addEventListener("click", () => {
  results.innerText = playRound("Scissors")
  countScore()
})
resetBtn.addEventListener("click", () => {
  compResult = 0
  playerResult = 0
  announce.innerText = ""
  score.innerHTML = `score: You = ${playerResult} Computer = ${compResult}`
})
let computerSelection = getComputerChoice()
/* counting */
let playerResult = 0
let compResult = 0
function countScore() {
  score.innerHTML = `score: You = ${playerResult} Computer = ${compResult}`
  if (playerResult == 5) {
    announce.innerText = "You won!"
    announce.style.cssText = "color: greenyellow;"
    playerResult = 0
    compResult = 0
  } else if (compResult == 5) {
    announce.innerText = "You lost"
    announce.style.cssText = "color: red;"
    playerResult = 0
    compResult = 0
  }
}

/* console rps codes */
/* let playerSelection = prompt("Rock / Paper / Scissors") */
/* making the playerSelection case insensitive */
/* playerSelection = playerSelection.toLocaleLowerCase() */
/*playerSelection =
  playerSelection.charAt(0).toLocaleUpperCase() + playerSelection.slice(1)
*/
