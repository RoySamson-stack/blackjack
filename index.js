let cards = []
let hasBlackJack = false;
let sum = 0;
let isAlive = false;
let message = "";
var messageEl = document.getElementById('title_message')
var sumEl = document.getElementById("sum_el");
var cardEl = document.getElementById("card-el");

let player = {
  name : "Per",
  chips: 145
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) +  1;
  // return randomNumber
  if(randomNumber >  10){
    return 10
  }else if(randomNumber === 1){
    return 11
  }else{
    return randomNumber
  }
} 
function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
  if(isAlive === true && hasBlackJack === false){
  var card = getRandomCard();
  sum += card
  cards.push(card);
  renderGame()
  }

}