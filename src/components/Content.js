import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

Content.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Content;
