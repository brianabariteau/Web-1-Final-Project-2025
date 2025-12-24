"use strict";

import { fetchCharacters } from "../../services/character-api.js";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "../character-selection/assets/parchment-box.png")
  .attr("alt", "Background");

$("body").append(background);
