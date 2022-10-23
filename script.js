function getComputerChoice (){
    x = Math.floor(Math.random() * 3)
    switch(x) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }

}

function playRound (playerSelection, computerSelection) {
    let winner = 0;
    getComputerChoice();
    if(playerSelection == 'ROCK') {
        if(computerSelection == 'ROCK'){
            winner=0;
            console.log('It was a draw')
        }
        else if (computerSelection == 'PAPER'){
            winner=2;
            console.log('You lose - paper beats rock')
        }
        else {
            winner = 1;
            console.log('You win - rock beats scissors')
        }
    }
    else if(playerSelection == 'Scissors') {
        if(computerSelection == 'Scissors'){
            winner=0;
            console.log('It was a draw')
        }
        else if (computerSelection == 'PAPER'){
            winner=1;
            console.log('You win - scissors beats paper')
        }
        else {
            winner = 2;
            console.log('You lose - rock beats scissors')
        }
    }
    else {
        if(computerSelection == 'PAPER'){
            winner=0;
            console.log('It was a draw')
        }
        else if (computerSelection == 'ROCK'){
            winner=1;
            console.log('You win - paper beats rock')
        }
        else {
            winner = 2;
            console.log('You lose - scissors beats paper')
        }
    }
    return winner;
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        //prompt the use for input
        let winner = playRound(prompt(), getComputerChoice()); 
        if(winner==1){
            playerScore++;
        }
        else if (winner==2){
            computerScore++;
        }
        else{
            i--;
        }
        console.log(playerScore)
        console.log(computerScore)
        if(playerScore == 3){
            return ('You won 3 rounds - you win the game!')
        }
        else if (computerScore == 3){
            return ('The computer won 3 rounds - you lost the game.')
        }
    }
}