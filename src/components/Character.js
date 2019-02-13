import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

import TextField from './TextField';

const Character = observer(props => (
  <div className="box">
    <div className="title">
      <button className="delete is-pulled-right" onClick={props.delete} />
    </div>
    <div className="level">
      <TextField
        label="Name"
        onChange={newValue => props.update('name', newValue)}
        value={props.name}
      />
      <TextField
        label="Player"
        onChange={newValue => props.update('player', newValue)}
        value={props.player}
      />
      <TextField
        label="Playbook"
        readonly
        // onChange={newValue => props.update('playbook', newValue)}
        value={props.playbook.name}
      />
      <TextField
        label="Level"
        onChange={newValue => props.update('level', newValue)}
        type="number"
        value={props.level}
      />
      <TextField
        label="XP"
        onChange={newValue => props.update('experience', newValue)}
        type="number"
        value={props.experience}
      />
    </div>
    <div className="level">
      <TextField
        label="Armor"
        onChange={newValue => props.update('armor', newValue)}
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
        onChange={newValue => props.update('currentHP', newValue)}
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
        onChange={newValue => props.update('stats.strength', newValue)}
        tag
        type="number"
        value={props.stats.strength}
      />
      <TextField
        label="Dexterity"
        onChange={newValue => props.update('stats.dexterity', newValue)}
        tag
        type="number"
        value={props.stats.dexterity}
      />
      <TextField
        label="Constitution"
        onChange={newValue => props.update('stats.constitution', newValue)}
        tag
        type="number"
        value={props.stats.constitution}
      />
      <TextField
        label="Intelligence"
        onChange={newValue => props.update('stats.intelligence', newValue)}
        tag
        type="number"
        value={props.stats.intelligence}
      />
      <TextField
        label="Wisdom"
        onChange={newValue => props.update('stats.wisdom', newValue)}
        tag
        type="number"
        value={props.stats.wisdom}
      />
      <TextField
        label="Charisma"
        onChange={newValue => props.update('stats.charisma', newValue)}
        tag
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