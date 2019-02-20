import { observer } from "mobx-react";
import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";

import AbilityScoreTag from "../../components/AbilityScoreTag";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import PLAYBOOKS from "../../constants/playbooks";

const Character = observer(props => (
  <section className="box">
    <div className="level">
      <div className="level-item level-left">
        <button
          className="button is-info is-small"
          onClick={() => props.history.push(`/characters/${props.uuid}`)}
        >
          <span className="icon is-small">
            <i className="fas fa-info-circle" />
          </span>
        </button>
        <h1 className="title">{props.name}</h1>
      </div>
      <button
        className="delete level-item level-right"
        onClick={props.delete}
      />
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
        tag={<AbilityScoreTag {...props.getAbilityModifier("strength")} />}
        type="number"
        value={props.stats.strength}
      />
      <TextField
        label="Dexterity"
        onChange={newValue => props.update("stats.dexterity", newValue)}
        tag={<AbilityScoreTag {...props.getAbilityModifier("dexterity")} />}
        type="number"
        value={props.stats.dexterity}
      />
      <TextField
        label="Constitution"
        onChange={newValue => props.update("stats.constitution", newValue)}
        tag={<AbilityScoreTag {...props.getAbilityModifier("constitution")} />}
        type="number"
        value={props.stats.constitution}
      />
      <TextField
        label="Intelligence"
        onChange={newValue => props.update("stats.intelligence", newValue)}
        tag={<AbilityScoreTag {...props.getAbilityModifier("intelligence")} />}
        type="number"
        value={props.stats.intelligence}
      />
      <TextField
        label="Wisdom"
        onChange={newValue => props.update("stats.wisdom", newValue)}
        tag={<AbilityScoreTag {...props.getAbilityModifier("wisdom")} />}
        type="number"
        value={props.stats.wisdom}
      />
      <TextField
        label="Charisma"
        onChange={newValue => props.update("stats.charisma", newValue)}
        tag={<AbilityScoreTag {...props.getAbilityModifier("wisdom")} />}
        type="number"
        value={props.stats.charisma}
      />
    </div>
  </section>
));

Character.propTypes = {
  armor: PropTypes.number.isRequired,
  currentHP: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
  experience: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
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

export default withRouter(Character);
