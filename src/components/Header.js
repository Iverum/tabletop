import PropTypes from "prop-types";
import React from "react";

const Header = props => (
  <div className="level box">
    <div className="field is-grouped">
      <h1 className="title control" style={{ marginBottom: 0 }}>
        {props.title}
      </h1>
      {props.children}
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
