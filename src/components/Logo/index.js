import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  font-size: 4rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  line-height: 5rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 3rem;

  @media screen and (min-width: ${(props) =>
    props.theme.responsive.tabletS}rem) {
    margin-top: 4.375rem;
  }
`;

const Logo = () => {
  return <Wrapper>Weather Card</Wrapper>;
};

export default Logo;
