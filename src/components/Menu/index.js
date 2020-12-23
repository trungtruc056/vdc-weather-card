import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MyAccount from "components/MyAccount";
import SocialList from "components/SocialList";
import myData from "utils/myData";
import Icon from "components/Icon";
import iconCV from "assets/icons/cv.svg";
import SwitchThemeButton from "components/SwitchThemeButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const Item = styled.div`
  padding-left: 1rem;

  ${(props) =>
    props.hover &&
    `
        background-color: ${props.theme.colors.iconBg};
        padding-left: 0;
        margin-left: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: ${props.theme.colors.opacityGrey};
        }
    `}
`;

const Menu = ({ onChangeTheme }) => {
  return (
    <Wrapper>
      <Item>
        <SwitchThemeButton onChangeTheme={onChangeTheme} />
      </Item>
      <Item>
        <SocialList data={myData.socials} />
      </Item>
      <Item hover>
        <a href={myData.cvUrl} target="_blank" rel="noopener noreferrer">
          <Icon iconUrl={iconCV} iconSize={1.5} showToolTip text="Resume" />
        </a>
      </Item>
      <Item>
        <MyAccount />
      </Item>
    </Wrapper>
  );
};

Menu.propTypes = {
  onChangeTheme: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  onChangeTheme: () => {},
};

export default Menu;
