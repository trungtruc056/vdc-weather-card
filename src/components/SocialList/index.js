import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  padding-left: 1rem;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Item key={index}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </Item>
      ))}
    </Wrapper>
  );
};

SocialList.propTypes = {
  data: PropTypes.array,
};

SocialList.defaultProps = {
  data: [],
};

export default SocialList;
