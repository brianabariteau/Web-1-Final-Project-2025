"use strict";
// * --Map--
const entireMap = $("<div>").addClass("map");

// Image
const map = $("<img>")
  .addClass("map-img")
  .attr("src", "./assets/ancient-greece-map.jpg")
  .attr("alt", "Map");

// * --Cookie Button--
const cookieButton = $("<button>").addClass("cookie-button");

// Image
const cookieImg = $("<img>")
  .addClass("cookie-img")
  .attr("src", "./assets/wheat.png")
  .attr("alt", "Cookie Clicker Game");

$(cookieButton).on("click", () => {
  window.location.href = "../cookie-clicker/cookie-clicker.html";
});

$(cookieButton).append(cookieImg);

// * --Avatar Button--
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

$(shopButton).append(shopImg);

// * --Absolute Monopoly Button--
const moneyButton = $("<button>").addClass("money-button");

// Image
const moneyImg = $("<img>")
  .addClass("money-img")
  .attr("src", "./assets/gold-coins.png")
  .attr("alt", "Absolute Monopoly");

$(moneyButton).on("click", () => {
  window.location.href = "../absolute-monopoly/absolute-monopoly.html";
});

$(moneyButton).append(moneyImg);

$(entireMap).append(map, cookieButton, avatarButton, shopButton, moneyButton);
$("body").append(entireMap);
