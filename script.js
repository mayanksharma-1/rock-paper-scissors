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
}
console.log(playRound(getPlayerChoice(),getComputerChoice()));
