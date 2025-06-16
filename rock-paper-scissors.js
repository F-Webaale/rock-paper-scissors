console.log("Hello World!");

// Function should return "paper" or "rock" or "scissors"
// Fuction for computers choice is random
// let choice range between 0, 1 and 2
// If choice is 0=rock, 1=paper, 2=scissors

function getComputerChoice(choice) {

    choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


// Prompt human to input choice; Display range of choices for selection
// choice will be in string format , convert to number
// If number from range is selected, output option is displayed.
// If number is out of range, display "selection out of range"

/*function getHumanChoice(yourInput) {
    
    yourInput = prompt("*SELECT*   rock, paper or scissors ").toLowerCase();

    if (yourInput === "rock") {
        return "rock";
    }
    else if (yourInput === "paper") {
        return "paper";
    }
    else if (yourInput === "scissors") {
        return "scissors";
    }
    else {
        return "Your selection is out of range!";
    }
}*/

const buttons = document.querySelector("#btns");

function getHumanChoice(event){
    let target = event.target;
    switch(target.id) {
        case "rock":
            console.log("rock");
            break;
        
        case "paper":
            console.log("paper");
            break;

        case "scissors":
            console.log("scissors");
            break;
    }
}


buttons.addEventListener("click", getHumanChoice);


/*
// Declare score player variables.
let humanScore = 0;
let computerScore = 0;

// Create a function for one round for the game.
// Two parameters to pick choices((Human & Computer) as argument.
// Compare the results : Give output
// If choice is rock, paper, scissors :Each options has 3 choices, win, draw and loose;
// Increment the side that has won : Print value and output "You win! Scissors beats paper."

function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    // choices picked
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Your choice: ${humanChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Its a draw");
        return "Draw";
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`Your score: ${++humanScore}`);
        return "Human";
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        console.log(`Computer score: ${++computerScore}`);
        return "Computer";
    }

}

console.log("ROUND 1")
playRound();

// Play 5 rounds of the game
// Declare a funcion: playGame;
// The function needs to call playround 5 times

function playGame() {
    
    console.log("ROUND 2");
    playRound();

    console.log("ROUND 3");
    playRound()

    console.log("ROUND 4");
    playRound()

    console.log("ROUND 5");
    playRound()
}

playGame();

console.log(
    `FINAL SCORE /n Your score: ${humanScore} Computer score:${computerScore}`
)

if (humanScore > computerScore) {
        console.log("You win");
}
else {
    console.log("Computer Wins! Try again, next time");
}


*/
