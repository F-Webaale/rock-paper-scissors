console.log("Hello World!");
/*
// Function should return "paper" or "rock" or "scissors"
// Fuction for computers choice is random
// let choice range between 0, 1 and 2
// If choice is 0=rock, 1=paper, 2=scissors

function getComputerChoice(choice) {

    choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        computerChoice = "rock";
    }
    else if (choice === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    printCon.textContent = `Computers choice: ${computerChoice}`;
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


const buttons = document.querySelector("#btns");
const printCon = document.querySelector(".printContent");

function getHumanChoice(event){
    let targets = event.target;

    switch(targets.id) {
        case "rock":
            humanChoice =  "rock";
            break;
        
        case "paper":
            humanChoice = "paper";
            break;

        case "scissors":
            humanChoice = "scissors";
            break;
    }
    printCon.textContent = `You chose ${humanChoice}`;
    
}


buttons.addEventListener("click", getHumanChoice);





// Declare score player variables.
let humanScore = 0;
let computerScore = 0;

// Create a function for one round for the game.
// Two parameters to pick choices((Human & Computer) as argument.
// Compare the results : Give output
// If choice is rock, paper, scissors :Each options has 3 choices, win, draw and loose;
// Increment the side that has won : Print value and output "You win! Scissors beats paper."


function playRound(humanChoice, computerChoice) {




//let me try mergr into one button
    humanChoice = getHumanChoice(Event);
    computerChoice = getComputerChoice(Event);

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
*/
const buttons = document.querySelector("#btns");
const printCon = document.querySelector(".printContent");

    
function getComputerChoice(choice) {

        choice = Math.floor(Math.random() * 3);
        let computerChoice;
        if (choice === 0) {
            computerChoice = "rock";
        }
        else if (choice === 1) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        return computerChoice;
}

function getHumanChoice(event){
        let targets = event.target;
        let humanChoice;
        switch(targets.id) {
            case "rock":
                humanChoice =  "rock";
                break;
            
            case "paper":
                humanChoice = "paper";
                break;
    
            case "scissors":
                humanChoice = "scissors";
                break;
        }
        
        return humanChoice;
        
  }

function playRound(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    printCon.textContent = `Computer chose: ${computerChoice} You chose: ${humanChoice}`;
}

buttons.addEventListener('click', playRound);

