// TODO: Redo with JQuery

const bodyElement = document.querySelector("body");

//Title
const title = document.createElement("h1");
title.textContent = "Bake or be Baked";
bodyElement.appendChild(title);

//All Players
const allPlayers = document.createElement("div");
allPlayers.classList.add("all-players");

//Player 1
const player1Div = document.createElement("div");
player1Div.classList.add("players");

//Player 1- Title
const player1 = document.createElement("h2");
player1.textContent = "Player 1";
player1Div.appendChild(player1);
allPlayers.appendChild(player1Div);

//Player 1- Total Cookies
const totalCookiesPlayer1 = document.createElement("p");
totalCookiesPlayer1.textContent = "Total Cookies: ";
player1Div.appendChild(totalCookiesPlayer1);

//Player 1- Healthbar
const healthbarPlayer1 = document.createElement("div");
healthbarPlayer1.classList.add("healthbar");
player1Div.appendChild(healthbarPlayer1);

const healthPlayer1 = document.createElement("div");
healthPlayer1.classList.add("health");
healthbarPlayer1.appendChild(healthPlayer1);

//Player 1- Actions
const actionsPlayer1 = document.createElement("div");
actionsPlayer1.classList.add("actions");
player1Div.appendChild(actionsPlayer1);

const bakePlayer1 = document.createElement("button");
bakePlayer1.textContent = "Bake";
bakePlayer1.classList.add("bake");
actionsPlayer1.appendChild(bakePlayer1);

const smackPlayer1 = document.createElement("button");
smackPlayer1.textContent = "Smack";
smackPlayer1.classList.add("smack");
actionsPlayer1.appendChild(smackPlayer1);

const consumePlayer1 = document.createElement("button");
consumePlayer1.textContent = "Consume";
consumePlayer1.classList.add("consume");
actionsPlayer1.appendChild(consumePlayer1);

//Player 2
const player2Div = document.createElement("div");
player2Div.classList.add("players");

//Player 2- Title
const player2 = document.createElement("h2");
player2.textContent = "Player 2";
player2Div.appendChild(player2);
allPlayers.appendChild(player2Div);

//Player 2- Total Cookies
const totalCookiesPlayer2 = document.createElement("p");
totalCookiesPlayer2.textContent = "Total Cookies: ";
player2Div.appendChild(totalCookiesPlayer2);

//Player 2- Healthbar
const healthbarPlayer2 = document.createElement("div");
healthbarPlayer2.classList.add("healthbar");
player2Div.appendChild(healthbarPlayer2);

const healthPlayer2 = document.createElement("div");
healthPlayer2.classList.add("health");
healthbarPlayer2.appendChild(healthPlayer2);

//Player 2- Actions
const actionsPlayer2 = document.createElement("div");
actionsPlayer2.classList.add("actions");
player2Div.appendChild(actionsPlayer2);

const bakePlayer2 = document.createElement("button");
bakePlayer2.textContent = "Bake";
bakePlayer2.classList.add("bake");
actionsPlayer2.appendChild(bakePlayer2);

const smackPlayer2 = document.createElement("button");
smackPlayer2.textContent = "Smack";
smackPlayer2.classList.add("smack");
actionsPlayer2.appendChild(smackPlayer2);

const consumePlayer2 = document.createElement("button");
consumePlayer2.textContent = "Consume";
consumePlayer2.classList.add("consume");
actionsPlayer2.appendChild(consumePlayer2);

const backButton = document.createElement("button");
backButton.textContent = "Back to Character Selection";
backButton.classList.add("character-selection-button");
bodyElement.appendChild(backButton);

bodyElement.appendChild(allPlayers);

import { PLAYER_ONE, PLAYER_TWO } from "../../constants/player.js";

//player information
healthPlayer1.style.width = `${PLAYER_ONE.hp}%`;
totalCookiesPlayer1.textContent = `Total Cookies: ${PLAYER_ONE.totalScore}`;
player1.textContent = `Player 1: ${PLAYER_ONE.name}`;

const Player2 = document.querySelectorAll(".player");
healthPlayer2.style.width = `${PLAYER_TWO.hp}%`;
totalCookiesPlayer2.textContent = `Total Cookies: ${PLAYER_TWO.totalScore}`;
player2.textContent = `Player 2: ${PLAYER_TWO.name}`;

//Bake some cookies- total cookies score goes up
bakePlayer1.addEventListener("click", () => {
  bake(PLAYER_ONE, totalCookiesPlayer1);
});

bakePlayer2.addEventListener("click", () => {
  bake(PLAYER_TWO, totalCookiesPlayer2);
});

//Smack players- other player loses damage
smackPlayer1.addEventListener("click", () => {
  smack(PLAYER_TWO, healthPlayer2);
});

smackPlayer2.addEventListener("click", () => {
  smack(PLAYER_ONE, healthPlayer1);
});

//Consume cookies- regain health
consumePlayer1.addEventListener("click", () => {
  consume(PLAYER_ONE, healthPlayer1, totalCookiesPlayer1);
});

consumePlayer2.addEventListener("click", () => {
  consume(PLAYER_TWO, healthPlayer2, totalCookiesPlayer2);
});

backButton.addEventListener("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

//display the stats
function displayStats(player, totalCookies, name, healthbar, playerNum) {
  totalCookies.textContent = `Total Cookies: ${player.totalScore}`;
  healthbar.style.width = `${player.hp}%`;
  name.textContent = `Player ${playerNum}: ${name}`;
}

//bake cookies to add to score
function bake(player, totalCookies) {
  player.totalScore += 4;
  totalCookies.textContent = `Total Cookies: ${player.totalScore}`;
  checkGameOver();
}

//smack players to deal damage
function smack(player, healthbar) {
  player.hp -= 5;
  healthbar.style.width = `${player.hp}%`;
  checkGameOver();
}

//consume cookies to regain health
function consume(player, healthbar, totalCookies) {
  if (player.hp >= player.maxhp) return;
  if (player.totalScore == 0) return;

  player.totalScore--;
  player.hp += 2;

  healthbar.style.width = `${player.hp}%`;
  totalCookies.textContent = `Total Cookies: ${player.totalScore}`;
  checkGameOver();
}

//gameover screen
function gameOver(player) {
  document.body.replaceChildren();

  const gameOver = document.createElement("div");
  gameOver.classList.add("game-over");

  const gameOverMessage = document.createElement("h2");
  gameOverMessage.textContent = "Game Over!";

  const gameWinner = document.createElement("h1");
  gameWinner.textContent = `${player.name} wins~`;

  gameOver.appendChild(gameOverMessage);
  gameOver.appendChild(gameWinner);

  document.body.appendChild(gameOver);
}

//check if the game is over
function checkGameOver() {
  if (PLAYER_ONE.hp == 0) {
    gameOver(PLAYER_TWO);
  }
  if (PLAYER_TWO.hp == 0) {
    gameOver(PLAYER_ONE);
  }
  if (
    PLAYER_TWO.totalScore > PLAYER_ONE.totalScore * 3 &&
    PLAYER_ONE.totalScore != 0 &&
    PLAYER_TWO.totalScore != 0
  ) {
    gameOver(PLAYER_TWO);
  }
  if (
    PLAYER_ONE.totalScore > PLAYER_TWO.totalScore * 3 &&
    PLAYER_ONE.totalScore != 0 &&
    PLAYER_TWO.totalScore != 0
  ) {
    gameOver(PLAYER_ONE);
  }
}
