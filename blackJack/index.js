// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cardArray = [];
// cardArray.push(firstCard);
// cardArray.push(secondCard);
//let sum = firstCard + secondCard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("paragraph");
let result = document.querySelector("#result");
let cardEl = document.querySelector("#cards");
let playerEl = document.querySelector("#player-el");

function startGame() {
  isAlive = !isAlive;
  if (!hasBlackJack) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardArray.push(firstCard);
    cardArray.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
  } else {
    return;
  }
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

  //   cardEl.textContent = `Cards:`;
  //     for (let i = 0; i < cardArray.length; i++) {
  //     cardEl.textContent += cardArray[i] + " ";
  //   }
  displayCards(cardArray);
  result.textContent = "Sum:" + sum;
}

function newCard() {
  //   cardEl.textContent = `Cards: ${cardArray[0]} ${cardArray[1]} ${cardArray[2]}`;
  //   cardEl.textContent = "Cards:";
  //   for (let i = 0; i < cardArray.length; i++) {
  //     cardEl.textContent += cardArray[i] + " ";
  //   }

  if (isAlive && !hasBlackJack) {
    let thirdCard = getRandomCard();
    cardArray.push(thirdCard);
    sum += thirdCard;
    displayCards(cardArray);
    result.textContent = "Sum: " + sum;
    renderGame();
  }
}

function displayCards(array) {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < array.length; i++) {
    //cardEl.textContent = cardEl.textContent + array[i] + " ";
    cardEl.textContent += array[i] + " ";
  }
}

//get random num
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

let player = { name: "Smith", chips: 145 };

playerEl.textContent = player.name + ": $" + player.chips;

let hands = ["rock", "papper", "cissor"];

const getHand = () => {
  let randon = Math.floor(Math.random() * 3);

  return hands[randon];
};

console.log(getHand());

let oranges = document.querySelector("#orange-shelf");
let apples = document.querySelector("#apple-shelf");
let fruits = ["🍎 ", "🍊 ", "🍎 ", "🍊 ", "🍎 "];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == "🍎 ") {
    apples.textContent += fruits[i] + " , ";
  } else {
    oranges.textContent += fruits[i] + " , ";
  }
}
