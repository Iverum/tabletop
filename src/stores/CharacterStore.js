import set from 'lodash/set';
import { action, decorate, observable, toJS } from 'mobx';

class Character {
  name = '';
  player = '';
  playbook = '';
  level = 1;
  experience = 1;

  armor = 0;
  maxHP = 10;
  currentHP = 10;
  damageDie = 'd6';

  stats = observable({
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  });
}
decorate(Character, {
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

class CharacterStore {
  characters = [];

  constructor() {
    this.characters.push(
      ...JSON.parse(localStorage.getItem('characters') || '[]')
    );
  }

  addCharacter = () => {
    this.characters.push(new Character());
    this.saveToLocalStorage();
  };

  deleteCharacter = index => {
    this.characters.splice(index, 1);
    this.saveToLocalStorage();
  };

  saveToLocalStorage = () =>
    localStorage.setItem('characters', JSON.stringify(toJS(this.characters)));

  updateCharacter = (index, property, newValue) => {
    set(this.characters[index], property, newValue);
    this.saveToLocalStorage();
  };
}

export default decorate(CharacterStore, {
  addCharacter: action,
  characters: observable,
  deleteCharacter: action,
  updateCharacter: action
});
