import PropTypes from 'prop-types';
import React from 'react';

const Select = props => (
  <div className="field" style={{ marginBottom: '0.75rem' }}>
    <label className="label is-pulled-left">{props.label}</label>
    <div className="control">
      <div className="select">
        <select
          defaultValue={props.value.name}
          onChange={event => props.onChange(event.target.value)}
        >
          {props.options.map(opt => (
            <option key={opt.name}>{opt.name}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

Select.propTypes = {
  label: PropTypes.string.isRequired
};

export default Select;
