
let playerScore = 0;
let computerScore = 0;







function computerPlay() {
		
    let randomNumber = Math.floor(Math.random()* 3);
    
    switch (randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    default: return "Error";
    }
}


function scoreUpdate() {

	const userScoreUpdate = document.getElementById('player');
	const computerScoreUpdate = document.getElementById('computer');
	
	userScoreUpdate.textContent = ` ${playerScore} `;
	computerScoreUpdate.textContent = ` ${computerScore} `;
	
	}


function playRound(playerSelection) {
		
	computerSelection = computerPlay();

	const showResult = document.querySelector('#result');
		
	
		

	if ((computerSelection == "rock" && playerSelection == "scissors") ||
		(computerSelection == "paper" && playerSelection =="rock") ||
		(computerSelection == "scissors" && playerSelection == "paper")) {
		
		showResult.textContent =  ` ${computerSelection} beats ${playerSelection}. The computer wins! `; 
		computerScore++;
		scoreUpdate();
		checkScore();
		
		
		

		}

		else if ((computerSelection == "rock" && playerSelection == "paper") ||
				(computerSelection == "paper" && playerSelection =="scissors") ||
				(computerSelection == "scissors" && playerSelection == "rock")) {
		
			showResult.textContent = ` ${playerSelection} beats ${computerSelection}. You win! `;
			playerScore++;
			scoreUpdate();
			checkScore();
			
			
			
		}

		else if (computerSelection == playerSelection) {
			
			showResult.textContent = `${playerSelection} versus ${computerSelection}. Tie Game `;
			

		}
		
		else {

			alert( " Something didn't go right, select again " );

			return playRound();
		}

	
		
}
        
//Start a round when user makes a pick
const buttons = document.querySelectorAll('button')
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			
				playRound(button.id);
		})
		
	});

function checkScore() {

	const endGameResult = document.querySelector('#endResult');
	
		if(computerScore >= 5 ) {

			buttons.removeEventListener('click', playRound );
			endGameResult.textContent = "You Lose" ;
		}

		else if (playerScore >= 5 ) {

			buttons.removeEventListener('click', playRound); 
			endGameResult.textContent = "You Win" ;
		}

		else {
			return
		}
	
}
	



