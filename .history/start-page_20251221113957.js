"use strict";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/backgrounds/landing-page-background.png")
  .attr("alt", "Background");

// * Title
const title = $("<h1>").addClass("Title").text("MythoBattle");

// * Start Button
const startButton = $("<button>").addClass("Start-Button");

$("body").append(background, title, startButton);
