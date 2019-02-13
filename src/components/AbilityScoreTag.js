import PropTypes from "prop-types";
import React from "react";

const AbilityScoreTag = props => (
  <span className={`tag is-pulled-right ${props.type}`}>{props.value}</span>
);

AbilityScoreTag.propTypes = {
  type: PropTypes.oneOf(["is-info", "is-danger", "is-link", "is-primary"])
    .isRequired,
  value: PropTypes.oneOf(["+2", "+1", "0", "-1"]).isRequired
};

export default AbilityScoreTag;
