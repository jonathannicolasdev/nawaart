import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import getArtists from "../redux/actions/getArtists";

const ArtistsGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtistCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px;
  h3 {
    text-align: center;
  }
`;

const ArtistImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

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
    <div>
      <Header></Header>
      {isAuthenticated && (
        <LinkButton to="/artists/add">Add New Artist</LinkButton>
      )}

      {isLoading && <p>Loading Artists...</p>}

      {!isLoading && (
        <ArtistsGallery>
          {artists.length > 0 ? (
            artists.map((artist, index) => {
              return (
                <ArtistCard key={index}>
                  <Link to={`/artists/${artist.slug}`}>
                    <ArtistImage src={artist.photoUrl}></ArtistImage>
                  </Link>
                  <h3>{artist.name}</h3>
                </ArtistCard>
              );
            })
          ) : (
            <div>No artists found</div>
          )}
        </ArtistsGallery>
      )}
    </div>
  );
};

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.array,
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
