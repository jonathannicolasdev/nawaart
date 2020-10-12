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
  width: 720px;
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000000;
`;

const ArtistPhoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 200px;
  margin-right: 20px;
`;

const ArtworkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 720px;
`;

const ArtworkTitle = styled.h3`
  font-size: 48px;
  max-width: 450px;
`;
const ArtworkYear = styled.h3`
  font-size: 48px;
  color: #aaaaaa;
`;

const ArtworkDetails = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  span {
    line-height: 50px;
  }
  font-weight: ${(props) => props.keys && 700};
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
                <ArtworkHeader>
                  <ArtworkTitle>{artwork.title}</ArtworkTitle>
                  <ArtworkYear>{artwork.year}</ArtworkYear>
                </ArtworkHeader>

                <ArtworkDetails>
                  <Column keys>
                    <span>Artist</span>
                    <span>Country</span>
                    <span>Medium</span>
                    <span>Dimensions</span>
                  </Column>

                  <Column>
                    <ArtistLink to={`/artists/${artwork.artist.slug}`}>
                      <ArtistPhoto
                        src={artwork.artist.photoUrl}
                        alt={artwork.artist.name}
                      />
                      {artwork.artist.name}
                    </ArtistLink>
                    <span>{artwork.country}</span>
                    <span>{artwork.medium || "-"}</span>
                    <span>{artwork.dimensions}</span>
                  </Column>
                </ArtworkDetails>
              </ArtworkSection>
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
