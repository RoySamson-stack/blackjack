let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
let message = "";
var messageEl = document.getElementById('title_message')
var sumEl = document.getElementById("sum_el");
var cardEl = document.getElementById("card-el");

function getRandomCard(){
  return Math.floor(Math.random() * 13) +  1;
} 
function startGame(){
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";

  for(let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " ";
  }
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

function newCard() {
  var card = getRandomCard();

  sum += card
  cards.push(card);
  renderGame()
}