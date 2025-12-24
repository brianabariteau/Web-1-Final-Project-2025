"use strict";

import { CHARACTER_MOVES } from "../../constants/character-movesets.js";
let mode = localStorage.getItem("mode");
let player1Character = JSON.parse(localStorage.getItem("player1Character"));
let player2Character = JSON.parse(localStorage.getItem("player2Character"));

let characters = [];

console.log(characters);

// * Functions
function updateGameDisplay() {
  if (!Array.isArray(characters) || characters.length === 0) return;

  // ? Player 1
  player1Name.text(player1Name.name);
  player1Move1.text(CHARACTER_MOVES[player1Name].move1name);
  player1Move2.text(CHARACTER_MOVES[player1Name].move2name);
  player1Move3.text(CHARACTER_MOVES[player1Name].move3name);
  player1Move4.text(CHARACTER_MOVES[player1Name].move4name);
  player1ability1.text(CHARACTER_MOVES[player1Name].ability1name);
  player1ability2.text(CHARACTER_MOVES[player1Name].ability2name);

  // ? Player 2
  player2Name.text(player2Name.name);
  player2Move1.text(CHARACTER_MOVES[player2Name].move1name);
  player2Move2.text(CHARACTER_MOVES[player2Name].move2name);
  player2Move3.text(CHARACTER_MOVES[player2Name].move3name);
  player2Move4.text(CHARACTER_MOVES[player2Name].move4name);
  player2ability1.text(CHARACTER_MOVES[player2Name].ability1name);
  player2ability2.text(CHARACTER_MOVES[player2Name].ability2name);
}

async function loadCharacters() {
  characters.push(player1Character, player2Character);
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
const player1Health = $("<div>").addClass("player1-health");

$(player1Name).append(player1Health);

// ? Movesets
const player1Moves = $("<div>").addClass("player1-moves");
const player1Move1 = $("<button>").addClass("moves");
const player1Move2 = $("<button>").addClass("moves");
const player1Move3 = $("<button>").addClass("moves");
const player1Move4 = $("<button>").addClass("moves");

$(player1Moves).append(player1Move1, player1Move2, player1Move3, player1Move4);

// ? Abilities
const player1Abilities = $("<div>").addClass("player1-abilities");
const player1ability1 = $("<button>").addClass("player1-ability1");
const player1ability2 = $("<button>").addClass("player1-ability2");
$(player1Abilities).append(player1ability1, player1ability2);

$(player1battle).append(player1Abilities, player1Name, player1Moves);

// * Player 2
// ? Character Icon
const player2Icon = $("<img>").addClass("player-2-icon");

// ! Battle Buttons + Progress
const player2battle = $("<div>").addClass("player2-battle");

// ? Name + Healthbar
const player2Name = $("<div>").addClass("player2-name");
const player2Health = $("<div>").addClass("player2-health");

$(player2Name).append(player2Health);

// ? Movesets
const player2Moves = $("<div>").addClass("player1-moves");
const player2Move1 = $("<button>").addClass("moves");
const player2Move2 = $("<button>").addClass("moves");
const player2Move3 = $("<button>").addClass("moves");
const player2Move4 = $("<button>").addClass("moves");

$(player2Moves).append(player2Move1, player2Move2, player2Move3, player2Move4);

// ? Abilities
const player2Abilities = $("<div>").addClass("player2-abilities");
const player2ability1 = $("<button>").addClass("player2-ability1");
const player2ability2 = $("<button>").addClass("player2-ability2");
$(player2Abilities).append(player2ability1, player2ability2);

$(player2battle).append(player2Abilities, player2Name, player2Moves);

$("body").append(
  background,
  player1Icon,
  player2Icon,
  player1battle,
  player2battle
);

loadCharacters();
