// document.addEventListener("DOMContentLoaded", function () { *** });
var player1 = document.querySelectorAll(".container_grid img")[0];
var player2 = document.querySelectorAll(".container_grid img")[1];
var theWinner = document.querySelector("h1");
var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = Math.floor(Math.random() * 6) + 1;

player1.setAttribute("src", `./images/dice${randomDice1}.png`);
player2.setAttribute("src", `./images/dice${randomDice2}.png`);

if (randomDice1 > randomDice2) {
  theWinner.textContent = "Player 1 Win!";
} else if (randomDice1 < randomDice2) {
  theWinner.textContent = "Player 2 Win!";
} else if (randomDice1 === randomDice2) {
  theWinner.textContent = "Draw!";
}
