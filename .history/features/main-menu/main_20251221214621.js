"use strict";
// * --Map--
const entireMap = $("<div>").addClass("map");

// Image
const map = $("<img>")
  .addClass("map-img")
  .attr("src", "./assets/ancient-greece-map.jpg")
  .attr("alt", "Map");

// * --Start Game Button--
const gameButton = $("<button>").addClass("cookie-button");

// Image
const cookieImg = $("<img>")
  .addClass("cookie-img")
  .attr("src", "./assets/wheat.png")
  .attr("alt", "Cookie Clicker Game");

$(gameButton).on("click", () => {
  window.location.href = "../cookie-clicker/cookie-clicker.html";
});

$(gameButton).append(cookieImg);

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
const infoButton = $("<button>").addClass("money-button");

// Image
const infoImg = $("<img>")
  .addClass("info-img")
  .attr("src", "./assets/scroll.png")
  .attr("alt", "Absolute Monopoly");

$(infoButton).on("click", () => {
  window.location.href = "../absolute-monopoly/absolute-monopoly.html";
});

$(infoButton).append(infoImg);

$(entireMap).append(map, gameButton, avatarButton, infoButton);
$("body").append(entireMap);
