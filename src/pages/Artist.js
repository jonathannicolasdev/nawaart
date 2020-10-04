import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Page from "../components/Page";
import Content from "../components/Content";
import ErrorHeading from "../components/ErrorHeading";
import ArtistProfile from "../components/ArtistProfile";
import Button from "../components/Button";

import getArtist from "../redux/actions/getArtist";
import removeArtist from "../redux/actions/removeArtist";

const Artist = ({
  isLoading,
  error,
  artist,
  isAuthenticated,
  handleGetArtist,
  handleRemoveArtist,
}) => {
  const { slug } = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetArtist(slug);
  }, [handleGetArtist, slug]);

  const removeArtistAndRedirect = async () => {
    await handleRemoveArtist(slug);
    history.push("/artists");
  };

  return (
    <Page>
      <Content>
        {!isLoading && error && (
          <ErrorHeading>Sorry, artist not found.</ErrorHeading>
        )}

        {!isLoading && artist && (
          <Button onClick={removeArtistAndRedirect}>Remove Artist</Button>
        )}

        {!isLoading && artist && <ArtistProfile artist={artist} />}
      </Content>
    </Page>
  );
};

Artist.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.any,
  artist: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  handleGetArtist: PropTypes.func,
  handleRemoveArtist: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.artist.isLoading,
    error: state.artist.error,
    artist: state.artist.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetArtist: (slug) => dispatch(getArtist(slug)),
    handleRemoveArtist: (slug) => dispatch(removeArtist(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
