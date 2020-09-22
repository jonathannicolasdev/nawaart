import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "../components/Header";
import ArtworkList from "../components/ArtworkList";

import getArtworks from "../redux/actions/getArtworks";

const LinkButton = styled(Link)`
  background-color: #333333;
  color: #ffffff;
  padding: 10px 32px;
  text-decoration: none;
`;

const Artworks = ({
  isLoading,
  artworks,
  isAuthenticated,
  handleGetArtworks,
}) => {
  useEffect(() => {
    handleGetArtworks();
  }, [handleGetArtworks]);

  return (
    <div>
      <Header></Header>
      {isAuthenticated && (
        <LinkButton to="/artworks/add">Add New Artwork</LinkButton>
      )}
      {isLoading && <div>Loading artworks...</div>}

      {!isLoading && artworks && <ArtworkList artworks={artworks} />}
    </div>
  );
};

Artworks.propTypes = {
  isLoading: PropTypes.bool,
  artworks: PropTypes.array,
  handleGetArtworks: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.artworks.isLoading,
    artworks: state.artworks.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetArtworks: () => dispatch(getArtworks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);
