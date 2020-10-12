import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";

import styled from "styled-components";

import Page from "../components/Page";
import ErrorHeading from "../components/ErrorHeading";

import getArtwork from "../redux/actions/getArtwork";
import removeArtwork from "../redux/actions/removeArtwork";

const Button = styled.button`
  cursor: pointer;
  background-color: #990000;
  border: none;
  color: #ffffff;
  padding: 10px 32px;
`;

const ArtworkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ArtworkSection = styled.section`
  margin-bottom: 100px;
`;

const ArtworkImage = styled.img`
  max-width: 720px;
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
`;

const ArtistPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 200px;
`;

const Artwork = ({
  isLoading,
  error,
  artwork,
  isAuthenticated,
  handleGetArtwork,
  handleRemoveArtwork,
}) => {
  const { slug } = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetArtwork(slug);
  }, [handleGetArtwork, slug]);

  const removeArtworkAndRedirect = async () => {
    await handleRemoveArtwork(slug);
    history.push("/artworks");
  };

  return (
    <Page>
      {!isLoading && error && (
        <ErrorHeading>Sorry, artwork not found.</ErrorHeading>
      )}

      {isAuthenticated && !isLoading && !error && artwork && (
        <Button onClick={removeArtworkAndRedirect}>Remove Artwork</Button>
      )}

      {!isLoading && !error && artwork && (
        <ArtworkContainer>
          {artwork ? (
            <div>
              <ArtworkSection>
                <ArtworkImage src={artwork.imageUrl} alt={artwork.title} />
                <h3>{artwork.title}</h3>
                <span>{artwork.year}</span>
                <span>{artwork.dimensions}</span>
                <span>{artwork.country}</span>
              </ArtworkSection>

              <ArtistLink to={`/artists/${artwork.artist.slug}`}>
                <ArtistPhoto
                  src={artwork.artist.photoUrl}
                  alt={artwork.artist.name}
                />
                <h3>{artwork.artist.name}</h3>
              </ArtistLink>
            </div>
          ) : (
            <div>
              <h3>Artwork not found</h3>
            </div>
          )}
        </ArtworkContainer>
      )}
    </Page>
  );
};

Artwork.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.any,
  artwork: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  handleGetArtwork: PropTypes.func,
  handleRemoveArtwork: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.artwork.isLoading,
    error: state.artwork.error,
    artwork: state.artwork.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetArtwork: (slug) => dispatch(getArtwork(slug)),
    handleRemoveArtwork: (slug) => dispatch(removeArtwork(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
