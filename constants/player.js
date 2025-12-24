export const PLAYER_ONE = {
  name: "kishi",
  id: 13579,
  username: "kishi@2",
  totalScore: 150,
  hp: 100,
  maxhp: 100,
  stats: {
    resilience: 0,
    exhaustion: 0,
    defense: 0,
  },
  imgSrc: "../assets/kishi-avatar.png",
  updateScore(points) {
    this.totalScore += points;
    return this.totalScore;
  },
  loseHealth(attack) {
    this.hp -=
      (attack * this.stats.exhaustion - this.stats.defense) /
      this.stats.resilience;
  },
  gainHealth(healing) {
    this.hp += (healing / this.stats.exhaustion) * this.stats.resilience;
  },
};

export const PLAYER_TWO = {
  name: "pluto",
  id: 24680,
  username: "pluto@19",
  totalScore: 0,
  hp: 100,
  maxhp: 100,
  stats: {
    resilience: 0,
    exhaustion: 0,
    defense: 0,
  },
  imgSrc: "../assets/pluto-avatar.png",
  updateScore(points) {
    this.totalScore += points;
    return this.totalScore;
  },
  loseHealth(attack) {
    this.hp -=
      (attack * this.stats.exhaustion - this.stats.defense) /
      this.stats.resilience;
  },
  gainHealth(healing) {
    this.hp += (healing / this.stats.exhaustion) * this.stats.resilience;
  },
};
