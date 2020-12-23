import React from "react";
import PropTypes from "prop-types";
import Menu from "components/Menu";

const Header = ({ onChangeTheme }) => {
  return <Menu onChangeTheme={onChangeTheme} />;
};

Header.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
};

Header.defaultProps = {
  onChangeTheme: () => {},
};

export default Header;
