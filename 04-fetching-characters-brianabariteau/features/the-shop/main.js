"use strict";

import { ITEMS } from "../../constants/items.js";
//import { PLAYER_ONE } from "../../constants/player.js"; // temporary, for now it's just one player
const selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));

// Center everything
const centered = $("<div>").addClass("centered");

// Title
const shopTitle = $("<h1>").text("The Shop").addClass("shop-title");
$(centered).append(shopTitle);

// Money of current player based on Total Score
const score = $("<h2>").text(
  `Total Score for ${selectedCharacter.name}: ($)${selectedCharacter.totalScore}`
);

$(centered).append(score);
$("body").append(centered);

// Items in shop
ITEMS.forEach((item) => {
  const product = $("<div>").addClass("product");

  // Product information: name, category, description
  const productInfo = $("<div>").addClass("product-info");

  // * Name
  const productName = $("<h2>").text(item.title).addClass("product-name");

  // * Category
  const productCategory = $("<h3>")
    .text(item.category)
    .addClass("product-category");

  // * Description
  const productDescription = $("<p>")
    .text(item.description)
    .addClass("product-description");

  $(productInfo).append(productName, productCategory, productDescription);

  // Item images
  const productImg = $("<img>")
    .attr("data-src", item.image)
    .attr("alt", item.title)
    .addClass("product-img");

  // Product details: price, rating, review count, purchase button
  const productDetails = $("<div>").addClass("product-details");

  // * Price
  const productPrice = $("<p>")
    .text(`$${item.price}`)
    .addClass("product-price");

  // * Star rating
  const ratingGroup = $("<div>").addClass("rating-group");
  const productRating = $("<p>")
    .text(`⭐${item.rating.rate}`)
    .addClass("product-rating");

  // * Review count
  const productReviewCount = $("<p>")
    .text(`(${item.rating.count})`)
    .addClass("product-review-count");
  $(ratingGroup).append(productRating, productReviewCount);

  // * Purchase button
  const purchaseButton = $("<button>")
    .text("Purchase")
    .addClass("purchase-button")
    .data("item", item);

  $(productDetails).append(productPrice, ratingGroup, purchaseButton);
  $(product).append(productInfo, productImg, productDetails);
  $(centered).append(product);
});

// Purchase button: buying items with Total Score
$(centered).on("click", ".purchase-button", (event) => {
  const button = $(event.currentTarget);
  const item = button.data("item");

  if (selectedCharacter.totalScore >= item.price) {
    selectedCharacter.totalScore -= item.price;
    score.text(
      `Total Score for ${
        selectedCharacter.name
      }: ($)${selectedCharacter.totalScore.toFixed(2)}`
    );
    alert(`Purchased ${item.title}.`);
  } else {
    alert(`Can't purchase ${item.title}.`);
  }
});

// Lazy load product images
const productImages = $(".product-img");
const imgOptions = {
  threshold: [0, 0.3, 1],
};

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const image = $(entry.target);

    if (entry.isIntersecting) {
      const dataSrc = $(entry.target).data("src");
      $(image).attr("src", dataSrc).addClass("loaded");
    } else {
      $(image).removeClass("loaded");
    }
  });
}, imgOptions);

productImages.each(function () {
  imgObserver.observe(this);
});

// Lazy load product information
const productInfo = $(".product");
const infoOptions = {
  threshold: [0.25, 0.75],
};

const infoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const product = $(entry.target);

    if (entry.intersectionRatio >= 0.25 && !$(product).hasClass("visible")) {
      $(product).find(".product-info, .product-details").addClass("loaded");
      $(product).addClass("visible");
    }

    if (entry.intersectionRatio < 0.25 && $(product).hasClass("visible")) {
      $(product).find(".product-info, .product-details").removeClass("loaded");
      $(product).removeClass("visible");
    }
  });
}, infoOptions);

productInfo.each(function () {
  infoObserver.observe(this);
});

const backButton = $("<button>")
  .addClass("character-selection-button")
  .text("Back to Character Selection");

$(backButton).on("click", () => {
  window.location.href = "../character-selection/character-selection.html";
});

$(centered).append(backButton);

console.log(selectedCharacter);
