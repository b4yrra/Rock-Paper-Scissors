const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const playerPoint = document.getElementById("player");
const botPoint = document.getElementById("bot");
const tiePoint = document.getElementById("tie");

let player = 0;
let bot = 0;
let tie = 0;

const turn = (choice) => {
  const computerChoice = computerChoicer();
  console.log(choice, computerChoice);
  winnerCheck(choice, computerChoice);
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

const winnerCheck = (choice, computerChoice) => {
  if (choice === "rock" && computerChoice === "scissors") {
    player++;
  }

  if (choice === "scissor" && computerChoice === "paper") {
    player++;
  }

  if (choice === "paper" && computerChoice === "rock") {
    player++;
  }

  if (choice === "rock" && computerChoice === "paper") {
    bot++;
  }

  if (choice === "paper" && computerChoice === "scissors") {
    bot++;
  }

  if (choice === "scissor" && computerChoice === "rock") {
    bot++;
  }

  if (choice === "rock" && computerChoice === "rock") {
    tie++;
  }

  if (choice === "paper" && computerChoice === "paper") {
    tie++;
  }

  if (choice === "scissor" && computerChoice === "scissors") {
    tie++;
  }

  playerPoint.textContent = `Player Wins : ${player}`;
  botPoint.textContent = `Bot Wins : ${bot}`;
  tiePoint.textContent = `Tie : ${tie}`;
};
