import { action, decorate, observable, toJS } from 'mobx';

class Character {
  name = '';
  player = '';
  playbook = '';
  level = 1;
  experience = 1;
}
decorate(Character, {
  experience: observable,
  level: observable,
  name: observable,
  playbook: observable,
  player: observable
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
    this.characters[index][property] = newValue;
    this.saveToLocalStorage();
  };
}

export default decorate(CharacterStore, {
  addCharacter: action,
  characters: observable,
  deleteCharacter: action,
  updateCharacter: action
});
