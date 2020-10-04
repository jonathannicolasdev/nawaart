import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import Content from "../components/Content";
import ArtistProfile from "../components/ArtistProfile";
// import LinkButton from "../components/LinkButton";

import getArtist from "../redux/actions/getArtist";

const Artist = ({ isLoading, artist, isAuthenticated, handleGetArtist }) => {
  const { slug } = useParams();

  useEffect(() => {
    handleGetArtist(slug);
  }, [handleGetArtist, slug]);

  return (
    <Page>
      <Content>
        {/* {<ErrorHeading>Sorry, artist not found.</ErrorHeading>} */}

        {/* {!error && artist && (
          <LinkButton onClick={handleRemoveArtist}>Remove Artist</LinkButton>
        )} */}

        {!isLoading && artist && <ArtistProfile artist={artist} />}
      </Content>
    </Page>
  );
};

Artist.propTypes = {
  isLoading: PropTypes.bool,
  artist: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  handleGetArtist: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.artist.isLoading,
    artist: state.artist.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetArtist: (slug) => dispatch(getArtist(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
