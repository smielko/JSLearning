function GenerateRandom(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      log : []
    };
  },
  methods: {
    PlayerAttack() {
      this.currentRound++;
      const damageValue = GenerateRandom(0, 12);
      this.monsterHealth -= damageValue;
      this.MonsterAttack();
      this.logInformation('player','damage',damageValue)
    },
    MonsterAttack() {
      const damageValue = GenerateRandom(3, 23);
      this.playerHealth -= damageValue;
      this.logInformation('monster','damages',damageValue)
    },
    PlayerSpecialAttack() {
      this.currentRound++;
      const damageValue = GenerateRandom(10, 25);
      this.monsterHealth -= damageValue;
      this.MonsterAttack();
      this.logInformation('player','damage',damageValue)
    },
    PlayerHeal() {
      const healValue = GenerateRandom(10, 25);
      if (this.playerHealth + healValue > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;
      this.currentRound++;
      this.MonsterAttack();
      this.logInformation('player','heal',healValue)
    },
    ResetGame()
    {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.log = [];
    },
    Surrender()
    {
      this.winner = 'monster';
    },
    logInformation(who, what, howMuch)
    {
      this.log.unshift({
        actionBy: who,
        actionType: what,
        actionValue: howMuch
      });
    }
  },
  computed: {
    monsterHealthbarStyle() {
      if (this.winner === "player" || this.winner === "draw")
        return { width: 0 + "%" };
      else return { width: this.monsterHealth + "%" };
    },
    playerHealthbarStyle() {
      if (this.winner === "monster" || this.winner === "draw")
        return { width: 0 + "%" };
      else return { width: this.playerHealth + "%" };
    },
    specialAttackReady() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) this.winner = "draw";
      else if (value <= 0) this.winner = "monster";
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) this.winner = "draw";
      else if (value <= 0) this.winner = "player";
    },
  },
}).mount("#game");
