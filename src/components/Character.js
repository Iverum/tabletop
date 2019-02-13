import PropTypes from 'prop-types';
import React from 'react';

const TextField = props => (
  <div className="field" style={{ marginBottom: '0.75rem' }}>
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className="input"
        placeholder={props.placeholder || props.label}
        type={props.type}
      />
    </div>
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

TextField.defaultProps = {
  placeholder: undefined,
  type: 'text'
};

const Character = () => (
  <div className="box">
    <div className="level">
      <TextField label="Name" />
      <TextField label="Player" />
      <TextField label="Level" type="number" />
      <TextField label="XP" type="number" />
    </div>
    <div className="level">
      <TextField label="Armor" type="number" />
      <TextField label="Max HP" type="number" />
      <TextField label="Current HP" type="number" />
      <TextField label="Damage" placeholder="Damage Die" />
    </div>
    <div className="level">
      <TextField label="STR" placeholder="Strength Modifier" />
      <TextField label="DEX" placeholder="Dexterity Modifier" />
      <TextField label="CON" placeholder="Constitution Modifier" />
      <TextField label="INT" placeholder="Intelligence Modifier" />
      <TextField label="WIS" placeholder="Wisdom Modifier" />
      <TextField label="CHA" placeholder="Charisma Modifier" />
    </div>
  </div>
);

export default Character;
