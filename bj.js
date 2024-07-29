let firstCard;
let secondCard;

let arr = [firstCard, secondCard];
let sum = firstCard + secondCard;

let sumel = document.getElementById("sum-el");
let Cardel = document.getElementById("card-el");
let gameOver = false;
let startButton = document.getElementById("but");
let nextBtn = document.getElementById("new-crd");

function startGame() {
  if (gameOver) return;

  firstCard = Math.floor(Math.random() * 12) + 1;
  secondCard = Math.floor(Math.random() * 12) + 1;
  sum = firstCard + secondCard;

  render();
  startButton.disabled = true;
  nextBtn.disabled = false;
  gameOver = false;
}

function render() {
  sumel.textContent = "Sum: " + sum;
  Cardel.textContent = "Cards: " + firstCard + ", " + secondCard;
  checkIf();
}

function newCard() {
  if (gameOver) return;

  let newCard = Math.floor(Math.random() * 12) + 1;
  Cardel.textContent += ", " + newCard;

  sum += newCard;
  sumel.textContent = "Sum: " + sum;

  checkIf();
}

function checkIf() {
  if (sum === 21) {
    document.getElementById("sumResult").textContent =
      "You have got a BlackJack!!";
    startButton.disabled = false;
    gameOver = false;
    document.getElementById("but").textContent = "Start New Game?";
    nextBtn.disabled = true;
  } else if (sum <= 20) {
    document.getElementById("sumResult").textContent = "Wanna take a new card?";
  } else {
    document.getElementById("sumResult").textContent = "Better luck next time!";
    startButton.disabled = false;
    gameOver = false;
    document.getElementById("but").textContent = "Start New Game?";
    nextBtn.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startButton.disabled = false;
  nextBtn.disabled = true;
});
