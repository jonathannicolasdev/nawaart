import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import ArtworkList from "../components/ArtworkList";

import getArtworks from "../redux/actions/getArtworks";

const Artworks = ({ isLoading, artworks, handleGetArtworks }) => {
  useEffect(() => {
    handleGetArtworks();
  }, [handleGetArtworks]);

  return (
    <div>
      <Header></Header>
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
