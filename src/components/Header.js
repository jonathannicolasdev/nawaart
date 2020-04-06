import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Navigation = styled.nav`
  font-size: 1.5em;
  font-family: "Catamaran";
  font-weight: 700;
  letter-spacing: 0.1em;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  li {
    margin: 0 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img src="/nawaart-logo.svg" alt="nawaart" />
      <Navigation>
        <Links>
          <li>Artists</li>
          <li>Artworks</li>
          <li>Stories</li>
          <li>About</li>
        </Links>
      </Navigation>
    </HeaderStyled>
  );
};

export default Header;
