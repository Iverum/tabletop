import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

const TextField = props => (
  <div className="field" style={{ marginBottom: '0.75rem' }}>
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className="input"
        onChange={event =>
          props.onChange(
            props.type === 'number' ? +event.target.value : event.target.value
          )
        }
        placeholder={props.placeholder || props.label}
        type={props.type}
        value={props.value}
      />
    </div>
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextField.defaultProps = {
  placeholder: undefined,
  type: 'text',
  value: undefined
};

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
        onChange={newValue => props.update('playbook', newValue)}
        value={props.playbook}
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
        onChange={newValue => props.update('maxHP', newValue)}
        type="number"
        value={props.maxHP}
      />
      <TextField
        label="Current HP"
        onChange={newValue => props.update('currentHP', newValue)}
        type="number"
        value={props.currentHP}
      />
      <TextField
        label="Damage"
        onChange={newValue => props.update('damageDie', newValue)}
        placeholder="Damage Die"
        value={props.damageDie}
      />
    </div>
    <div className="level">
      <TextField
        label="Strength"
        onChange={newValue => props.update('stats.strength', newValue)}
        type="number"
        value={props.stats.strength}
      />
      <TextField
        label="Dexterity"
        onChange={newValue => props.update('stats.dexterity', newValue)}
        type="number"
        value={props.stats.dexterity}
      />
      <TextField
        label="Constitution"
        onChange={newValue => props.update('stats.constitution', newValue)}
        type="number"
        value={props.stats.constitution}
      />
      <TextField
        label="Intelligence"
        onChange={newValue => props.update('stats.intelligence', newValue)}
        type="number"
        value={props.stats.intelligence}
      />
      <TextField
        label="Wisdom"
        onChange={newValue => props.update('stats.wisdom', newValue)}
        type="number"
        value={props.stats.wisdom}
      />
      <TextField
        label="Charisma"
        onChange={newValue => props.update('stats.charisma', newValue)}
        type="number"
        value={props.stats.charisma}
      />
    </div>
  </div>
));

Character.propTypes = {
  armor: PropTypes.number.isRequired,
  currentHP: PropTypes.number.isRequired,
  damageDie: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
  experience: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxHP: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  playbook: PropTypes.string.isRequired,
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
