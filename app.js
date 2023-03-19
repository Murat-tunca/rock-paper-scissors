const computerChoiseDisplay = document.getElementById("computer-choise");
const userChoiseDisplay = document.getElementById("user-choise");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiseDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
  if (randomNumber === 1) {
    computerChoice = "tas";
  }
  if (randomNumber === 2) {
    computerChoice = "kagit";
  }
  if (randomNumber === 3) {
    computerChoice = "makas";
  }
  computerChoiseDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Berabere!";
  }
  if (computerChoice === "tas" && userChoice === "makas") {
    result = "Malesef .. Kaybettiniz.";
  }
  if (computerChoice === "tas" && userChoice === "kagit") {
    result = "Tebrikler... Kazandiniz.";
  }
  if (computerChoice === "kagit" && userChoice === "makas") {
    result = "Tebrikler... Kazandiniz.";
  }
  if (computerChoice === "kagit" && userChoice === "tas") {
    result = "Malesef .. Kaybettiniz.";
  }
  if (computerChoice === "makas" && userChoice === "kagit") {
    result = "Malesef .. Kaybettiniz.";
  }
  if (computerChoice === "makas" && userChoice === "tas") {
    result = "Tebrikler... Kazandiniz.";
  }
  resultDisplay.innerHTML = result;
}
// iyi oyunlar :))
