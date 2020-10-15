import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Overlay = styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isMenuPanelVisible }) => !isMenuPanelVisible && "none"};
`;

const MenuPanelStyled = styled.div`
  z-index: 1000;
  background: #fff;
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 50px;
  padding-right: 50px;
  display: ${({ isMenuPanelVisible }) => !isMenuPanelVisible && "none"};
`;

const CloseButton = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-transform: uppercase;
  font-size: 1.5em;
  font-family: "Catamaran";
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
  li {
    margin: 0;
    cursor: pointer;
  }
  a,
  span {
    color: black;
    text-decoration: none;
    line-height: 3em;
  }
`;

const MenuPanel = ({
  isMenuPanelVisible,
  toggleMenuPanelVisible,
  isAuthenticated,
  handleLogout,
}) => {
  return (
    <>
      <Overlay isMenuPanelVisible={isMenuPanelVisible}></Overlay>

      <MenuPanelStyled isMenuPanelVisible={isMenuPanelVisible}>
        <CloseButton
          onClick={() => toggleMenuPanelVisible(!isMenuPanelVisible)}
        >
          <img
            src="/icons/close-icon.svg"
            alt="Close Icon"
            width={50}
            height={50}
          />
        </CloseButton>
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
      </MenuPanelStyled>
    </>
  );
};

MenuPanel.propTypes = {
  isMenuPanelVisible: PropTypes.bool,
  toggleMenuPanelVisible: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  handleLogout: PropTypes.func,
};

export default MenuPanel;
