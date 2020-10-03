import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const HeroStyled = styled.div`
  display: flex;
  justify-content: center;
  color: #ffffff;
  padding: 50px 0px;
  background: linear-gradient(
      0deg,
      ${(props) => props.backgroundColor},
      ${(props) => props.backgroundColor}
    ),
    url(${(props) => props.coverUrl});
  h1 {
    font-size: 50px;
    margin-bottom: 10px;
    margin-top: 0px;
  }
  p {
    font-size: 24px;
    margin: 0;
  }
`;

const Hero = ({ title, description, coverUrl, backgroundColor }) => {
  return (
    <HeroStyled coverUrl={coverUrl} backgroundColor={backgroundColor}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </HeroStyled>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Hero;
