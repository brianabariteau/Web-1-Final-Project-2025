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
const buttonText = $("<p>").text("Start");
const avatar1Img = $("<img>")
  .addClass("avatar-1-img")
  .attr("src", "./assets/characters/hermes.png")
  .attr("alt", "Hermes");
const avatar2Img = $("<img>")
  .addClass("avatar-2-img")
  .attr("src", "./assets/characters/zeus.png")
  .attr("alt", "Zeus");

$(startButton).append(avatar1Img, buttonText, avatar2Img);

$("body").append(background, title, startButton);
