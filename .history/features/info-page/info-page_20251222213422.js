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

// * Extra Info Box

// * Scroll Buttons

$("body").append(background);
