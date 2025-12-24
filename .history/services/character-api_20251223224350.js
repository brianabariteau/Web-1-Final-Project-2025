import {
  SPECIFIC_CHARACTERS,
  CUSTOM_SPRITES,
  CUSTOM_STATS,
} from "../constants/characters.js";

/**
 * Fetches all characters from the API
 * @returns {Promise<Array<Object>>}
 */
export async function fetchCharacters() {
  const response = await fetch("https://thegreekmythapi.vercel.app/api/gods");
  const data = await response.json();

  const filteredCharacters = data.filter((god) =>
    SPECIFIC_CHARACTERS.includes(god.name)
  );

  const characters = filteredCharacters.map((god) => {
    const stats = CUSTOM_STATS[god.name];

    return {
      name: god.name,
      id: god.id,
      totalScore: 0,
      maxhp: stats.hp,
      tier: stats.tier,
      tierName: stats.tierName,
      stats: {
        hp: stats.currenthp,
        attack: stats.attack,
        defense: stats.defense,
        speed: stats.speed,
        power: stats.power,
        resilience: stats.resilience,
        stamina: stats.stamina,
        domainMastery: stats.domainMastery,
        masteryDesc: stats.masteryDesc,
        specialTrait: stats.specialTrait,
        traitDesc: stats.traitDesc,
      },
      buffs: [],
      debuffs: [],
      status: [],
      imgSrc: CUSTOM_SPRITES[god.name],
      powers: god.attributes.powers,
      symbols: god.attributes.symbols,
      category: god.category,
      origin: god.attributes.origin,
      abode: god.attributes.abode,
      stories: god.attributes.stories,
      parents: god.attributes.family.parents,
      siblings: god.attributes.family.siblings,
      spouse: god.attributes.family.spouse,
      description: god.description,
    };
  });

  return characters;
}
