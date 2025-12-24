"use strict";

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
function renderCharactersIcon(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <h1>${character.name}</h1>
        <h2>${character.hp}</h2>
      </div>
    </div>
  `;
}

// ? Movesets

// ? Abilities

// * Player 2
// ? Character Icon
const player2Icon = $("<img>").addClass("player-2-icon");

// ! Battle Buttons + Progress
const player2battle = $("<div>").addClass("player2-battle");

// ? Name + Healthbar

// ? Movesets

// ? Abilities

$("body").append(background);
