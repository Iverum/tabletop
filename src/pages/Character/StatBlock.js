import { observer } from "mobx-react";
import React from "react";

import AbilityScoreTag from "../../components/AbilityScoreTag";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import PLAYBOOKS from "../../constants/playbooks";

const StatBlock = observer(props => (
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
            {...props.character.getAbilityModifier("strength")}
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
            {...props.character.getAbilityModifier("dexterity")}
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
            {...props.character.getAbilityModifier("constitution")}
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
            {...props.character.getAbilityModifier("intelligence")}
          />
        }
        type="number"
        value={props.character.stats.intelligence}
      />
      <TextField
        label="Wisdom"
        onChange={newValue => props.update("stats.wisdom", newValue)}
        tag={
          <AbilityScoreTag {...props.character.getAbilityModifier("wisdom")} />
        }
        type="number"
        value={props.character.stats.wisdom}
      />
      <TextField
        label="Charisma"
        onChange={newValue => props.update("stats.charisma", newValue)}
        tag={
          <AbilityScoreTag
            {...props.character.getAbilityModifier("charisma")}
          />
        }
        type="number"
        value={props.character.stats.charisma}
      />
    </div>
  </div>
));

export default StatBlock;
