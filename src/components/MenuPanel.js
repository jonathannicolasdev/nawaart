import React, { useRef, useEffect } from "react";
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
  padding-top: 20px;
  padding-right: 20px;
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
  const node = useRef();

  const handleClickOutside = (e) => {
    // When inside click happens, don't do anything
    if (node.current.contains(e.target)) return;
    // When outside click happens, do something
    toggleMenuPanelVisible(false);
  };

  useEffect(() => {
    if (isMenuPanelVisible)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <Overlay isMenuPanelVisible={isMenuPanelVisible}></Overlay>

      <MenuPanelStyled ref={node} isMenuPanelVisible={isMenuPanelVisible}>
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
