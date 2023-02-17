//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
  let choices=["rock", "paper", "scissors"];
  let randomChoice=Math.floor(Math.random()*choices.length)+1
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
   let caseSensitive= playerSelection.toLowerCase()
  if(caseSensitive==="rock" && computerSelection==="scissors"){
    return 'Player has won! Rock beats scissors'
  }

  }

console.log(playRound("ROCK", getComputerChoice()))
  
