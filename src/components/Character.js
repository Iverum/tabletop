import { observer } from "mobx-react";
import PropTypes from "prop-types";
import React from "react";

import PLAYBOOKS from "../constants/playbooks";
import AbilityScoreTag from "./AbilityScoreTag";
import Select from "./Select";
import TextField from "./TextField";

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

const Character = observer(props => (
  <div className="box">
    <div className="title">
      <button className="delete is-pulled-right" onClick={props.delete} />
    </div>
    <div className="level">
      <TextField
        label="Name"
        onChange={newValue => props.update("name", newValue)}
        value={props.name}
      />
      <TextField
        label="Player"
        onChange={newValue => props.update("player", newValue)}
        value={props.player}
      />
      <Select
        label="Playbook"
        onChange={newValue => props.update("playbook", PLAYBOOKS[newValue])}
        options={Object.values(PLAYBOOKS)}
        value={props.playbook}
      />
      <TextField
        label="Level"
        onChange={newValue => props.update("level", newValue)}
        type="number"
        value={props.level}
      />
      <TextField
        label="XP"
        onChange={newValue => props.update("experience", newValue)}
        type="number"
        value={props.experience}
      />
    </div>
    <div className="level">
      <TextField
        label="Armor"
        onChange={newValue => props.update("armor", newValue)}
        type="number"
        value={props.armor}
      />
      <TextField
        label="Max HP"
        readonly
        type="number"
        value={props.playbook.maxHealth + props.stats.constitution}
      />
      <TextField
        label="Current HP"
        onChange={newValue => props.update("currentHP", newValue)}
        type="number"
        value={props.currentHP}
      />
      <TextField
        label="Damage"
        placeholder="Damage Die"
        readonly
        value={props.playbook.damageDie}
      />
    </div>
    <div className="level">
      <TextField
        label="Strength"
        onChange={newValue => props.update("stats.strength", newValue)}
        tag={<AbilityScoreTag {...getAbilityModifier(props.stats.strength)} />}
        type="number"
        value={props.stats.strength}
      />
      <TextField
        label="Dexterity"
        onChange={newValue => props.update("stats.dexterity", newValue)}
        tag={<AbilityScoreTag {...getAbilityModifier(props.stats.dexterity)} />}
        type="number"
        value={props.stats.dexterity}
      />
      <TextField
        label="Constitution"
        onChange={newValue => props.update("stats.constitution", newValue)}
        tag={
          <AbilityScoreTag {...getAbilityModifier(props.stats.constitution)} />
        }
        type="number"
        value={props.stats.constitution}
      />
      <TextField
        label="Intelligence"
        onChange={newValue => props.update("stats.intelligence", newValue)}
        tag={
          <AbilityScoreTag {...getAbilityModifier(props.stats.intelligence)} />
        }
        type="number"
        value={props.stats.intelligence}
      />
      <TextField
        label="Wisdom"
        onChange={newValue => props.update("stats.wisdom", newValue)}
        tag={<AbilityScoreTag {...getAbilityModifier(props.stats.wisdom)} />}
        type="number"
        value={props.stats.wisdom}
      />
      <TextField
        label="Charisma"
        onChange={newValue => props.update("stats.charisma", newValue)}
        tag={<AbilityScoreTag {...getAbilityModifier(props.stats.charisma)} />}
        type="number"
        value={props.stats.charisma}
      />
    </div>
  </div>
));

Character.propTypes = {
  armor: PropTypes.number.isRequired,
  currentHP: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
  experience: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  playbook: PropTypes.shape({
    damageDie: PropTypes.string.isRequired,
    maxHealth: PropTypes.number.isRequired
  }).isRequired,
  player: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    charisma: PropTypes.number,
    constitution: PropTypes.number,
    dexterity: PropTypes.number,
    intelligence: PropTypes.number,
    strength: PropTypes.number,
    wisdom: PropTypes.number
  }),
  update: PropTypes.func.isRequired
};

Character.defaultProps = {
  stats: {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    intelligence: 0,
    strength: 0,
    wisdom: 0
  }
};

export default Character;
