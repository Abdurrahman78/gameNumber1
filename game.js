//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerScore = 0;
let playerScore = 0;
let draw = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];

}

//we want to make sure that player can input upper or lower case letters
//then we wantt to do multiple comparisons to check what player has choosen and output a message based on that choice
//Rock beats scissors and loses to paper.
//Scissors beat paper but loses to rock
//Paper beats rock, but loses to scissors
//else draw
function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return 'Player has won! Rock beats scissors'
  }
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    return 'Computer has won! Rock beats scissors'
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return 'Computer has won! Paper beats Rock'
  }
  if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    return 'Player has won! Paper beats Rock'
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return 'Player has won! Scissors beats Paper'
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    return 'Computer has won! Scissors beats Paper'
  }
  else {
    draw++;
    return `Both players chose ${playerSelection}. It was a Draw!`
  }

}

function game() {

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please Enter (Rock,Paper,Scissors): ")
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

  }
  if (playerScore > computerScore) {
    return `After 5 Rounds Player has Won with a score of ${playerScore} to Computers Score of ${computerScore}!`
  }
  else if (playerScore < computerScore) {
    return `After 5 Rounds Computer has Won with a score of ${computerScore} to Computers Score of ${playerScore}!`
  }
  else {
    return `After 5 Rounds it is a Tie with Player score of ${playerScore} to Computers Score of ${computerScore}. With a Draw score of ${draw}`
  }


}

console.log(game());
