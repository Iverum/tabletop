import { action, decorate, observable } from 'mobx';

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

  addCharacter = () => this.characters.push(new Character());
}

export default decorate(CharacterStore, {
  addCharacter: action,
  characters: observable
});
