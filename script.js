let playerScore = 0
let computerScore = 0

 function getComputerChoice (){
    switch (Math.floor(Math.random()* 3)){
        case 0 : 
        return 'rock';
        case 1 : 
            return 'paper';
        case 2 :
            return 'scissor';
    }
}


function getResult (playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase();
    computerSelect = computerSelect.toLowerCase();

    if (playerSelect === computerSelect){
        return "It's a tie, try again!"
    } else if ( 
        (playerSelect == "rock" && computerSelect === "scissor") ||
        (playerSelect == "paper" && computerSelect === "rock") ||
        (playerSelect == "scissor" && computerSelect == "paper")
    ){
        return `You win! ${playerSelect} beats ${computerSelect}.`
        
    } else { 
        
        return `You lose! ${computerSelect} beats ${playerSelect}.`
    }
}

function playRound(playerSelect){
    const computerSelect = getComputerChoice()
    const result = getResult(playerSelect,computerSelect)

    score(result)
    displayScore()

    const divResult = document.querySelector('#result')
    divResult.textContent = result

    if (playerScore === 5 || computerScore === 5){
        endGame()
    }
}

function score(result){
    if (result.includes("win")){
        playerScore++

    } else if (result.includes("lose")){
        computerScore++
        
    }
}

function displayScore (){
    const score = document.querySelector('#score')
    score.textContent = `Player Score : ${playerScore} / Computer Score : ${computerScore}` 
}
        

function endGame(){
    const divResult = document.querySelector('#result')
    // divResult.textContent = `Player Score : ${playerScore} / Computer Score : ${computerScore}`

    if(playerScore === 5){
        divResult.textContent = "You Won the game!!!"
    }else if (computerScore === 5){
        divResult.textContent = "You Lose the game, Try again!!!"
    }else {
        divResult.textContent = "Tie! The game ended in a draw."
    }

    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) =>{
        button.disabled = true
    })
}

// the game function to play 5 rounds using a loop.
// also keeps the score of the player and computer.
// add of the prompt function for the player to make a choice.

// function game(){
//     let playerScore = 0
//     let computerScore = 0

//     for (let round = 1; playerScore <5, computerScore <5; round++){
//         const playerSelect = prompt("Enter your choice (Rock, Paper, Scissor): ")
//         const computerSelect = getComputerChoice()
//         const result = playRound(playerSelect, computerSelect)
//         console.log(`Round ${round}: ${result}`)

        // if (result.includes("win")){
        //     playerScore++
        // } else if (result.includes("lose")){
        //     computerScore++
            
        // }
//     }
//     console.log(`Player Score : ${playerScore}`)
//     console.log(`Computer Score : ${computerScore}`)

//    // message for the final result of the game after comparing the scores.

//     if(playerScore > computerScore){
//         console.log("You Won the game!!!")
//     }else if (playerScore < computerScore){
//         console.log("You Lose the game, Try again!!!")
//     }else {
//         console.log("Tie! The game ended in a draw.")
//     }

// }
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector('#paper')
const btnScissor = document.querySelector('#scissor')

btnRock.addEventListener('click', () => {
    playerSelect = 'rock'
    computerSelect = getComputerChoice()
    playRound(playerSelect,computerSelect)
})
btnPaper.addEventListener('click', () => {
    playerSelect = 'paper'
    computerSelect = getComputerChoice()
    playRound(playerSelect,computerSelect)
})
btnScissor.addEventListener('click', () => {
    playerSelect = 'scissor'
    computerSelect = getComputerChoice()
    playRound(playerSelect,computerSelect)
})
