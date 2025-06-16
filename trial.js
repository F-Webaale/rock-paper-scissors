console.log("Hello World!");

// Function to get a random choice for the computer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get the human player's choice
function getHumanChoice() {
    let yourInput = Number(prompt("*SELECT*   0: rock  1: paper  2: scissors "));

    if (yourInput === 0) {
        return "rock";
    } else if (yourInput === 1) {
        return "paper";
    } else if (yourInput === 2) {
        return "scissors";
    } else {
        console.log("Your selection is out of range!");
        return null; // Return null for invalid input
    }
}

// Declare score variables
let humanScore = 0;
let computerScore = 0;

// Function for a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return "draw";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win!");
        humanScore++;
        return "human";
    } else {
        console.log("You lose!");
        computerScore++;
        return "computer";
    }
}

// Run the game
let humanChoice = getHumanChoice();
if (humanChoice !== null) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
