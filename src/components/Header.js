import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { getToken, logout } from "../utils/token";

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
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src="/nawaart-logo.svg" alt="nawaart" />
      </Link>
      <Navigation>
        <Links>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/artworks">Artworks</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {getToken() && (
            <li>
              <span onClick={() => logout(props)}>Logout</span>
            </li>
          )}
        </Links>
      </Navigation>
    </HeaderStyled>
  );
};

export default withRouter(Header);
