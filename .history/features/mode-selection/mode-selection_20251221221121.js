"use strict";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/backgrounds/landing-page-background.png")
  .attr("alt", "Background");

// * Grouping
const grouping = $("<div>").addClass("group");

// * Title
const title = $("<h1>").addClass("Title").text("MythoBattle");

// * Single Player Button
const singlePlayerButton = $("<button>").addClass("single-player-button");
const singlePlayerText = $("<p>").text("Single Player");

$(singlePlayerButton).on("click", () => {
  window.location.href =
    "./features/character-selection/character-selection.html";
});

$(singlePlayerButton).append(singlePlayerText);

// * Multi-Player Button
const startButton = $("<button>").addClass("Start-Button");
const buttonText = $("<p>").text("Single Player");

$(startButton).on("click", () => {
  window.location.href =
    "./features/character-selection/character-selection.html";
});

$(startButton).append(buttonText);

$(grouping).append(title, startButton);
$("body").append(background, grouping);
