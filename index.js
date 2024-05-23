// assigning variables

let humanScore = 0;
let computerScore = 0;


//computer choice
function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3);
    return randomInt;
}

//human choice
function getHumanChoice() {
    let choice = parseInt(prompt('Enter a number'))
    return choice
}

//play
function playRound(humanChoice, computerChoice) {
    let choices = ["Rock", "Paper", "Scissors"];
    humanSelection = choices[humanChoice];
    computerSelection = choices[computerChoice];
    result = "";
    if (humanSelection === "Rock") {
        if (computerSelection === "Rock") {
          result = "Tie.";
        } else if (computerSelection === "Paper") {
          result = "You Lost! try again.";
        } else {
          result = "You won!";
        }
      } else if (humanSelection === "Paper") {
        if (computerSelection === "Rock") {
          result = "You Won!";
        } else if (computerSelection === "Paper") {
          result = "Tie.";
        } else {
          result = "You Lost! try again.";
        }
      } else if (humanSelection === "Scissors") {
        if (computerSelection === "Rock") {
          result = "You Lost! try again.";
        } else if (computerSelection === "Paper") {
          result = "You Won!";
        } else {
          result = "Tie.";
        }
      }
      return console.log(
        "Human: " + humanSelection + "\nComputer: " + computerSelection + "\n" + result
      );
    }

    function playGame() {
      for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
      }
    }

    playGame();
