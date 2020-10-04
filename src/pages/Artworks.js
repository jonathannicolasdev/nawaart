import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Page from "../components/Page";
import Hero from "../components/Hero";
import Content from "../components/Content";
import ArtworkList from "../components/ArtworkList";
import LinkButton from "../components/LinkButton";

import getArtworks from "../redux/actions/getArtworks";

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
    <Page>
      <Hero
        title="The expression of the artists"
        description="High quality paintings, drawings, and other artistic works"
        coverUrl="/assets/Artworks.jpg"
        backgroundColor="rgba(147, 80, 32, 0.8)"
      ></Hero>

      <Content>
        {isAuthenticated && (
          <LinkButton to="/artworks/add">Add New Artwork</LinkButton>
        )}

        {isLoading && <div>Loading artworks...</div>}

        {!isLoading && artworks && <ArtworkList artworks={artworks} />}
      </Content>
    </Page>
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
