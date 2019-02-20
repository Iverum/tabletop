import { inject, observer } from "mobx-react";
import React from "react";

import AbilityScoreTag from "../components/AbilityScoreTag";
import Header from "../components/Header";
import Select from "../components/Select";
import TextField from "../components/TextField";
import PLAYBOOKS from "../constants/playbooks";

function getAbilityModifier(abilityScore) {
  if (abilityScore >= 16) {
    return { type: "is-primary", value: "+2" };
  } else if (abilityScore <= 8) {
    return { type: "is-danger", value: "-1" };
  } else if (abilityScore > 8 && abilityScore <= 12) {
    return { type: "is-info", value: "0" };
  } else if (abilityScore > 12 && abilityScore <= 16) {
    return { type: "is-link", value: "+1" };
  }
}

const Character = inject((stores, ownProps) => {
  const {
    characterStore: { characters, updateCharacter }
  } = stores;

  const characterIndex = characters.findIndex(
    c => c.uuid === ownProps.match.params.uuid
  );

  return {
    character: characters[characterIndex],
    update: (property, newValue) =>
      updateCharacter(characterIndex, property, newValue)
  };
})(
  observer(props => (
    <section className="section">
      <Header title={props.character.name} />
      <div className="box">
        <div className="level">
          <TextField
            label="Name"
            onChange={newValue => props.update("name", newValue)}
            value={props.character.name}
          />
          <TextField
            label="Player"
            onChange={newValue => props.update("player", newValue)}
            value={props.character.player}
          />
          <Select
            label="Playbook"
            onChange={newValue => props.update("playbook", PLAYBOOKS[newValue])}
            options={Object.values(PLAYBOOKS)}
            value={props.character.playbook}
          />
          <TextField
            label="Level"
            onChange={newValue => props.update("level", newValue)}
            type="number"
            value={props.character.level}
          />
          <TextField
            label="XP"
            onChange={newValue => props.update("experience", newValue)}
            type="number"
            value={props.character.experience}
          />
        </div>
        <div className="level">
          <TextField
            label="Armor"
            onChange={newValue => props.update("armor", newValue)}
            type="number"
            value={props.character.armor}
          />
          <TextField
            label="Max HP"
            readonly
            type="number"
            value={
              props.character.playbook.maxHealth +
              props.character.stats.constitution
            }
          />
          <TextField
            label="Current HP"
            onChange={newValue => props.update("currentHP", newValue)}
            type="number"
            value={props.character.currentHP}
          />
          <TextField
            label="Damage"
            placeholder="Damage Die"
            readonly
            value={props.character.playbook.damageDie}
          />
        </div>
        <div className="level">
          <TextField
            label="Strength"
            onChange={newValue => props.update("stats.strength", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.strength)}
              />
            }
            type="number"
            value={props.character.stats.strength}
          />
          <TextField
            label="Dexterity"
            onChange={newValue => props.update("stats.dexterity", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.dexterity)}
              />
            }
            type="number"
            value={props.character.stats.dexterity}
          />
          <TextField
            label="Constitution"
            onChange={newValue => props.update("stats.constitution", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.constitution)}
              />
            }
            type="number"
            value={props.character.stats.constitution}
          />
          <TextField
            label="Intelligence"
            onChange={newValue => props.update("stats.intelligence", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.intelligence)}
              />
            }
            type="number"
            value={props.character.stats.intelligence}
          />
          <TextField
            label="Wisdom"
            onChange={newValue => props.update("stats.wisdom", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.wisdom)}
              />
            }
            type="number"
            value={props.character.stats.wisdom}
          />
          <TextField
            label="Charisma"
            onChange={newValue => props.update("stats.charisma", newValue)}
            tag={
              <AbilityScoreTag
                {...getAbilityModifier(props.character.stats.charisma)}
              />
            }
            type="number"
            value={props.character.stats.charisma}
          />
        </div>
      </div>
    </section>
  ))
);

export default Character;
