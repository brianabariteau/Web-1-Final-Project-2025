"use strict";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/backgrounds/landing-page-background.png")
  .attr("alt", "Background");

// * Title
const title = $("<h1>").addClass("Title");

// * Start Button

$("body").append(background);
