//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)

let rockButton=document.querySelector('.rock');

let paperButton=document.querySelector('.paper')

let scissorsButton=document.querySelector('.scissors')

let displayMessage=document.querySelector('.display')


//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerScore = 0;
let playerScore = 0;
let draw = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length); //will store a value from 0 to the choices array length which is 2 so [0,1,2] will be chosen at random
  return choices[randomChoice]; //choices[0] or [1,2] will be chosen at random

}

//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.

function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    displayMessage.innerHTML='Player has won! Rock beats scissors'
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    displayMessage.innerHTML='Computer has won! Rock beats scissors'
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    displayMessage.innerHTML='Computer has won! Paper beats Rock'
  }
  else if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    displayMessage.innerHTML='Player has won! Paper beats Rock'
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    displayMessage.innerHTML='Player has won! Scissors beats Paper'
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    displayMessage.innerHTML='Computer has won! Scissors beats Paper'
  }
  else {
    draw++;
    displayMessage.innerHTML=`Both players chose ${playerSelection}. It was a Draw!`
  }

}


rockButton.addEventListener('click',()=>playRound("rock",getComputerChoice()))
paperButton.addEventListener('click',()=>playRound("paper",getComputerChoice()))
scissorsButton.addEventListener('click',()=>playRound("scissors",getComputerChoice()))