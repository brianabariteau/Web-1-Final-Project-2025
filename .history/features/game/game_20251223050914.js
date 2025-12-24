"use strict";

// * Functions
function renderCharacterHealth(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <h1>${character.name}</h1> NAME
        <h2>${character.hp}</h2> HEALTH
      </div>
    </div>
  `;
}

function renderCharacterAbilities(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <p>${character.name}</p> ABILITY 1
        <p>${character.hp}</p> ABILITY 2
      </div>
    </div>
  `;
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

// * Player 2
// ? Character Icon
const player2Icon = $("<img>").addClass("player-2-icon");

// ! Battle Buttons + Progress
const player2battle = $("<div>").addClass("player2-battle");

// ? Name + Healthbar
const player2Name = $("<div>").addClass("player2-name");
const player2Health = $("<div>").addClass("player2-health");

// ? Movesets
const player2Moves = $("<div>").addClass("player1-moves");
const player2Move1 = $("<button>").addClass("moves");
const player2Move2 = $("<button>").addClass("moves");
const player2Move3 = $("<button>").addClass("moves");
const player2Move4 = $("<button>").addClass("moves");

// ? Abilities
const player2Abilities = $("<div>").addClass("player2-abilities");

$(player1battle).append();

$("body").append(background);
