function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    const randomChoice = choices[Math.floor(Math.random()*3)]
    console.log("computer chose " + randomChoice)
}
getComputerChoice()