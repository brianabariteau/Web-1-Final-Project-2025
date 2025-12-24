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
const startButton = $("<button>").addClass("Start-Button");
const buttonText = $("<p>").text("Single Player");

$(startButton).on("click", () => {
  window.location.href = "./features/mode-selection/mode-selection.html";
});

$(startButton).append(buttonText);

$(grouping).append(title, startButton);
$("body").append(background, grouping);
