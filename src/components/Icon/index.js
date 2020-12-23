import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ToolTip from "components/ToolTip";

const Wrapper = styled.div`
  position: relative;

  ${(props) =>
    props.hover &&
    `
        &:hover {
            background-color: ${(props) => props.theme.colors.lightenGrey};

            > div {
                visibility: visible;
            }
        }
    `}
`;

const Icon = styled.div`
  background-image: ${(props) => `url(${props.iconUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: ${(props) => props.iconSize}rem;
  height: ${(props) => props.iconSize}rem;
`;

const IconComponent = (props) => {
  const { iconUrl, iconSize, showToolTip, text } = props;
  return (
    <Wrapper hover={showToolTip}>
      <Icon iconUrl={iconUrl} iconSize={iconSize} />
      {showToolTip && <ToolTip title={text} align="center" />}
    </Wrapper>
  );
};

IconComponent.propTypes = {
  iconUrl: PropTypes.string,
  iconSize: PropTypes.number,
  showToolTip: PropTypes.bool,
  text: PropTypes.string,
};

IconComponent.defaultProps = {
  iconUrl: "",
  iconSize: 1,
  showToolTip: false,
  text: "",
};

export default IconComponent;
