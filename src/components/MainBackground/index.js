import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Background = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.primary};
  background-image: ${(props) => `url(${props.bgUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  top: 0;
  position: fixed;
`;

const BackgroundComponent = (props) => {
  const { bgUrl, bgColor, children } = props;
  return (
    <Background bgUrl={bgUrl} bgColor={bgColor}>
      {children}
    </Background>
  );
};

BackgroundComponent.propTypes = {
  bgUrl: PropTypes.string,
  bgColor: PropTypes.string,
};

BackgroundComponent.defaultProps = {
  bgUrl: "",
  bgColor: "",
};

export default BackgroundComponent;
