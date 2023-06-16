function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    const randomChoice = choices[Math.floor(Math.random()*3)]
    console.log("computer chose " + randomChoice)
    return randomChoice
}
function getPlayerChoice(){
    const choice = prompt('Please enter your choice Rock, Paper, or Scissors')
    console.log("player chose " + choice)
    
    return choice
}

getComputerChoice()
getPlayerChoice()