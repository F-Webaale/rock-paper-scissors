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

function getHumanChoice(yourInput) {
    
    yourInput = prompt("*SELECT*   rock, paper or scissors ");

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
}


// Declare score player variables.
let humanScore = 0;
let computerScore = 0;

// Create a function for one round for the game.
// Two parameters to pick choices((Human & Computer) as argument.
// Compare the results : Give output
// If choice is rock, paper, scissors :Each options has 3 choices, win, draw and loose;
// Increment the side that has won : Print value and output "You win! Scissors beats paper."

function playRound(humanChoice, computerChoice) {
    // choices picked
    console.log(`Computer choice: ${getComputerChoice()}`);
    console.log(`Your choice: ${getHumanChoice()}`);

    if (humanChoice === computerChoice) {
        console.log("Its a draw");
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        console.log(`Your score: ${++humanScore}`);
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        console.log(`Computer score: ${++computerScore}`);
    }
}
playRound(getHumanChoice(), getComputerChoice());

