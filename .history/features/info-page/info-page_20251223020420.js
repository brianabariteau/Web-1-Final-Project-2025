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
const scrollButtons = $("<div>").addClass("scroll-buttons");

$("body").append(background, characterIcon, mainInfo, extraInfo, scrollButtons);
