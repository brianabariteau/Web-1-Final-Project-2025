"use strict";

import { fetchCharacters } from "../../services/character-api.js";
let mode = localStorage.getItem("mode");

let player1Character;
let player2Character;

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
}

$("body").append(background, characterIcon, mainInfo, extraInfo, scrollButtons);
