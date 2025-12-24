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
const buttonText = $("<p>").text("Start Game");
const avatar1Img = $("<img>")
  .addClass("avatar-1-img")
  .attr("src", "")
  .attr("alt", "Hermes");
const avatar2Img = $("<img>")
  .addClass("avatar-2-img")
  .attr("src", "")
  .attr("alt", "Zeus");

$("body").append(background, title, startButton);
