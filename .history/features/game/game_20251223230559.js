"use strict";

import { CHARACTER_MOVES } from "../../constants/character-movesets.js";
import { fetchCharacters } from "../../services/character-api.js";

let mode = localStorage.getItem("mode");
let player1Character = JSON.parse(localStorage.getItem("player1Character"));
let player2Character = JSON.parse(localStorage.getItem("player2Character"));

if (mode === "single player") {
  let characters = [];

  characters = await fetchCharacters();

  player2Character = characters[Math.floor(Math.random() * characters.length)];
}

console.log(player1Character);
console.log(player2Character);

// * Functions
function updateGameDisplay() {
  if (!player1Character || !player2Character) return;

  // ? Player 1
  const player1 = player1Character.name;
  console.log(player1);

  player1Icon.attr("src", player1Character.imgSrc);

  player1NameText.text(player1);

  const p1HealthPercent =
    (player1Character.stats.currenthp / player1Character.maxhp) * 100;
  player1Health.css("--hp-width", p1HealthPercent + "%");
  player1Health.text(
    `${player1Character.stats.currenthp}/${player1Character.maxhp}`
  );

  player1Move1.text(CHARACTER_MOVES[player1].move1name);
  player1Move2.text(CHARACTER_MOVES[player1].move2name);
  player1Move3.text(CHARACTER_MOVES[player1].move3name);
  player1Move4.text(CHARACTER_MOVES[player1].move4name);

  player1ability1.text(CHARACTER_MOVES[player1].ability1name);
  player1ability2.text(CHARACTER_MOVES[player1].ability2name);

  // ? Player 2
  const player2 = player2Character.name;

  player2Icon.attr("src", player2Character.imgSrc);

  player2NameText.text(player2);
  player2Health.text(
    `${player2Character.stats.currenthp}/${player2Character.maxhp}`
  );

  player2Move1.text(CHARACTER_MOVES[player2].move1name);
  player2Move2.text(CHARACTER_MOVES[player2].move2name);
  player2Move3.text(CHARACTER_MOVES[player2].move3name);
  player2Move4.text(CHARACTER_MOVES[player2].move4name);

  player2ability1.text(CHARACTER_MOVES[player2].ability1name);
  player2ability2.text(CHARACTER_MOVES[player2].ability2name);
}

async function loadCharacters() {
  updateGameDisplay();
}

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/battle-background.png")
  .attr("alt", "Background");

// * Player 1
// ? Character Icon
const player1Icon = $("<img>").addClass("player1-icon");

// ! Battle Buttons + Progress
const player1battle = $("<div>").addClass("player1-battle");

// ? Name + Healthbar
const player1Name = $("<div>").addClass("player1-name");
const player1NameText = $("<div>").addClass("player1-name-text");
const player1Health = $("<div>").addClass("player1-health");

$(player1Name).append(player1NameText, player1Health);

// ? Movesets
const player1Moves = $("<div>").addClass("player1-moves");
const player1Move1 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player1Move2 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player1Move3 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player1Move4 = $("<button>")
  .addClass("moves")
  .on("click", () => {});

$(player1Moves).append(player1Move1, player1Move2, player1Move3, player1Move4);

// ? Abilities
const player1Abilities = $("<div>").addClass("player1-abilities");
const player1ability1 = $("<button>")
  .addClass("player1-ability1")
  .on("click", () => {});
const player1ability2 = $("<button>")
  .addClass("player1-ability2")
  .on("click", () => {});
$(player1Abilities).append(player1ability1, player1ability2);

$(player1battle).append(player1Abilities, player1Name, player1Moves);

// * Player 2
// ? Character Icon
const player2Icon = $("<img>").addClass("player-2-icon");

// ! Battle Buttons + Progress
const player2battle = $("<div>").addClass("player2-battle");

// ? Name + Healthbar
const player2Name = $("<div>").addClass("player2-name");
const player2NameText = $("<div>").addClass("player2-name-text");
const player2Health = $("<div>").addClass("player2-health");

$(player2Name).append(player2NameText, player2Health);

// ? Movesets
const player2Moves = $("<div>").addClass("player1-moves");
const player2Move1 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player2Move2 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player2Move3 = $("<button>")
  .addClass("moves")
  .on("click", () => {});
const player2Move4 = $("<button>")
  .addClass("moves")
  .on("click", () => {});

$(player2Moves).append(player2Move1, player2Move2, player2Move3, player2Move4);

// ? Abilities
const player2Abilities = $("<div>").addClass("player2-abilities");
const player2ability1 = $("<button>")
  .addClass("player2-ability1")
  .on("click", () => {});
const player2ability2 = $("<button>")
  .addClass("player2-ability2")
  .on("click", () => {});
$(player2Abilities).append(player2ability1, player2ability2);

$(player2battle).append(player2Abilities, player2Name, player2Moves);

// * Return to Main Menu Button
const returnButton = $("<button>")
  .addClass("return-button")
  .text("Return to Main Menu");

$(returnButton).on("click", () => {
  window.location.href = "../main-menu/main-menu.html";
});

$("body").append(
  background,
  player1Icon,
  player2Icon,
  player1battle,
  player2battle,
  returnButton
);

loadCharacters();
