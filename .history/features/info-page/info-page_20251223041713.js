"use strict";

import { fetchCharacters } from "../../services/character-api.js";
let mode = localStorage.getItem("mode");
let player1Character = JSON.parse(localStorage.getItem("player1Character"));
let player2Character = JSON.parse(localStorage.getItem("player2Character"));

console.log(player1Character);
console.log(mode);

let currentIndex = 0;
let characters = [];

// * Functions
function updateInfoDisplay() {
  if (!Array.isArray(characters) || characters.length === 0) return;

  const currentCharacter = characters[currentIndex];

  $(characterIcon).html(renderCharactersIcon(currentCharacter));
  $(mainInfo).html(renderCharactersInfo(currentCharacter));
  $(extraInfo).html(renderCharactersExtraInfo(currentCharacter));
}

async function loadCharacters() {
  if (mode === "single player") {
    characters.push(player1Character);
  } else if (mode === "multiplayer") {
    characters.push(player1Character, player2Character);
  }

  updateInfoDisplay();
}

console.log(characters);

function renderCharactersInfo(character) {
  let powersList = "";

  if (Array.isArray(character.powers) && character.powers.length > 0) {
    for (const power of character.powers) {
      powersList += `<li>${power}</li>`;
    }
  } else {
    powersList = `<li>No Powers</li>`;
  }

  return `
    <div class="character">
      <div class="inner-character">
        <h2>${character.tier} - ${character.tierName}</h2>
        <h3>Stats:</h3>
        <p>HP: ${character.stats.hp}</p>
        <p>Attack: ${character.stats.attack}</p>
        <p>Defense: ${character.stats.defense}</p>
        <p>Speed: ${character.stats.speed}</p>
        <p>Power: ${character.stats.power}</p>
        <p>Resilience: ${character.stats.resilience}</p>
        <p>Stamina: ${character.stats.stamina}</p>
        <p>Domain Mastery - ${character.stats.domainMastery}: ${character.stats.masteryDesc}</p>
        <p>Special Trait - ${character.stats.specialTrait}: ${character.stats.traitDesc}</p>
      </div>
    </div>
  `;
}

function renderCharactersExtraInfo(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <h2>Extra Info:</h2>
        <p>Category: ${character.category}</p>
        <p>Symbols: ${character.symbols}</p>
        <p>Origin: ${character.origin}</p>
        <p>Abode: ${character.abode}</p>
        <p>Powers: ${character.powers}</p>
        <p>Stories: ${character.stories}</p>
        <h3>Family:</h3>
        <p>Parent(s): ${character.parents}</p>
        <p>Sibling(s): ${character.siblings}</p>
        <p>Spouse: ${character.spouse}</p>
      </div>
    </div>
  `;
}

function renderCharactersIcon(character) {
  return `
    <div class="character">
      <div class="inner-character">
        <img class="character-img" src="${character.imgSrc}" alt="${character.name}"/>
        <h1>${character.name}</h1>
        <h2>${character.description}</h2>
      </div>
    </div>
  `;
}

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "../character-selection/assets/parchment-background.png")
  .attr("alt", "Background");

// * Character Icon Box
const characterIcon = $("<div>").addClass("character-icon-box");

// * Main Info Box
const mainInfo = $("<div>").addClass("main-info-box");

// * Extra Info Box
const extraInfo = $("<div>").addClass("extra-info-box");

// * Scroll Buttons
const scrollButtons = $("<div>").addClass("scroll-buttons");

if (mode === "multiplayer") {
  // * Left Arrow
  const leftArrow = $("<button>").addClass("left-arrow");
  const leftArrowImg = $("<img>")
    .addClass("arrowImg")
    .attr("src", "../character-selection/assets/left-arrow.png")
    .attr("alt", "Left Arrow");

  $(leftArrow).on("click", () => {
    currentIndex = 0;
    updateAvatarsDisplay();
  });
  $(leftArrow).append(leftArrowImg);

  // * Right Arrow
  const rightArrow = $("<button>").addClass("right-arrow");
  const rightArrowImg = $("<img>")
    .addClass("arrowImg")
    .attr("src", "../character-selection/assets/right-arrow.png")
    .attr("alt", "Right Arrow");

  $(rightArrow).on("click", () => {
    currentIndex = 1;
    updateAvatarsDisplay();
  });
  $(rightArrow).append(rightArrowImg);

  $(scrollButtons).append(leftArrow, rightArrow);
}

if (mode === "multiplayer") {
  $("body").append(
    background,
    characterIcon,
    mainInfo,
    extraInfo,
    scrollButtons
  );
} else if (mode === "single player") {
  $("body").append(background, characterIcon, mainInfo, extraInfo);
}

loadCharacters();
