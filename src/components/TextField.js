import PropTypes from 'prop-types';
import React from 'react';

function getAbilityModifier(abilityScore) {
  if (abilityScore >= 16) {
    return { type: 'is-primary', value: '+2' };
  } else if (abilityScore <= 8) {
    return { type: 'is-danger', value: '-1' };
  } else if (abilityScore > 8 && abilityScore <= 12) {
    return { type: 'is-info', value: '0' };
  } else if (abilityScore > 12 && abilityScore <= 16) {
    return { type: 'is-link', value: '+1' };
  }
}

const AbilityScoreTag = props => (
  <span className={`tag is-pulled-right ${props.type}`}>{props.value}</span>
);

const TextField = props => (
  <div className="field" style={{ marginBottom: '0.75rem' }}>
    <label className="label is-pulled-left">{props.label}</label>
    {props.tag && <AbilityScoreTag {...getAbilityModifier(props.value)} />}
    <div className="control">
      <input
        className="input"
        onChange={event =>
          props.onChange(
            props.type === 'number' ? +event.target.value : event.target.value
          )
        }
        placeholder={props.placeholder || props.label}
        readOnly={props.readonly}
        type={props.type}
        value={props.value}
      />
    </div>
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  tag: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextField.defaultProps = {
  placeholder: undefined,
  tag: false,
  type: 'text',
  value: undefined
};

export default TextField;
