let firstCard = 6
let secondCard = 9
let hasBlackJack = false;
let sum = firstCard + secondCard;

if(sum <= 20){
  console.log("Do you want to draw a new card?")
}else if(sum === 21){
  console.log("WoHoo! You've got Blackjack!")
  hasBlackJack = true
}else{
  console.log("You're out of the game")
}

