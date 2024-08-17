let firstCard = 10;
let secondCard = 4;
let cardArray = [];
cardArray.push(firstCard);
cardArray.push(secondCard);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("paragraph");
let result = document.querySelector("#result");
let cardEl = document.querySelector("#cards");

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw new card?";
  } else if (sum == 21) {
    message = "Waoow! You've got Blackjack! Congrat";
    hasBlackJack = !hasBlackJack;
  } else {
    message = "Oops!, you're out of the game. Sorry!";
    isAlive = !isAlive;
  }

  messageEl.textContent = message;
  messageEl.style.color = "#016f32";
  messageEl.style.background = "white";
  //   for (let i = 0; i < cardArray.length; i++) {
  //     cardEl.textContent = `Cards: ${cardArray[i]}`;
  //   }

  cardEl.textContent = `Cards: ${cardArray[0]} ${cardArray[1]}`;
  result.textContent = "Sum:" + sum;
}

function newCard() {
  let thirdCard = 9;
  cardArray.push(thirdCard);
  sum += thirdCard;

  cardEl.textContent = `Cards: ${cardArray[0]} ${cardArray[1]} ${cardArray[2]}`;
  result.textContent = "Sum: " + sum;
  renderGame();
}
