import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Page from "../components/Page";
import Hero from "../components/Hero";
import Content from "../components/Content";
import ArtistList from "../components/ArtistList";
import LinkButton from "../components/LinkButton";

import getArtists from "../redux/actions/getArtists";

const Artists = ({ isLoading, artists, isAuthenticated, handleGetArtists }) => {
  useEffect(() => {
    handleGetArtists();
  }, [handleGetArtists]);

  return (
    <Page>
      <Hero
        title="Discover Bermese artists"
        description="Famous maestro in the making"
        coverUrl="/assets/Artists.jpg"
        backgroundColor="rgba(147, 32, 46, 0.8)"
      ></Hero>

      <Content>
        {isAuthenticated && (
          <LinkButton to="/artists/add">Add New Artist</LinkButton>
        )}

        {isLoading && <p>Loading artists...</p>}

        {!isLoading && artists && <ArtistList artists={artists} />}
      </Content>
    </Page>
  );
};

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  handleGetArtists: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.artists.isLoading,
    artists: state.artists.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetArtists: () => dispatch(getArtists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
