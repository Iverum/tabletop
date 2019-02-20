import random from "lodash/random";
import shuffle from "lodash/shuffle";
import { action, decorate, observable } from "mobx";
import uuid from "uuid/v4";

import PLAYBOOKS from "../constants/playbooks";

const STARTING_ARRAY = [16, 15, 13, 12, 9, 8];

class Character {
  uuid = null;
  name = "";
  player = "";
  playbook = null;
  level = 1;
  experience = 1;

  armor = 0;
  currentHP = 10;

  stats = observable({
    charisma: 10,
    constitution: 10,
    dexterity: 10,
    intelligence: 10,
    strength: 10,
    wisdom: 10
  });

  constructor(existingCharacter) {
    if (!existingCharacter) {
      this.uuid = uuid();
      const shuffledStats = shuffle(STARTING_ARRAY);
      this.stats.charisma = shuffledStats.pop();
      this.stats.constitution = shuffledStats.pop();
      this.stats.dexterity = shuffledStats.pop();
      this.stats.intelligence = shuffledStats.pop();
      this.stats.strength = shuffledStats.pop();
      this.stats.wisdom = shuffledStats.pop();

      const playbooks = Object.values(PLAYBOOKS);
      const randomPlaybook = playbooks[random(0, playbooks.length - 1)];
      this.name =
        randomPlaybook.names[random(0, randomPlaybook.names.length - 1)];
      this.updatePlaybook(randomPlaybook);
    } else {
      this.uuid = existingCharacter.uuid;
      this.name = existingCharacter.name;
      this.player = existingCharacter.player;
      this.level = existingCharacter.level;
      this.experience = existingCharacter.experience;
      this.armor = existingCharacter.armor;
      this.currentHP = existingCharacter.currentHP;
      this.stats.charisma = existingCharacter.stats.charisma;
      this.stats.constitution = existingCharacter.stats.constitution;
      this.stats.dexterity = existingCharacter.stats.dexterity;
      this.stats.intelligence = existingCharacter.stats.intelligence;
      this.stats.strength = existingCharacter.stats.strength;
      this.stats.wisdom = existingCharacter.stats.wisdom;
      this.updatePlaybook(existingCharacter.playbook);
    }
  }

  updatePlaybook = newPlaybook => {
    this.playbook = newPlaybook;
    this.currentHP = this.playbook.maxHealth + this.stats.constitution;
  };
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
  stats: observable,
  updatePlaybook: action,
  uuid: observable
});
