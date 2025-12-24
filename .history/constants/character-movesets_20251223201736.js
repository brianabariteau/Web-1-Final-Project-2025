import { CUSTOM_STATS } from "./characters.js";

export const CHARACTER_MOVES = {
  Zeus: {
    move1name: "Thunderbolt Wrath",
    move2name: "Skybreaker Slam",
    move3name: "Stormcaller Command",
    move4name: "God of Thunder",
    move1effects() {},
    move2effects() {},
    move3effects() {},
    move4effects() {},
    ability1name: CUSTOM_STATS[Zeus].stats.domainMastery,
    ability2name: CUSTOM_STATS[Zeus].stats.specialTrait,
    ability1effect() {},
    ability2effect() {},
  },
};
