let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function restargame(){
    console.log("asda");
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
    document.querySelector(".result > p").innerHTML = "";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertSpanish(choice){
    if (choice === "rock") return "Piedra";
    if (choice === "paper") return "Papel";
    return "Tijera";
}

function win(userChoice, computerChoice){
    const smallUserWord = "Tú".fontsize(3).sub();
    const smallCompWord = "Ai".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertSpanish(userChoice) + smallUserWord +" le ganaste a " + convertSpanish(computerChoice) + smallCompWord + ". Tú ganas!"; 
    userChoice_div.classList.add("green-glow");

    setTimeout(() => {
        userChoice_div.classList.remove("green-glow");
    }, 700);
}

function lose(userChoice, computerChoice){
    const smallUserWord = "Tú".fontsize(3).sub();
    const smallCompWord = "Ai".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertSpanish(userChoice) + smallUserWord +" pierdes contra una " + convertSpanish(computerChoice) + smallCompWord + ". Tú pierdes!"; 
    userChoice_div.classList.add("red-glow");

    setTimeout(() => {
        userChoice_div.classList.remove("red-glow");
    }, 700);
}

function draw(userChoice, computerChoice){    
    const smallUserWord = "Tú".fontsize(3).sub();
    const smallCompWord = "Ai".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertSpanish(userChoice) + smallUserWord +" empatas contra una " + convertSpanish(computerChoice) + smallCompWord + ". Empate!"; 
    userChoice_div.classList.add("gray-glow");

    setTimeout(() => {
        userChoice_div.classList.remove("gray-glow");
    }, 700);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        win(userChoice, computerChoice);      
    break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose(userChoice, computerChoice);        
    break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
        draw(userChoice, computerChoice);
    break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
  });

  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}

main();
