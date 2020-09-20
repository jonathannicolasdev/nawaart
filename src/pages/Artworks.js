import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import getArtworks from "../redux/actions/getArtworks";

const ArtworksGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtworkCard = styled.div`
  margin: 50px;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
`;

const Artworks = ({ isLoading, artworks, handleGetArtworks }) => {
  useEffect(() => {
    handleGetArtworks();
  }, [handleGetArtworks]);

  return (
    <div>
      <Header></Header>
      {isLoading && <div>Loading artworks...</div>}

      {!isLoading && artworks && (
        <ArtworksGallery>
          {artworks.length > 0 ? (
            artworks.map((artwork, index) => {
              return (
                <ArtworkCard key={index}>
                  <Link to={`/artworks/${artwork.slug}`}>
                    <img src={artwork.imageUrl} alt={artwork.title} />
                  </Link>
                  <h3>{artwork.title}</h3>
                </ArtworkCard>
              );
            })
          ) : (
            <div>No artworks found</div>
          )}
        </ArtworksGallery>
      )}
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
