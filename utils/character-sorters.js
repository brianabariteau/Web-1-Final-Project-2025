"use strict";

/**
 * Sorts characters by attack, power, defense, hp, and speed combined for overall strongest.
 * @param {Array<Object>} characters
 * @returns {Array<Object>} the sorted characters
 */
export function sortCharacters(characters) {
  return characters.sort((characterA, characterB) => {
    const scoreA =
      characterA.stats.attack * 2 +
      characterA.stats.power * 2 +
      characterA.stats.defense +
      characterA.maxhp / 4 +
      characterA.stats.speed;

    const scoreB =
      characterB.stats.attack * 2 +
      characterB.stats.power * 2 +
      characterB.stats.defense +
      characterB.maxhp / 4 +
      characterB.stats.speed;

    return scoreB - scoreA;
  });
}
