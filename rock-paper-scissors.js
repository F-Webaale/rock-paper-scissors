console.log("Hello World!");
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
const text = document.querySelector(".playText");
const scores = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

function playRound(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    printCon.textContent = `Computer chose: ${computerChoice} You chose: ${humanChoice}`;

    

    if (humanChoice === computerChoice) {
        text.textContent = "Its a draw";
        return "draw";
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        
    }
    else {
        computerScore++;
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        
    }
    return scores.textContent = `Computer: ${computerScore}  Human:${humanScore}`

}

buttons.addEventListener('click', playRound);

