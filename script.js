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

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', () => handleClick('ROCK'))
paper.addEventListener('click', () => handleClick('PAPER'))
scissors.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
}