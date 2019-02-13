import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

const TextField = props => (
  <div className="field" style={{ marginBottom: "0.75rem" }}>
    <label className="label is-pulled-left">{props.label}</label>
    {props.tag}
    <div className="control">
      <input
        className={cn("input", { "is-static": props.readonly })}
        onChange={event =>
          props.onChange(
            props.type === "number" ? +event.target.value : event.target.value
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
  tag: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TextField.defaultProps = {
  placeholder: undefined,
  tag: null,
  type: "text",
  value: undefined
};

export default TextField;
