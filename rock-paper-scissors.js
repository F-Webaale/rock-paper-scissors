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
    
    yourInput = Number(prompt("*SELECT*   0: rock 1: paper 2: scissors "));

    if (yourInput === 0) {
        return "rock";
    }
    else if (yourInput === 1) {
        return "paper";
    }
    else if (yourInput === 2) {
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
// If choice is 0=rock, 1=paper, 2=scissors :Each options has 3 choices, win, draw and loose;
// Increment the side that has won : Print value and output "You win! Scissors beats paper."

/*function playRound(humanChoice, computerChoice) {
    
    if ( humanChoice === 0 && computerChoice === 1) {
        console.log("Relax! Paper beats rock.");
    }

    else if (humanChoice === 0 && computerChoice === 2) {
        console.log("Well done! Rock beats scissors.");
    }

    else {
        console.log("Relax! Rock cant beat rock");
    }*/

    /*if ( 1 === 0) {
        console.log("Well done! Paper beats rock.");
    }

    else if (1 === 2) {
        console.log("Scissors beats paper.");
    }

    else {
        console.log("Relax! paper cant beat paper.");
    }

    if ( 2 === 0) {
        console.log("Sorry! rock beats scissors.");
    }

    else if (2 === 1) {
        console.log("Scissors beats paper.");
    }

    else {
        console.log("Relax! scissors cant beat scissors.");
    }
}
playRound(getHumanChoice, getComputerChoice);*/

