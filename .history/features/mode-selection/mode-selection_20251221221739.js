"use strict";

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "../../assets/backgrounds/landing-page-background.png")
  .attr("alt", "Background");

// * Grouping
const grouping = $("<div>").addClass("group");

// * Title
const title = $("<h1>").addClass("Title").text("Please choose a gamemode: ");

// * Single Player Button
const singlePlayerButton = $("<button>").addClass("single-player-button");
const singlePlayerText = $("<p>").text("Single Player");

$(singlePlayerButton).on("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

$(singlePlayerButton).append(singlePlayerText);

// * Multi-Player Button
const multiPlayerButton = $("<button>").addClass("multi-player-button");
const multiPlayerText = $("<p>").text("Multiplayer (2 Players)");

$(multiPlayerButton).on("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

$(multiPlayerButton).append(multiPlayerText);

$(grouping).append(title, singlePlayerButton, multiPlayerButton);
$("body").append(background, grouping);
