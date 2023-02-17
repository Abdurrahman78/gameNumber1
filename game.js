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
    alert( 'Player has won! Rock beats scissors')
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    alert( 'Computer has won! Rock beats scissors')
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    alert( 'Computer has won! Paper beats Rock')
  }
  else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    alert( 'Player has won! Paper beats Rock')
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    alert('Player has won! Scissors beats Paper')
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    alert( 'Computer has won! Scissors beats Paper')
  }
  else {
    draw++;
    alert( `Both players chose ${playerSelection}. It was a Draw!`)
  }

}

function game() {

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please Enter (Rock,Paper,Scissors): ")
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

  }
  if (playerScore > computerScore) {
    alert(`After 5 Rounds: Player has Won with a score of ${playerScore} to Computers Score of ${computerScore}. With a Draw score of ${draw}!`)
  }
  else if (playerScore < computerScore) {
    alert(`After 5 Rounds: Computer has Won with a Player score of ${computerScore} to Computers Score of ${playerScore}. With a Draw score of ${draw}!`)
  }
  else {
    alert(`After 5 Rounds: It is a Tie with Player score of ${playerScore} to Computers Score of ${computerScore}. With a Draw score of ${draw}`)
  }


}

console.log(game());