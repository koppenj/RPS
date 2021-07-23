
let playerScore = 0;
let computerScore = 0;
let playerSelection;

//Start a round when user makes a pick
const buttons = document.querySelectorAll('button')
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			
				playRound(button.id);
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

	function playRound(playerSelection) {
		
		computerSelection = computerPlay();

		const showResult = document.querySelector('#result');
		
			
		

		if ((computerSelection == "rock" && playerSelection == "scissors")||
			(computerSelection == "paper" && playerSelection =="rock")||
			(computerSelection == "scissors" && playerSelection == "paper")) {
		
			showResult.textContent =  ` ${computerSelection} beats ${playerSelection}. The computer wins! `; 
			
			return computerScore++;

		}

		else if ((computerSelection == "rock" && playerSelection == "paper")||
			(computerSelection == "paper" && playerSelection =="scissors")||
			(computerSelection == "scissors" && playerSelection == "rock")){

		
			showResult.textContent = ` ${playerSelection} beats ${computerSelection}. You win! `;
			return playerScore++;
		}

		else if (computerSelection == playerSelection){

			showResult.textContent = `${playerSelection} versus ${computerSelection}. Tie Game `;
			return "TIE";
		}
		
		else {
			alert( " Something didn't go right, select again " );
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
