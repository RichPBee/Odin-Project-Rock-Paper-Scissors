let counter = 0;
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//This section of code is solely for DOM manipulation.
const addScorebar = (winner) => {
    const scorebar = document.createElement('li');
    scorebar.setAttribute("class", "scorebar");
    let scorecard = document.querySelector(winner);
    scorecard.appendChild(scorebar);
}

const removeInfoText = () => {
    const display = document.querySelector(".display");
    const infoText = document.querySelectorAll(".info-text");
    infoText.forEach(item => {
        display.removeChild(item)  
    })
}

const setUpDisplay = () => {
    const playList = document.createElement("ul")
    playList.setAttribute("class", "outcome-list");
    const display = document.querySelector(".display");
    for (let i = 0; i < 7; i ++) {
        const play = document.createElement("li")
        play.setAttribute("class", "outcome-bar")
        play.setAttribute("id", `${i}`);
        playList.append(play);
    }
    display.append(playList);
}

const clearDisplay = () => {
    const outcomes = document.querySelectorAll(".outcome-bar");
    outcomes.forEach(outcome => {
        outcome.innerHTML = "";
    })
}

const displayResult = (winResult) => {
    let winnerText = document.createElement("h4");
    let winBars = document.querySelectorAll(".outcome-bar")
    winnerText.textContent = `Round ${roundNumber + 1}: ${winResult}`;
    winBars[counter].append(winnerText);
    
}
/* let numRounds;
const roundSelectorBtns = document.querySelectorAll(".round-selector");
roundSelectorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let numRounds = (btn.id == "three") ? "three": "five";
        removeInfoText()
        return numRounds;
    })
}) */



const choiceBtns = document.querySelectorAll(".choice-button");
choiceBtns.forEach((btn => {
    btn.addEventListener("click", () => {
        let playerChoice =  (btn.id == "rock") ? "rock"
            : (btn.id == "paper") ? "paper"
            : (btn.id == "scissors") ? "scissors"
            : "not a choice";
        if (counter == 0){
            removeInfoText();
            setUpDisplay();
        } else if (counter % 7 == 0) {
            counter = 0;
            clearDisplay();
        }
        game(playerChoice, getComputerChoice(Math.random() * 2));
        return
        })
    }
))

const resetBtn = document.querySelector(".reset-button");
resetBtn.addEventListener("click", () => {
    alert("You have reset the page.")
    location.reload();
})



// This section of the code deals with the game logic. 
function getComputerChoice(num) {
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



function game(playerChoice, computerChoice){

    let result = playRound(playerChoice, computerChoice)
    if (result.includes("Win")) {
        playerScore++;
        addScorebar("#player");
        displayResult(result);
    } else if (result.includes("Lose")) {
        computerScore++;
        addScorebar("#cpu");
        displayResult(result);
    } else {
        draws++;
        displayResult(result);
    }

    console.log(result);


    /*if (playerScore > computerScore) {
        addScorebar("#player")
    } else if (playerScore < computerScore) {
        addScorebar("#cpu")
    } else {
        console.log(draws);
    } */
    counter ++;
    roundNumber ++;
    if(playerScore == 15 || computerScore == 15) {
        alert("Maximum system score reached - resetting.")
        location.reload();
    }
}

