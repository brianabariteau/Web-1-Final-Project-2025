"use strict";

import { fetchCharacters } from "../../services/character-api.js";
import { sortCharacters } from "../../utils/character-sorters.js";
let singlePlayer = localStorage.getItem("single player");
let multiPlayer = localStorage.getItem("multiplayer");

let characters = [];
let currentIndex = 0;

// * Player selection stuff
let selectedPlayer = null;

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/parchment-background.png")
  .attr("alt", "Background");

// * Characters
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

// * All Characters
const characterRow = $("<div>").addClass("character-row");

// * Arrows + Avatars Div
const switchCharacters = $("<div>").addClass("switch-characters");

// * Avatar 1
const avatar1 = $("<button>").addClass("avatar1");

$(avatar1).on("click", () => {
  const first = characters[currentIndex];
  selectCharacter(avatar1, first);
});

// * Avatar 2
const avatar2 = $("<button>").addClass("avatar2");

$(avatar2).on("click", () => {
  const second = characters[(currentIndex + 1) % characters.length];
  selectCharacter(avatar2, second);
});

// * Avatar 3
const avatar3 = $("<button>").addClass("avatar3");

$(avatar3).on("click", () => {
  const third = characters[(currentIndex + 2) % characters.length];
  selectCharacter(avatar3, third);
});

$(characterRow).append(avatar1, avatar2, avatar3);

function updateAvatarsDisplay() {
  if (!Array.isArray(characters) || characters.length === 0) return;

  const second = characters[(currentIndex + 1) % characters.length];
  const first = characters[currentIndex];
  const third = characters[(currentIndex + 2) % characters.length];

  $(avatar1).html(renderCharacters(first));
  $(avatar2).html(renderCharacters(second));
  $(avatar3).html(renderCharacters(third));
}

async function loadCharacters() {
  characters = await fetchCharacters();
  characters = sortCharacters(characters);
  currentIndex = 0;
  updateAvatarsDisplay();
}

function selectCharacter(avatarElement, character) {
  const tierNumber = character.tier.split(" ")[1];

  $(".avatar1, .avatar2, .avatar3").removeClass(
    "selected tier-0 tier-1 tier-2 tier-3 tier-4 tier-5"
  );
  $(avatarElement).addClass("selected").addClass(`tier-${tierNumber}`);

  selectedPlayer = character;
}

// * Text Box + Buttons
const bottomPanel = $("<div>").addClass("bottom-panel");
const textBox = $("<p>").addClass("box").text("Please choose a character.");

if (singlePlayer === "true") {
  textBox.text("Player 1, please choose one character and confirm.");
}

if (multiPlayer === "true") {
  textBox.text("Player 1 and 2, please choose two characters and confirm.");
}

console.log(singlePlayer, typeof singlePlayer);
console.log(multiPlayer, typeof multiPlayer);

// * Buttons
const leftButton = $("<div>").addClass("left-button");
const rightButton = $("<div>").addClass("right-button");

// * Confirm Button
const confirmButton = $("<button>").addClass("confirm");
const confirmText = $("<p>").text("Confirm");

$(confirmButton).append(confirmText);
$(confirmButton).on("click", () => {
  if (!selectedPlayer) {
    alert("Please select a character first!");
    return;
  }

  localStorage.setItem("selectedCharacter", JSON.stringify(selectedPlayer));

  window.location.href = "../main-menu/main-menu.html";
});

// * Cancel Button
const cancelButton = $("<button>").addClass("cancel");
const cancelText = $("<p>").text("Cancel");

$(cancelButton).append(cancelText);
$(cancelButton).on("click", () => {
  if (selectedPlayer === null) {
    window.location.href = "../main-menu/index.html";
  }

  selectedPlayer = null;
  $(".avatar1, .avatar2, .avatar3").removeClass("selected");
});

leftButton.append(confirmButton);
$(rightButton).append(cancelButton);
$(bottomPanel).append(confirmButton, textBox, cancelButton);

// * Scroll Arrows
const scrollArrows = $("<div>").addClass("scroll-arrows");

// * Left Arrow
const leftArrow = $("<button>").addClass("left-arrow");
const leftArrowImg = $("<img>")
  .addClass("arrowImg")
  .attr("src", "./assets/left-arrow.png")
  .attr("alt", "Left Arrow");

$(leftArrow).on("click", () => {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  selectedPlayer = null;
  $(".avatar1, .avatar2, .avatar3").removeClass("selected");
  updateAvatarsDisplay();
});
$(leftArrow).append(leftArrowImg);

// * Right Arrow
const rightArrow = $("<button>").addClass("right-arrow");
const rightArrowImg = $("<img>")
  .addClass("arrowImg")
  .attr("src", "./assets/right-arrow.png")
  .attr("alt", "Right Arrow");

$(rightArrow).on("click", () => {
  currentIndex = (currentIndex + 1) % characters.length;
  selectedPlayer = null;
  $(".avatar1, .avatar2, .avatar3").removeClass("selected");
  updateAvatarsDisplay();
});
$(rightArrow).append(rightArrowImg);

$(scrollArrows).append(leftArrow, rightArrow);
$(switchCharacters).append(characterRow, scrollArrows);

$("body").append(background, switchCharacters, bottomPanel);

loadCharacters();
