"use strict";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/backgrounds/landing-page-background.png")
  .attr("alt", "Background");

// * Title
const title = $("<title>").addClass("Title").text("MythoBattle");

// * Start Button

$("body").append(background, title);
