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

// ? Movesets
function renderCharacterMoves(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <button>${character.name}</button> MOVE 1
        <button>${character.hp}</button> MOVE 2
        <button>${character.hp}</button> MOVE 3
        <button>${character.hp}</button> MOVE 4
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
