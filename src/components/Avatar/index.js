import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ToolTip from "components/ToolTip";
import avt from "assets/images/avatar.jpg";

const Wrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightenGrey};

    > div {
      visibility: visible;
    }
  }
`;

const Avatar = styled.div`
  background-image: ${(props) => `url(${props.avatarUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const AvatarComponent = (props) => {
  const {
    avatarUrl,
    firstName,
    lastName,
    jobPosition,
    gmailUrl,
    showToolTip,
  } = props;
  const infoList = [jobPosition, gmailUrl];
  return (
    <Wrapper>
      <Avatar avatarUrl={avatarUrl} />
      {showToolTip && (
        <ToolTip title={`${lastName} ${firstName}`} infoList={infoList} />
      )}
    </Wrapper>
  );
};

AvatarComponent.propTypes = {
  avatarUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  jobPosition: PropTypes.string,
  gmailUrl: PropTypes.string,
  showToolTip: PropTypes.bool,
};

AvatarComponent.defaultProps = {
  avatarUrl: avt,
  showToolTip: false,
  firstName: "Trung Trực",
  lastName: "Võ",
  jobPosition: "Software Engineer",
  gmailUrl: "trungtruc056@gmail.com",
};

export default AvatarComponent;
