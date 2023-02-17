//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
  let choices=["rock", "paper", "scissors"];
  let randomChoice=Math.floor(Math.random()*choices.length);
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
  if(computerSelection==="rock" && caseSensitive==="scissors"){
    return 'Computer has won! Rock beats scissors'
  }
  if(caseSensitive==="rock" && computerSelection==="paper"){
    return 'Computer has won! Paper beats Rock'
  }
  if(computerSelection==="rock" && caseSensitive==="paper"){
    return 'Player has won! Paper beats Rock'
  }
  if(caseSensitive==="scissors" && computerSelection==="paper"){
    return 'Player has won! Scissors beats Paper'
  }
  if(computerSelection==="scissors" && caseSensitive==="paper"){
    return 'Computer has won! Scissors beats Paper'
  }
  else{
    return `Both players chose ${playerSelection}. It was a Draw!`
  }

  }





  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
