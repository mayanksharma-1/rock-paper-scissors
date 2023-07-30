function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice = choices[Math.floor(Math.random()*3)];
    console.log("computer chose " + randomChoice);
    return randomChoice;
}

function playRound(playerChoice,computerChoice) {
    if (playerChoice==-1){
        return;
    }
    else if (playerChoice==computerChoice){
        return "It's a Draw ";
    }
    else if(computerChoice == 'scissors' && playerChoice == 'rock'){
        return "Player wins";
    }
    else if(computerChoice == 'paper' && playerChoice == 'rock'){
        return "computer wins";
    }
    else if(computerChoice == 'scissors' && playerChoice == 'paper'){
        return "computer wins";
    }
    else if(computerChoice == 'rock' && playerChoice == 'paper'){
        return "player wins";
    }
    else if(computerChoice == 'rock' && playerChoice == 'scissors'){
        return "computer wins";
    }
    else if(computerChoice == 'paper' && playerChoice == 'scissors'){
        return "player wins";
  }
  else if(computerChoice == 'paper' && playerChoice == 'scissors'){
    return "player wins";
}
}

function game(){
        const buttons = document.querySelectorAll(".button");
        let playerChoice = '';
        buttons.forEach((button)=>{
            button.addEventListener('click',event=>{playerChoice = event.target.id;
                let computerChoice = getComputerChoice();     
                answerDiv = document.querySelector('.answer');
                answerDiv.innerHTML = playRound(playerChoice,computerChoice);
            });
        });
    }

game();