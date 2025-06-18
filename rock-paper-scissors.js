console.log("Hello World!");

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
let roundsPlayed= 0;
let maxRounds = 5;

const parent = document.querySelector("#btns");
const para = document.createElement("p");
parent.appendChild(para);

function playRound(event) {
    const humanChoice = getHumanChoice(event);
    const computerChoice = getComputerChoice();
    printCon.textContent = `Computer chose: ${computerChoice} You chose: ${humanChoice}`;

    

    if (humanChoice === computerChoice) {
        text.textContent = "Its a draw";
        return "draw";
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
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
    scores.textContent = `Computer: ${computerScore}  Human:${humanScore} Rounds PLayed:${++roundsPlayed}`;

    if (roundsPlayed === maxRounds) {

        if(humanScore > computerScore) {
            return para.textContent = `Game Over: You win.` 
        }
        else {
            return para.textContent = `Game Over: Computer wins.`   
        }
    }

}

buttons.addEventListener('click', playRound);



