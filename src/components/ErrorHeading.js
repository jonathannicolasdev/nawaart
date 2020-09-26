import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorHeading = ({ children }) => {
  return (
    <Center>
      <h1>{children}</h1>
    </Center>
  );
};

ErrorHeading.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ErrorHeading;
