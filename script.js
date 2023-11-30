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
        return "player wins";
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
function updateScore(result,score){
    let round = document.querySelector(".round");
    let playerScore = document.querySelector(".playerscore");
    let computerScore = document.querySelector(".computerscore");
    if (score.round>4){
        round.innerText = "GAME IS OVER REFRESH TO RESTART";
        let resultDiv = document.querySelector('.result');
        let parentElement = resultDiv.parentNode;
        parentElement.removeChild(resultDiv);

        return;
    }
    if(result=="player wins"){
        score.round += 1;
        score.player += 1;
        round.innerText = `Round: ${score.round}`;
        playerScore.innerText = `Player: ${score.player}`;
        return score;
    }
    else if (result=="computer wins"){
        score.round += 1;
        score.computer += 1;
        round.innerText = `Round: ${score.round}`;
        computerScore.innerText = `Computer: ${score.computer}`;
        return score;
    }
    else{
        score.round += 1;
        round.innerText = `Round: ${score.round}`;
        return score;
    }
}
function game(){
        const buttons = document.querySelectorAll(".button");
        let playerChoice = '';
        let score = {
            player : 0,
            computer :0,
            round:1,
        };

        buttons.forEach((button)=>{
            button.addEventListener('click',event=>{playerChoice = event.target.id;
                let computerChoice = getComputerChoice();     
                let resultDiv = document.querySelector('.result');
                let result = playRound(playerChoice,computerChoice);
                score = updateScore(result,score);
                resultDiv.innerHTML = result;
            });
        });
    }

game()
