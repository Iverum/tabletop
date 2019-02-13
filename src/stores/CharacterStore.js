import set from 'lodash/set';
import { action, decorate, observable, toJS } from 'mobx';

import Character from '../models/Character';

class CharacterStore {
  characters = [];

  constructor() {
    this.characters.push(
      ...JSON.parse(localStorage.getItem('characters') || '[]').map(
        c => new Character(c)
      )
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
    if (property === 'playbook') {
      this.characters[index].updatePlaybook(newValue);
    }

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
