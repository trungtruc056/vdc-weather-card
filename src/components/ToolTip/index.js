import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.opacityGrey};
  text-align: ${(props) => props.align};
  visibility: hidden;
  position: absolute;
  z-index: 1000;
  top: 3rem;
  right: 0;
  padding: 0.3125rem;
  width: max-content;
  line-height: 1rem;
  border-radius: 0.25rem;

  ${(props) =>
    props.align === "center" &&
    `
        top: 2.375rem;
        left: 50%;
        transform: translate(-50%);
    `}
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
`;

const InfoList = styled.ul`
  color: ${(props) => props.theme.colors.greyText};
  font-size: 0.875rem;
`;

const Info = styled.li``;

function ToolTip(props) {
  const { align, title, infoList } = props;
  return (
    <Wrapper align={align}>
      <Title>{title}</Title>
      {infoList.length > 0 && (
        <InfoList>
          {infoList.map((item, index) => (
            <Info key={index}>{item}</Info>
          ))}
        </InfoList>
      )}
    </Wrapper>
  );
}

ToolTip.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  infoList: PropTypes.array,
};

ToolTip.defaultProps = {
  align: "left",
  title: "",
  infoList: [],
};

export default ToolTip;
