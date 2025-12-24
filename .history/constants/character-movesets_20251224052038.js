import { CUSTOM_STATS } from "./characters.js";

export const CHARACTER_MOVES = {
  Zeus: {
    move1name: "Thunderbolt Wrath",
    move1type: "Damage",
    move1desc: "Strike the enemy with lightning, dealing high electric damage.",
    move2name: "Skybreaker Slam",
    move2type: "Power",
    move2desc: "Heavy thunder crash that ignores a portion of defense.",
    move3name: "Stormcaller Command",
    move3type: "Buff",
    move3desc: "Increase your Power and Speed for 2 turns.",
    move4name: "God of Thunder",
    move4type: "Ultimate",
    move4desc: "Devastating lightning storm hitting all enemies.",
    move1use(attacker, defender) {
      const damage =
        damageDealt(attacker, defender, 1.2) +
        (attacker.stats.power - defender.stats.power);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      // ! Future stuff, intended idea, didn't implement
      defender.status.push({ type: "shock", turns: 1 });

      return { damage: damage, status: "shock", defender: defender.status };
    },
    move2use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.5);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage, ignoreDefense: true };
    },
    move3use(attacker, defender) {
      // ! Future stuff, intended idea
      //attacker.buffs.push(statusApplied("buffs", "power", 20, 2));
      //attacker.buffs.push(statusApplied("buffs", "speed", 20, 2));
      //return { buff: ["power", "speed"] };

      // ? temporary
      const damage = damageDealt(attacker, defender, 1.0);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);
      attacker.stats.power += 20;
      attacker.stats.speed += 20;

      return {
        damage: damage,
        power: attacker.stats.power,
        speed: attacker.stats.speed,
      };
    },
    move4use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 2.2);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      // ! Future stuff, intended idea, didn't implement
      defender.status.push({ type: "paralyze", turns: 1 });

      return { damage: damage, status: "paralyze" };
    },
    ability1name: CUSTOM_STATS["Zeus"].domainMastery,
    ability1desc: CUSTOM_STATS["Zeus"].masteryDesc,
    ability2name: CUSTOM_STATS["Zeus"].specialTrait,
    ability2desc: CUSTOM_STATS["Zeus"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Athena: {
    move1name: "Spear of Wisdom",
    move1type: "Damage",
    move1desc: "Precise strike that scales with Defense.",
    move2name: "Aegis Wall",
    move2type: "Buff",
    move2desc: "Greatly increases Defense for 2 turns.",
    move3name: "Tactical Feint",
    move3type: "Control",
    move3desc: "Forces the enemy to act last next turn.",
    move4name: "Perfect Counter",
    move4type: "Ultimate",
    move4desc: "Automatically counters the next enemy attack.",
    move1use(attacker, defender) {
      const damage =
        damageDealt(attacker, defender, 1.0) +
        Math.floor(attacker.stats.defense * 0.3);

      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move2use(attacker, defender) {
      // ! Future stuff, intended idea
      //attacker.buffs.push(statusApplied("buff", "defense", 30, 2));
      //return { buff: ["defense"] };

      attacker.stats.defense += 30;

      return { defense: attacker.stats.defense };
    },
    move3use(attacker, defender) {
      // ! Future stuff, indended idea
      //defender.status.push({ type: "delay", turns: 1 });
      //return { status: "delay" };

      // ? temporary
      const damage = damageDealt(attacker, defender, 1.2);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move4use(attacker, defender) {
      // ! Future stuff, intended idea
      //attacker.buffs.push(statusApplied("buff", "damageReduction", 40, 3));

      // ? temporary
      const damage =
        Math.floor(CUSTOM_STATS[defender.name].power) +
        damageDealt(attacker, defender, 1.0);

      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    ability1name: CUSTOM_STATS["Athena"].domainMastery,
    ability1desc: CUSTOM_STATS["Athena"].masteryDesc,
    ability2name: CUSTOM_STATS["Athena"].specialTrait,
    ability2desc: CUSTOM_STATS["Athena"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hestia: {
    move1name: "Hearthfire Lash",
    move1type: "Damage",
    move1desc: "Burning flame attack over time.",
    move2name: "Sanctuary Flame",
    move2type: "Heal",
    move2desc: "Heal yourself or an ally.",
    move3name: "Comforting Warmth",
    move3type: "Buff",
    move3desc: "Boost team resilience and stamina.",
    move4name: "Eternal Hearth",
    move4type: "Ultimate",
    move4desc: "Massive heal and burn aura for allies.",
    move1use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 0.9);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      // ! Future stuff, intended idea, not implemented
      //defender.status.push({ type: "burn", turns: 2 });

      return { damage: damage };
    },
    move2use(attacker, defender) {
      const health = heal(attacker, 0.6);
      attacker.stats.currenthp = Math.min(
        attacker.maxhp,
        attacker.stats.currenthp + health
      );

      return {
        health: health,
        hp: attacker.stats.currenthp,
        maxhp: attacker.maxhp,
      };
    },
    move3use(attacker, defender) {
      // ! Future stuff, intended idea, not implemented
      //attacker.buffs.push(statusApplied("buff", "resilience", 20, 2));
      //attacker.buffs.push(statusApplied("buff", "stamina", 20, 2));

      attacker.stats.resilience += 20;
      attacker.stats.stamina += 5;

      // ? temporary
      const damage =
        damageDealt(attacker, defender, 0.5) + attacker.stats.stamina;

      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return {
        damage: damage,
        resilience: attacker.stats.resilience,
        stamina: attacker.stats.stamina,
      };
    },
    move4use(attacker, defender) {
      const health = heal(attacker, 1.0);
      attacker.stats.currenthp = Math.min(
        attacker.maxhp,
        attacker.stats.currenthp + health
      );

      // ! Future stuff, intended idea, not implemented
      //attacker.status.push({ type: "burn-aura", turns: 3 });

      return { health: health, hp: attacker.stats.currenthp };
    },
    ability1name: CUSTOM_STATS["Hestia"].domainMastery,
    ability1desc: CUSTOM_STATS["Hestia"].masteryDesc,
    ability2name: CUSTOM_STATS["Hestia"].specialTrait,
    ability2desc: CUSTOM_STATS["Hestia"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Apollo: {
    move1name: "Radiant Arrow",
    move1type: "Damage",
    move1desc: "Fast light-based attack with crit chance.",
    move2name: "Hymn of Clarity",
    move2type: "Buff",
    move2desc: "Increase Accuracy and Speed.",
    move3name: "Physician's Blessing",
    move3type: "Heal",
    move3desc:
      "Bringing the regenerative energy of the rising sun into the battle.",
    move4name: "Solar Apothesis",
    move4type: "Ultimate",
    move4desc: "Massive light damage and self-buff.",
    move1use(attacker, defender) {
      const damage =
        damageDealt(attacker, defender, 0.8) + attacker.stats.power;
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move2use(attacker, defender) {
      // ! Future stuff, intended idea, not implemented
      //attacker.buffs.push(statusApplied("buff", "power", 25, 2));

      attacker.stats.power += 15;

      return { power: attacker.stats.power };
    },
    move3use(attacker, defender) {
      const health = heal(attacker, 1.25);
      attacker.stats.currenthp = Math.min(
        attacker.maxhp,
        attacker.stats.currenthp + health
      );

      return { health: health };
    },
    move4use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 2.15);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    ability1name: CUSTOM_STATS["Apollo"].domainMastery,
    ability1desc: CUSTOM_STATS["Apollo"].masteryDesc,
    ability2name: CUSTOM_STATS["Apollo"].specialTrait,
    ability2desc: CUSTOM_STATS["Apollo"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Artemis: {
    move1name: "Moonlit Shot",
    move1type: "Damage",
    move1desc: "High crit ranged attack.",
    move2name: "Hunter's Mark",
    move2type: "Debuff",
    move2desc: "Mark enemy to take extra damage.",
    move3name: "Silent Step",
    move3type: "Buff",
    move3desc: "Increase dodge and speed.",
    move4name: "Goddess of the Hunt",
    move4type: "Ultimate",
    move4desc: "Guaranteed critical strike.",
    move1use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.0) * 2;
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move2use(attacker, defender) {
      const damage =
        damageDealt(attacker, defender, 0.6) + attacker.stats.speed;
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move3use(attacker, defender) {
      // ! Future ideas
      // attacker.buffs.push(statusApplied("buff", "speed", 25, 2));
      // attacker.buffs.push(statusApplied("buff", "evasion", 25, 2));
      defender.stats.defense -= 25;

      return { defense: defender.stats.defense };
    },
    move4use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 3.0);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    ability1name: CUSTOM_STATS["Artemis"].domainMastery,
    ability1desc: CUSTOM_STATS["Artemis"].masteryDesc,
    ability2name: CUSTOM_STATS["Artemis"].specialTrait,
    ability2desc: CUSTOM_STATS["Artemis"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Poseidon: {
    move1name: "Tidal Crash",
    move1type: "Damage",
    move1desc: "Crushing wave attack.",
    move2name: "Ocean's Fury",
    move2type: "Power",
    move2desc: "Damage increases with each use.",
    move3name: "Seaquake",
    move3type: "Control",
    move3desc: "Chance to stun enemies.",
    move4name: "Trident Supremacy",
    move4type: "Ultimate",
    move4desc: "Massive water damage to all foes.",
    move1use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.2);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move2use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.0);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      attacker.stats.attack += 30;

      return { damage: damage };
    },
    move3use(attacker, defender) {
      // defender.status.push({ type: "stun", turns: 1 })
      const damage = 30;
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      defender.stats.defense -= 15;

      return { damage: damage };
    },
    move4use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 2.5);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    ability1name: CUSTOM_STATS["Poseidon"].domainMastery,
    ability1desc: CUSTOM_STATS["Poseidon"].masteryDesc,
    ability2name: CUSTOM_STATS["Poseidon"].specialTrait,
    ability2desc: CUSTOM_STATS["Poseidon"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hades: {
    move1name: "Stygian Strike",
    move1type: "Damage",
    move1desc: "Dark attack that drains HP.",
    move2name: "Gravebind Chains",
    move2type: "Control",
    move2desc: "Root enemy in place.",
    move3name: "Dread Decree",
    move3type: "Debuff",
    move3desc: "Lower enemy morale and power.",
    move4name: "King of the Underworld",
    move4type: "Ultimate",
    move4desc: "Drain life from all enemies.",
    move1use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.0);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      attacker.stats.currenthp = Math.min(
        attacker.maxhp,
        attacker.stats.currenthp + Math.floor(damage * 0.3)
      );

      return { damage: damage };
    },
    move2use(attacker, defender) {
      //defender.status.push({ type: "root", turns: 1 });

      defender.stats.defense = Math.max(0, defender.stats.defense - 20);
      defender.stats.attack = Math.max(0, defender.stats.attack - 20);

      return { defense: defender.stats.defense };
    },
    move3use(attacker, defender) {
      //defender.debuffs.push(statusApplied("debuff", "power", -20, 2))

      defender.stats.power = Math.max(0, defender.stats.power - 20);
      defender.stats.resilience = Math.max(0, defender.stats.resilience - 50);

      //console.log(`${defender.name} has power of ${defender.stats.power}`);
      //console.log(
      //  `${defender.name} has resilience of ${defender.stats.resilience}`
      //);

      return {
        defense: defender.stats.power,
        resistance: defender.stats.resistance,
      };
    },
    move4use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 1.8);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      attacker.stats.currenthp += Math.floor(damage * 0.5);

      return { damage: damage };
    },
    ability1name: CUSTOM_STATS["Hades"].domainMastery,
    ability1desc: CUSTOM_STATS["Hades"].masteryDesc,
    ability2name: CUSTOM_STATS["Hades"].specialTrait,
    ability2desc: CUSTOM_STATS["Hades"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Demeter: {
    move1name: "Harvest Scythe",
    move1type: "Damage",
    move1desc: "Nature-based attack.",
    move2name: "Verdant Blessing",
    move2type: "Heal",
    move2desc: "Heal over time.",
    move3name: "Fallow Curse",
    move3type: "Debuff",
    move3desc: "Reduce enemy attack.",
    move4name: "Wrath of the Seasons",
    move4type: "Ultimate",
    move4desc: "Seasonal damage with debuffs.",
    move1use(attacker, defender) {
      const damage = damageDealt(attacker, defender, 0.9);
      defender.stats.currenthp = Math.max(0, defender.stats.currenthp - damage);

      return { damage: damage };
    },
    move2use(attacker, defender) {
      const health = heal(attacker, 1.25);
      attacker.stats.currenthp = Math.min(
        attacker.maxhp,
        attacker.stats.currenthp + health
      );

      return { health: health };
    },
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Demeter"].domainMastery,
    ability1desc: CUSTOM_STATS["Demeter"].masteryDesc,
    ability2name: CUSTOM_STATS["Demeter"].specialTrait,
    ability2desc: CUSTOM_STATS["Demeter"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Aphrodite: {
    move1name: "Roseblade Slash",
    move1type: "Damage",
    move1desc: "Charm-infused strike.",
    move2name: "Beguiling Smile",
    move2type: "Control",
    move2desc: "Chance enemy skips turn.",
    move3name: "Swaying Perfume",
    move3type: "Debuff",
    move3desc: "Lower enemy accuracy.",
    move4name: "Irresistible Aura",
    move4type: "Ultimate",
    move4desc: "Enemies lose control for 1 turn.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Aphrodite"].domainMastery,
    ability1desc: CUSTOM_STATS["Aphrodite"].masteryDesc,
    ability2name: CUSTOM_STATS["Aphrodite"].specialTrait,
    ability2desc: CUSTOM_STATS["Aphrodite"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hera: {
    move1name: "Queen's Judgment",
    move1type: "Damage",
    move1desc: "Punishing divine strike.",
    move2name: "Royal Edict",
    move2type: "Debuff",
    move2desc: "Debuff enemy stats.",
    move3name: "Matron's Guard",
    move3type: "Buff",
    move3desc: "Boost allies' defense.",
    move4name: "Divine Authority",
    move4type: "Ultimate",
    move4desc: "Reflect debuffs back at enemies.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Hera"].domainMastery,
    ability1desc: CUSTOM_STATS["Hera"].masteryDesc,
    ability2name: CUSTOM_STATS["Hera"].specialTrait,
    ability2desc: CUSTOM_STATS["Hera"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Dionysus: {
    move1name: "Vine Lash",
    move1type: "Damage",
    move1desc: "Entangling vine attack.",
    move2name: "Ecstatic Toast",
    move2type: "Buff",
    move2desc: "Random buff.",
    move3name: "Wine-Drunk Delirium",
    move3type: "Control",
    move3desc: "Confuse enemy.",
    move4name: "God of Madness",
    move4type: "Ultimate",
    move4desc: "Random chaos effects on all.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Dionysus"].domainMastery,
    ability1desc: CUSTOM_STATS["Dionysus"].masteryDesc,
    ability2name: CUSTOM_STATS["Dionysus"].specialTrait,
    ability2desc: CUSTOM_STATS["Dionysus"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Ares: {
    move1name: "Warcry Slash",
    move1type: "Damage",
    move1desc: "Brutal melee strike.",
    move2name: "Berserker Rush",
    move2type: "Power",
    move2desc: "Damage increases as HP drops.",
    move3name: "Bloodied Momentum",
    move3type: "Buff",
    move3desc: "Attack increases each turn.",
    move4name: "Bloodlust Rampage",
    move4type: "Ultimate",
    move4desc: "Multiple powerful strikes.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Ares"].domainMastery,
    ability1desc: CUSTOM_STATS["Ares"].masteryDesc,
    ability2name: CUSTOM_STATS["Ares"].specialTrait,
    ability2desc: CUSTOM_STATS["Ares"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hephaestus: {
    move1name: "Molten Hammer",
    move1type: "Damage",
    move1desc: "Heavy fire attack.",
    move2name: "Forge Temper",
    move2type: "Buff",
    move2desc: "Boost armor and power.",
    move3name: "Searing Shackles",
    move3type: "Control",
    move3desc: "Immobilize enemy.",
    move4name: "Masterwork Cataclysm",
    move4type: "Ultimate",
    move4desc: "Massive fire explosion.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Hephaestus"].domainMastery,
    ability1desc: CUSTOM_STATS["Hephaestus"].masteryDesc,
    ability2name: CUSTOM_STATS["Hephaestus"].specialTrait,
    ability2desc: CUSTOM_STATS["Hephaestus"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Persephone: {
    move1name: "Springthorn Strike",
    move1type: "Damage",
    move1desc: "Life-draining attack.",
    move2name: "Blooming Remedy",
    move2type: "Heal",
    move2desc: "Heal and cleanse.",
    move3name: "Underworld Veil",
    move3type: "Debuff",
    move3desc: "Lower enemy defenses.",
    move4name: "Dual Aspect Reign",
    move4type: "Ultimate",
    move4desc: "Switch forms with powerful effects.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Persephone"].domainMastery,
    ability1desc: CUSTOM_STATS["Persephone"].masteryDesc,
    ability2name: CUSTOM_STATS["Persephone"].specialTrait,
    ability2desc: CUSTOM_STATS["Persephone"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hermes: {
    move1name: "Swift Jab",
    move1type: "Damage",
    move1desc: "Quick strike.",
    move2name: "Trickster's Swap",
    move2type: "Control",
    move2desc: "Force enemy delay.",
    move3name: "Courier's Blessing",
    move3type: "Buff",
    move3desc: "Speed boost.",
    move4name: "Winged Sandals Blitz",
    move4type: "Ultimate",
    move4desc: "Multiple fast attacks.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Hermes"].domainMastery,
    ability1desc: CUSTOM_STATS["Hermes"].masteryDesc,
    ability2name: CUSTOM_STATS["Hermes"].specialTrait,
    ability2desc: CUSTOM_STATS["Hermes"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Nyx: {
    move1name: "Void Talons",
    move1type: "Damage",
    move1desc: "Shadow damage.",
    move2name: "Nightfall Shroud",
    move2type: "Debuff",
    move2desc: "Reduce enemy accuracy.",
    move3name: "Starless Silence",
    move3type: "Control",
    move3desc: "Silence enemy abilities.",
    move4name: "Primordial Eclipse",
    move4type: "Ultimate",
    move4desc: "Massive void damage.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Nyx"].domainMastery,
    ability1desc: CUSTOM_STATS["Nyx"].masteryDesc,
    ability2name: CUSTOM_STATS["Nyx"].specialTrait,
    ability2desc: CUSTOM_STATS["Nyx"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Hypnos: {
    move1name: "Drowsy Tap",
    move1type: "Damage",
    move1desc: "Weak attack with sleep chance.",
    move2name: "Sopor Mist",
    move2type: "Control",
    move2desc: "Put enemy to sleep.",
    move3name: "Dreamy Veil",
    move3type: "Buff",
    move3desc: "Reduce damage taken.",
    move4name: "Endless Slumber",
    move4type: "Ultimate",
    move4desc: "Guaranteed sleep.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Hypnos"].domainMastery,
    ability1desc: CUSTOM_STATS["Hypnos"].masteryDesc,
    ability2name: CUSTOM_STATS["Hypnos"].specialTrait,
    ability2desc: CUSTOM_STATS["Hypnos"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Thanatos: {
    move1name: "Reaper's Slice",
    move1type: "Damage",
    move1desc: "Death-infused strike.",
    move2name: "Final Omen",
    move2type: "Debuff",
    move2desc: "Mark enemy for execution.",
    move3name: "Soul Sever",
    move3type: "Power",
    move3desc: "High true damage.",
    move4name: "Certain Death",
    move4type: "Ultimate",
    move4desc: "Instantly defeat low HP enemy.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Thanatos"].domainMastery,
    ability1desc: CUSTOM_STATS["Thanatos"].masteryDesc,
    ability2name: CUSTOM_STATS["Thanatos"].specialTrait,
    ability2desc: CUSTOM_STATS["Thanatos"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Morpheus: {
    move1name: "Lucid Cut",
    move1type: "Damage",
    move1desc: "Dream damage.",
    move2name: "Waking Nightmare",
    move2type: "Debuff",
    move2desc: "Lower accuracy.",
    move3name: "Illusion Drift",
    move3type: "Control",
    move3desc: "Dodge next attack.",
    move4name: "Dreamlord Dominion",
    move4type: "Ultimate",
    move4desc: "Control battlefield state.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Morpheus"].domainMastery,
    ability1desc: CUSTOM_STATS["Morpheus"].masteryDesc,
    ability2name: CUSTOM_STATS["Morpheus"].specialTrait,
    ability2desc: CUSTOM_STATS["Morpheus"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
  Asclepius: {
    move1name: "Scalpel Strike",
    move1type: "Damage",
    move1desc: "Precise weak attack.",
    move2name: "Restorative Touch",
    move2type: "Heal",
    move2desc: "Strong heal.",
    move3name: "Purifying Salve",
    move3type: "Buff",
    move3desc: "Remove debuffs.",
    move4name: "Miracle Intervention",
    move4type: "Ultimate",
    move4desc: "Revive ally with HP.",
    move1use(attacker, defender) {},
    move2use(attacker, defender) {},
    move3use(attacker, defender) {},
    move4use(attacker, defender) {},
    ability1name: CUSTOM_STATS["Asclepius"].domainMastery,
    ability1desc: CUSTOM_STATS["Asclepius"].masteryDesc,
    ability2name: CUSTOM_STATS["Asclepius"].specialTrait,
    ability2desc: CUSTOM_STATS["Asclepius"].traitDesc,
    ability1use() {},
    ability2use() {},
  },
};

function damageDealt(attacker, defender, multiplier) {
  const attack = attacker.stats.attack;
  const defense = defender.stats.defense;

  const baseDamage = Math.max(5, attack - defense * 0.6);
  const damage = Math.floor(baseDamage * multiplier);

  return damage;
}

function heal(character, multiplier) {
  const power = character.stats.power;

  const healing = Math.floor(power * multiplier);

  return healing;
}

function statusApplied(type, stat, amount, turns) {
  return { type, stat, amount, turns };
}
