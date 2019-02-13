import random from 'lodash/random';
import { decorate, observable } from 'mobx';

export const Playbooks = {
  Barbarian: { damageDie: 'd10', maxHealth: 9, name: 'Barbarian' },
  Immolator: { damageDie: 'd8', maxHealth: 4, name: 'Immolator' },
  Wizard: { damageDie: 'd4', maxHealth: 4, name: 'Wizard' }
};

class Character {
  name = '';
  player = '';
  playbook = null;
  level = 1;
  experience = 1;

  armor = 0;
  maxHP = 10;
  currentHP = 10;

  stats = observable({
    charisma: 10,
    constitution: 10,
    dexterity: 10,
    intelligence: 10,
    strength: 10,
    wisdom: 10
  });

  constructor() {
    const playbooks = Object.values(Playbooks);
    const randomPlaybook = playbooks[random(0, playbooks.length - 1)];
    this.playbook = randomPlaybook;
    this.currentHP = this.playbook.maxHealth + this.stats.constitution;
  }
}

export default decorate(Character, {
  armor: observable,
  currentHP: observable,
  damageDie: observable,
  experience: observable,
  level: observable,
  maxHP: observable,
  name: observable,
  playbook: observable,
  player: observable,
  stats: observable
});
