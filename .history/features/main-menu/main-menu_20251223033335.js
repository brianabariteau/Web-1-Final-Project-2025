"use strict";

let mode = localStorage.getItem("mode");
let player1Character = localStorage.getItem("player1Character");
let player2Character = localStorage.getItem("player2Character");

// * --Map--
const entireMap = $("<div>").addClass("map");

// Image
const map = $("<img>")
  .addClass("map-img")
  .attr("src", "./assets/ancient-greece-map.jpg")
  .attr("alt", "Map");

// * --Start Game Button--
const gameButton = $("<button>").addClass("game-button");

// Image
const gameImg = $("<img>")
  .addClass("game-img")
  .attr("src", "./assets/sword.png")
  .attr("alt", "MythoBattle Game");

$(gameButton).on("click", () => {
  window.location.href = "../game/game.html";
});

$(gameButton).append(gameImg);

// * --Change Character Button--
const avatarButton = $("<button>").addClass("avatar-button");

// Image
const avatarImg = $("<img>")
  .addClass("avatar-img")
  .attr("src", "../../assets/characters/zeus.png")
  .attr("alt", "Avatar Selection");

$(avatarButton).on("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

$(avatarButton).append(avatarImg);

/*
// * --Shop Button--
const shopButton = $("<button>").addClass("shop-button");

// Image
const shopImg = $("<img>")
  .addClass("shop-img")
  .attr("src", "./assets/green-shop.png")
  .attr("alt", "Shop");

$(shopButton).on("click", () => {
  window.location.href = "../the-shop/the-shop.html";
});

$(shopButton).append(shopImg); */

// * --Info Page Button--
const infoButton = $("<button>").addClass("info-button");

// Image
const infoImg = $("<img>")
  .addClass("info-img")
  .attr("src", "./assets/scroll.png")
  .attr("alt", "Info Page");

$(infoButton).on("click", () => {
  window.location.href = "../info-page/info-page.html";
});

$(infoButton).append(infoImg);

$(entireMap).append(map, gameButton, avatarButton, infoButton);
$("body").append(entireMap);
