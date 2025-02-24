console.log("Hello World!");

// Function should return "paper" or "rock" or "scissors"
// Fuction for computers choice is random
// let choice range between 0 and 3
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
