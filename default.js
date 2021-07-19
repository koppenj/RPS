
let playerScore = 0;
let computerScore = 0;

//Start a round when user makes a pick
const buttons = document.querySelectorAll('button')
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			let playerSelection = button.id
			playRound();
		})
		
	});




//PC makes a selection
function computerPlay() {
		
    let randomNumber = Math.floor(Math.random()* 3);
    
    switch (randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    default: return "Error";
    }
}


	




	


// Compares choices to determine outcome and proper notification

	function playRound() {
		
		computerSelection = computerPlay();
		const userPick = document.querySelectorAll('button');
			userPick.forEach((button) => {
				 playerSelection = button.id
			});

		

		
		
		

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
function checkScore () {
	if(computerScore > playerScore) {
		return "You lose! " + computerScore + " to " + playerScore;
	}

	else if (playerScore > computerScore) {
		return "You Win! " + playerScore + " to " + computerScore;
	}

	else {
	return "Tie Game! " + playerScore + " to " + computerScore;
	}

}


//Current state of things: I can call playRound, but my onClick is always scissors and I need to correct score keeping
