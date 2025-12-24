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
