import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logout from "../redux/actions/logout";

import MenuPanel from "./MenuPanel";

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;
  font-size: 1.5em;
  font-family: "Catamaran";
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
  li {
    margin: 0 20px;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuButton = styled.span`
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Navigation = ({ isAuthenticated, handleLogout }) => {
  const [isMenuPanelVisible, toggleMenuPanelVisible] = useState(true);

  return (
    <>
      <NavigationStyled>
        <Link to="/">
          <img src="/nawaart-logo.svg" alt="nawaart" />
        </Link>
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
          {isAuthenticated && (
            <li>
              <span onClick={() => handleLogout()}>Logout</span>
            </li>
          )}
        </Links>
        <MenuButton onClick={() => toggleMenuPanelVisible(!isMenuPanelVisible)}>
          <img
            src="/icons/menu-icon.svg"
            alt="Menu Icon"
            width={50}
            height={50}
          />
        </MenuButton>
      </NavigationStyled>

      <MenuPanel
        isMenuPanelVisible={isMenuPanelVisible}
        toggleMenuPanelVisible={toggleMenuPanelVisible}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      ></MenuPanel>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(logout()),
  };
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
