import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/Header";
import getArtists from "../redux/actions/getArtists";

const AddArtwork = ({
  isLoading,
  artists,
  isAuthenticated,
  handleGetArtists,
}) => {
  useEffect(() => {
    handleGetArtists();
  }, [handleGetArtists]);

  return (
    <div>
      <Header></Header>

      {isLoading && <p>Loading artists...</p>}

      {!isLoading && artists && <div>Add Artwork Form</div>}
    </div>
  );
};

AddArtwork.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddArtwork);
