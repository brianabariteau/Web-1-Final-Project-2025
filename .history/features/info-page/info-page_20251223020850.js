"use strict";

import { fetchCharacters } from "../../services/character-api.js";
let mode = localStorage.getItem("mode");

let player1Character;
let player2Character;

// * Functions
async function loadCharacters() {
  characters = await fetchCharacters();
  updateAvatarsDisplay();
}

function renderCharacters(character) {
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
        <img class="character-img" src="${character.imgSrc}" alt="${character.name}"/>
        <h3 class="stat" data-info="${character.tier} - ${character.tierName}">${character.name}</h3>
        <p>HP: ${character.stats.hp}</p>
        <p>Attack: ${character.stats.attack}</p>
        <p>Defense: ${character.stats.defense}</p>
        <p>Speed: ${character.stats.speed}</p>
        <p>Power: ${character.stats.power}</p>
        <p>Resilience: ${character.stats.resilience}</p>
        <p>Stamina: ${character.stats.stamina}</p>
        <p class="stat" data-info="${character.stats.masteryDesc}">Domain Mastery: ${character.stats.domainMastery}</p>
        <p class="stat" data-info="${character.stats.traitDesc}">Special Trait: ${character.stats.specialTrait}</p>
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

if (mode === "multiplayer") {
  const scrollButtons = $("<div>").addClass("scroll-buttons");

  // * Left Arrow
  const leftArrow = $("<button>").addClass("left-arrow");
  const leftArrowImg = $("<img>")
    .addClass("arrowImg")
    .attr("src", "./assets/left-arrow.png")
    .attr("alt", "Left Arrow");

  $(leftArrow).on("click", () => {});
  $(leftArrow).append(leftArrowImg);

  // * Right Arrow
  const rightArrow = $("<button>").addClass("right-arrow");
  const rightArrowImg = $("<img>")
    .addClass("arrowImg")
    .attr("src", "./assets/right-arrow.png")
    .attr("alt", "Right Arrow");

  $(rightArrow).on("click", () => {});
  $(rightArrow).append(rightArrowImg);

  $(scrollButtons).append(leftArrow, rightArrow);
}

$("body").append(background, characterIcon, mainInfo, extraInfo, scrollButtons);
