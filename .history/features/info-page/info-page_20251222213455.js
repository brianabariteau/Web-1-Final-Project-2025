"use strict";

import { fetchCharacters } from "../../services/character-api.js";

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

$("body").append(background);
