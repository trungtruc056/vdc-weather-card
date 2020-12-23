import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "components/Icon";
import iconMoon from "assets/icons/moon.svg";
import iconSun from "assets/icons/sun.svg";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkgrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.25rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.75rem;
  position: relative;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  left: 0;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => (props.lightMode ? "left: 2.5rem" : "left: 0")};
`;

const SwitchThemeButton = ({ onChangeTheme }) => {
  const [lightMode, setLightMode] = useState(true);

  const handleSwitch = () => {
    onChangeTheme(!lightMode);
    setLightMode(!lightMode);
  };

  return (
    <Wrapper onClick={handleSwitch}>
      <Icon iconUrl={iconMoon} iconSize={1.2} />
      <ToggleButton lightMode={lightMode} />
      <Icon iconUrl={iconSun} iconSize={1.2} />
    </Wrapper>
  );
};

SwitchThemeButton.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
};

SwitchThemeButton.defaultProps = {
  onChangeTheme: () => {},
};

export default SwitchThemeButton;
