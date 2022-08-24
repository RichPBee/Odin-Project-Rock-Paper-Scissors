//This section of code is solely for DOM manipulation. 

//Function to write text to the screen at first loading. 
Window.onload = () => {

}








// This section of the code deals with the game logic. 

/*function getComputerChoice(num) {
    num = Math.round(num);
    return (num == 0) ? "Rock"
        : num == 1 ? "Paper"
        : num == 2 ? "Scissors"
        : "Not an answer."
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "Rock" :
                return "It\'s a draw! Rock versus Rock!";
            case "Paper" :
                return "You Lose! Paper beats Rock.";
            case "Scissors" :
                return "You Win! Rock beats Scissors.";
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "Rock" :
                return "You Lose! Rock beats Scissors.";
            case "Paper" :
                return "You Win! Scissors beat Paper.";
            case "Scissors" :
                return "It\'s a draw! Scissors versus Scissors!";             
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "Rock" :
                return "You Win! Paper beats Rock.";
            case "Paper" :
                return "It\'s a draw! Paper versus Paper!";
            case "Scissors" :
                return "You Lose! Scissors beat Paper!";
        }
    } else {
        alert("Player input not valid.");
    }
}

function checkPlayerChoice(choice) {
    while (choice != "rock" && choice != "scissors" && choice != "paper"){
        let newChoice = prompt(`Rock, Paper, Scissors. 
        Make your choice: `);
        newChoice = newChoice.toLowerCase();
        choice = newChoice;
    }
    return choice;
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i ++){
        let playerChoice = prompt(`Rock, Paper, Scissors. 
        Make your choice: `);
        playerChoice = playerChoice.toLowerCase();
        let checkedChoice = checkPlayerChoice(playerChoice);
        let computerChoice = getComputerChoice(Math.random() * 2);
        let result = playRound(checkedChoice, computerChoice);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        } else {
            draws++;
        }
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log(`You win. You scored ${playerScore} points, the computer only scored ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose. You scored ${playerScore} points, the computer scored ${computerScore}.`);
    } else {
        console.log(`It's a draw! You and the computer both scored ${playerScore} points.`);
    }
}
game() */
