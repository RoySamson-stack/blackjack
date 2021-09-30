let firstCard = 6
let secondCard = 9
let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";
var messageEl = document.getElementById('title_message')
var sumEl = document.getElementById("sum_el");
var cardEl = document.getElementById("card-el");

function startGame() {
  cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }
messageEl.textContent = message
}