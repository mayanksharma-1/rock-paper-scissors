function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice = choices[Math.floor(Math.random()*3)];
    console.log("computer chose " + randomChoice);
    return randomChoice;
}
function getPlayerChoice(){
    let choice = prompt('Please enter your choice Rock, Paper, or Scissors');
    const choices = ['rock','paper','scissors'];
    choice = makeLowercase(choice);
    if (choice == choices[0] | choice == choices[1] | choice == choices[2]){
    // if (choice in choices){

        console.log("player chose " + choice);
        return choice;
    }
    else{
        console.log('Invalid option Error')
        return -1;
    }
}
function makeLowercase(string) {
    let lowercaseString = "";
  
    for (let character of string) {
      let lowercaseCharacter = character.toLowerCase();
      lowercaseString += lowercaseCharacter;
    }
    return lowercaseString;
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
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    for (let i =0;i<5;i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice,computerChoice));
        if (playRound(playerChoice,computerChoice) == "player wins"){
            playerScore += 1;
        }
        else if(playRound(playerChoice,computerChoice) == "computer wins"){
            computerScore += 1;
        }
        else if(playRound(playerChoice,computerChoice) == "It's a Draw "){
            drawScore +=1;
        }
        else{
            console.log('Try again round not counted because of error');
            i -= 1;
        }
    }
    if (playerScore>computerScore){
        console.log('Player wins the best of five');
    }
    else if(computerScore>playerScore){
        console.log('Computer wins the best of five');
    }
    else if(playerScore==computerScore){
        console.log('The best of five is a Draw')
    }
}

game();