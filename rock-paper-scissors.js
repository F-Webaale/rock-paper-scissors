console.log("Hello World!");

// Function should return "paper" or "rock" or "scissors"
// Fuction for computers choice is random
// let choice range between 0, 1 and 2
// If choice is 0=rock, 1=paper, 2=scissors

function getComputerChoice(max) {

    max = Math.floor(Math.random() * 3);

    if (max === 0) {
        console.log("rock");
    }
    else if (max === 1) {
        console.log("paper");
    }
    else if (max === 2) {
        console.log("scissors");
    }
}

getComputerChoice();

// Prompt human to input choice; Display range of choices for selection
// choice will be in string format , convert to number
// If number from range is selected, output option is displayed.
// If number is out of range, display "selection out of range"

function getHumanChoice(yourInput) {
    
    yourInput = prompt("*SELECT*   0: rock 1: paper 2: scissors ");

    if (yourInput === 0) {
        console.log("rock");
    }
    else if (yourInput === 1) {
        console.log("paper");
    }
    else if (yourInput === 2) {
        console.log("scissors");
    }
    else {
        console.log("Your selection is out of range!");
    }
}

getHumanChoice();