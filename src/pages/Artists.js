import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Page from "../components/Page";
import Hero from "../components/Hero";
import ArtistList from "../components/ArtistList";

import getArtists from "../redux/actions/getArtists";

const LinkButton = styled(Link)`
  background-color: #333333;
  color: #ffffff;
  padding: 10px 32px;
  text-decoration: none;
`;

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
      {isAuthenticated && (
        <LinkButton to="/artists/add">Add New Artist</LinkButton>
      )}

      {isLoading && <p>Loading artists...</p>}

      {!isLoading && artists && <ArtistList artists={artists} />}
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
