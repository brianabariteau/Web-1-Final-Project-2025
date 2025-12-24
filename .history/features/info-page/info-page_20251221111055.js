"use strict";
// TODO: Redo with JQuery

const selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));

document.querySelector(".player-username").textContent = selectedCharacter.name;
document.querySelector(".player-avatar").src = selectedCharacter.imgSrc; // TODO: move character folder from character-selection into public
document.querySelector(
  ".player-resilience-stat"
).textContent = `Power: ${selectedCharacter.stats.power}`;
document.querySelector(
  ".player-exhaustion-stat"
).textContent = `Stamina: ${selectedCharacter.stats.stamina}`;
document.querySelector(
  ".player-defense-stat"
).textContent = `Defense: ${selectedCharacter.stats.defense}`;

document.querySelector(".npc-avatar").src = "./assets/avatar.png";

const npcLines = [
  "skill issue",
  "u suck",
  "f in the chat",
  "try harder",
  "l bozo",
];

const randomLine = npcLines[Math.floor(Math.random() * npcLines.length)];
document.querySelector(".npc-text").textContent = randomLine;

const bodyElement = document.querySelector("body");

const backButton = document.createElement("button");
backButton.textContent = "Back to Character Selection";
backButton.classList.add("character-selection-button");
bodyElement.appendChild(backButton);

backButton.addEventListener("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

console.log(selectedCharacter);
