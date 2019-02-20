import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const LinkButton = props => (
  <div className="control">
    <Link
      className={`button is-primary ${props.isActive ? "" : "is-outlined"}`}
      to={props.to}
    >
      {props.label}
    </Link>
  </div>
);

LinkButton.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

LinkButton.defaultProps = {
  isActive: false
};

export default LinkButton;
