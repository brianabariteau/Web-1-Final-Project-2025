"use strict";

import { CHARACTER_MOVES } from "../../constants/character-movesets.js";
import { fetchCharacters } from "../../services/character-api.js";

let mode = localStorage.getItem("mode");
let player1Character = JSON.parse(localStorage.getItem("player1Character"));
let player2Character = JSON.parse(localStorage.getItem("player2Character"));
let currentTurn;

if (mode === "single player") {
  let characters = [];

  characters = await fetchCharacters();

  player2Character = characters[Math.floor(Math.random() * characters.length)];
}

if (player1Character.stats.speed > player2Character.stats.speed) {
  currentTurn = "player1";
} else currentTurn = "player2";

console.log(player1Character);
console.log(player2Character);

// * Functions
function updateGameDisplay() {
  if (!player1Character || !player2Character) return;

  // ? Player 1
  const player1 = player1Character.name;

  player1Icon.attr("src", player1Character.imgSrc);

  player1NameText.text(player1);

  const p1HealthPercent =
    (player1Character.stats.currenthp / player1Character.maxhp) * 100;
  $(".player1-health").css("--hp-width", p1HealthPercent + "%");
  player1Health.text(
    `${player1Character.stats.currenthp}/${player1Character.maxhp}`
  );

  player1Move1.text(CHARACTER_MOVES[player1].move1name);
  player1Move2.text(CHARACTER_MOVES[player1].move2name);
  player1Move3.text(CHARACTER_MOVES[player1].move3name);
  player1Move4.text(CHARACTER_MOVES[player1].move4name);

  player1ability1.text(CHARACTER_MOVES[player1].ability1name);
  player1ability2.text(CHARACTER_MOVES[player1].ability2name);

  // ? Player 2
  const player2 = player2Character.name;

  player2Icon.attr("src", player2Character.imgSrc);

  player2NameText.text(player2);

  const p2HealthPercent =
    (player2Character.stats.currenthp / player2Character.maxhp) * 100;
  $(".player2-health").css("--hp-width", p2HealthPercent + "%");
  player2Health.text(
    `${player2Character.stats.currenthp}/${player2Character.maxhp}`
  );

  player2Move1.text(CHARACTER_MOVES[player2].move1name);
  player2Move2.text(CHARACTER_MOVES[player2].move2name);
  player2Move3.text(CHARACTER_MOVES[player2].move3name);
  player2Move4.text(CHARACTER_MOVES[player2].move4name);

  player2ability1.text(CHARACTER_MOVES[player2].ability1name);
  player2ability2.text(CHARACTER_MOVES[player2].ability2name);
}

async function loadCharacters() {
  updateGameDisplay();
}

function executeMove(attacker, defender, moveNum, buttonNum) {
  const characterName = attacker.name;
  console.log(characterName);

  const move = CHARACTER_MOVES[characterName]?.[moveNum];
  console.log(move);

  const returns = move(attacker, defender);
  console.log(returns);

  let moveName = "move";
  if (buttonNum === 1) {
    moveName = CHARACTER_MOVES[attacker.name].move1name;
  } else if (buttonNum === 2) {
    moveName = CHARACTER_MOVES[attacker.name].move2name;
  } else if (buttonNum === 3) {
    moveName = CHARACTER_MOVES[attacker.name].move3name;
  } else if (buttonNum === 4) {
    moveName = CHARACTER_MOVES[attacker.name].move4name;
  }

  $(panel).text(`${attacker.name} used ${moveName}!`);

  updateGameDisplay();

  if (currentTurn === "player1") {
    currentTurn = "player2";
  } else {
    currentTurn = "player1";
  }
  playerTurns();

  checkGameOver();
}

function gameOver(character) {
  const gameOver = $("<div>")
    .addClass("game-over")
    .append($("<h2>").text("Game Over!"))
    .append($("<h1>").text(`${character.name} is the victor!`))
    .append(
      $("<button>")
        .text("Play Again.")
        .on("click", () => location.reload())
    )
    .append(
      $("<button>")
        .text("Return to Main Menu.")
        .on("click", () => {
          window.location.href = "../main-menu/main-menu.html";
        })
    );

  $("body").append(gameOver);
}

//check if the game is over
function checkGameOver() {
  if (player1Character.stats.currenthp <= 0) {
    gameOver(player2Character);
  } else if (player2Character.stats.currenthp <= 0) {
    gameOver(player1Character);
  }
}

function playerTurns() {
  if (currentTurn === "player1") {
    $(".player1-battle").prop("disabled", false).css("opacity", "1");
    $(".player2-battle").prop("disabled", true).css("opacity", "0.8");
  } else if (currentTurn === "player2") {
    $(".player2-battle").prop("disabled", false).css("opacity", "1");
    $(".player1-battle").prop("disabled", true).css("opacity", "0.8");
  }

  if (mode === "single player" && currentTurn === "player2") {
    setTimeout(() => {
      const moves = ["move1use", "move2use", "move3use", "move4use"];
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      const moveIndex = moves[randomMove];

      executeMove(
        player2Character,
        player1Character,
        randomMove,
        moveIndex + 1
      );
    }, 1500);
  }
}

// * The Background Image
const background = $("<img>")
  .addClass("background")
  .attr("src", "./assets/battle-background.png")
  .attr("alt", "Background");

// * Player 1
// ? Character Icon
const player1Icon = $("<img>").addClass("player1-icon");

// ! Battle Buttons + Progress
const player1battle = $("<div>").addClass("player1-battle");

// ? Name + Healthbar
const player1Name = $("<div>").addClass("player1-name");
const player1NameText = $("<div>").addClass("player1-name-text");
const player1Health = $("<div>").addClass("player1-health");

$(player1Name).append(player1NameText, player1Health);

// ? Movesets
const player1Moves = $("<div>").addClass("player1-moves");
const player1Move1 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player1Character, player2Character, "move1use", 1);
  });
const player1Move2 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player1Character, player2Character, "move2use", 2);
  });
const player1Move3 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player1Character, player2Character, "move3use", 3);
  });
const player1Move4 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player1Character, player2Character, "move4use", 4);
  });

$(player1Moves).append(player1Move1, player1Move2, player1Move3, player1Move4);

// ? Abilities
const player1Abilities = $("<div>").addClass("player1-abilities");
const player1ability1 = $("<button>")
  .addClass("player1-ability1")
  .on("click", () => {});
const player1ability2 = $("<button>")
  .addClass("player1-ability2")
  .on("click", () => {});
$(player1Abilities).append(player1ability1, player1ability2);

$(player1battle).append(player1Abilities, player1Name, player1Moves);

// * Player 2
// ? Character Icon
const player2Icon = $("<img>").addClass("player-2-icon");

// ! Battle Buttons + Progress
const player2battle = $("<div>").addClass("player2-battle");

// ? Name + Healthbar
const player2Name = $("<div>").addClass("player2-name");
const player2NameText = $("<div>").addClass("player2-name-text");
const player2Health = $("<div>").addClass("player2-health");

$(player2Name).append(player2NameText, player2Health);

// ? Movesets
const player2Moves = $("<div>").addClass("player1-moves");
const player2Move1 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player2Character, player1Character, "move1use", 1);
  });
const player2Move2 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player2Character, player1Character, "move2use", 2);
  });
const player2Move3 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player2Character, player1Character, "move3use", 3);
  });
const player2Move4 = $("<button>")
  .addClass("moves")
  .on("click", () => {
    executeMove(player2Character, player1Character, "move4use", 4);
  });

$(player2Moves).append(player2Move1, player2Move2, player2Move3, player2Move4);

// ? Abilities
const player2Abilities = $("<div>").addClass("player2-abilities");
const player2ability1 = $("<button>")
  .addClass("player2-ability1")
  .on("click", () => {});
const player2ability2 = $("<button>")
  .addClass("player2-ability2")
  .on("click", () => {});
$(player2Abilities).append(player2ability1, player2ability2);

$(player2battle).append(player2Abilities, player2Name, player2Moves);

// * Return to Main Menu Button
const returnButton = $("<button>")
  .addClass("return-button")
  .text("Return to Main Menu");

// * Executed Move
const panel = $("<div>").addClass("text-panel");

$(returnButton).on("click", () => {
  window.location.href = "../main-menu/main-menu.html";
});

$("body").append(
  background,
  player1Icon,
  player2Icon,
  player1battle,
  player2battle,
  returnButton,
  panel
);

loadCharacters();
playerTurns();
