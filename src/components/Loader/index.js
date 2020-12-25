import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
border-radius: 50%;
border: 4px solid #fff;
border-top: 4px solid ${(props) => props.theme.colors.blueLoader};
border-bottom: 4px solid ${(props) => props.theme.colors.blueLoader};
width: 1.5rem;
height: 1.5rem;
-webkit-animation: spin 1s linear infinite;
animation: spin 1s linear infinite;

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

${(props) =>
    props.size === 'large' && `
    border: 8px solid #fff;
    border-top: 8px solid ${props.theme.colors.blueLoader};
    border-bottom: 8px solid ${props.theme.colors.blueLoader};
    width: 2.5rem;
    height: 2.5rem;
  `}
`;

const Loader = ({ size }) => {
  return <Wrapper size={size} />;
};

Loader.propTypes = {
  size: PropTypes.string
};

Loader.defaultProps = {
  size: ''
};

export default Loader;
