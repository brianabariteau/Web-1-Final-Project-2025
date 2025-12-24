"use strict";
export function sortCharacters(characters) {
  return characters.sort((characterA, characterB) => {
    const scoreA =
      characterA.stats.attack * 2 +
      characterA.stats.power * 2 +
      characterA.stats.defense +
      characterA.stats.hp +
      characterA.stats.speed;

    const scoreB =
      characterB.stats.attack * 2 +
      characterB.stats.power * 2 +
      characterB.stats.defense +
      characterB.stats.hp +
      characterB.stats.speed;

    return scoreB - scoreA;
  });
}
