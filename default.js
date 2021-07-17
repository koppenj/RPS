
//Generates the computer's choice

	function computerPlay() {
		
		let randomNumber = Math.floor(Math.random()* 3);
		
		switch (randomNumber){
			case 0: return "rock";
			case 1: return "paper";
			case 2: return "scissors";
		default: return "Error";
		}
	}
	
//initializes score and plays a round
	function game(){
	  let playerScore = 0;
	  let computerScore = 0;
	
	  playRound();

	
// Compares choices to determine outcome and proper notification

	function playRound(playerSelection, computerSelection){


		playerSelection = prompt("What's your choice? Rock, Paper, or Scissors?").toLowerCase();
		computerSelection = computerPlay();
		
		
		if ((computerSelection == "rock" && playerSelection == "scissors")||
			(computerSelection == "paper" && playerSelection =="rock")||
			(computerSelection == "scissors" && playerSelection == "paper")){
		
	
			console.log( computerSelection + " beats "+ playerSelection + ". The computer wins!");
			return computerScore++;

		}

		else if ((computerSelection == "rock" && playerSelection == "paper")||
			(computerSelection == "paper" && playerSelection =="scissors")||
			(computerSelection == "scissors" && playerSelection == "rock")){

		
			console.log( playerSelection + " beats "+ computerSelection + ". You win!");
			return playerScore++;
		}

		else if (computerSelection == playerSelection){

			console.log(playerSelection + " versus " + computerSelection + ". Tie game!");
			return "TIE";
		}
		
		else {
			alert( "Something didn't go right" );
			return playRound();
		}
		
	} 
	
// When round limit is met, this returns the final tally

	if(computerScore > playerScore){
		return "You lose! " + computerScore + " to " + playerScore;
	}

	else if (playerScore > computerScore){
		return "You Win! " + playerScore + " to " + computerScore;
	}

	else{
	return "Tie Game! " + playerScore + " to " + computerScore;
	}
}



