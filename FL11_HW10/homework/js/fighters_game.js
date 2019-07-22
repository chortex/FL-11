class Fighter {
  constructor(participant) {
    this.name = participant.name;
    this.damage = participant.damage;
    this.hp = participant.hp;
    this.fullHealth = participant.hp;
    this.agility = participant.agility;
    this.wins = 0;
    this.loses = 0;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getAgility() {
    return this.agility;
  }
  getHealth() {
    return this.hp;
  }
  heal(health) {
    if (health > 0) {
      if (health + this.hp > this.fullHealth) {
        this.hp = this.fullHealth;
      } else {
        this.hp += health;
      }
    }
  }
  dealDamage(health) {
    if (health > 0) {
      if (this.hp - health < 0) {
        this.hp = 0;
      } else {
        this.hp -= health;
      }
    }
  }
  attack(defender) {
    let maxSuccess = 100;
    let successAttack = Math.floor(Math.random() * maxSuccess);
    if (successAttack > defender.getAgility()) {
      defender.dealDamage(this.damage);
      console.log(`${this.name} make\`s ${this.damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.name} attack missed`)
    }
  }
  addWin() {
    this.wins++;
  }
  addLoses() {
    this.loses++;
  }
}

let participant1 = {
  name: 'Yoshimitsu',
  damage: 20,
  hp: 100,
  agility: 25
}
let participant2 = {
  name: 'Eddie',
  damage: 10,
  hp: 120,
  agility: 40
}
let fighter1 = new Fighter(participant1);
let fighter2 = new Fighter(participant2);

function battle(fighter1, fighter2) {
  console.log(`${fighter1.getName()} -VS- ${fighter2.getName()}`);
  console.log('START!');
  if(fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead.`);
    return;
  }
  if(fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead.`);
    return;
  }
  let condition = true;
  let end = 'GAME OVER';
  while(condition) {
    if(fighter1.getHealth() !== 0) {
      fighter1.attack(fighter2);
    } else {
      fighter2.addWin();
      console.log(`${fighter2.getName()} won!`);
      fighter1.addLoses();
      console.log(end);
      break;
    }
    if(fighter2.getHealth() !== 0) {
      fighter2.attack(fighter1);
    } else {
      fighter1.addWin();
      console.log(`${fighter1.getName()} won!`);
      fighter2.addLoses();
      console.log(end);
      break;
    }
  }
}

battle(fighter1, fighter2);
