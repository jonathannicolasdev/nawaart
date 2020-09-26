import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import getArtists from "../redux/actions/getArtists";
import Page from "../components/Page";
import AddArtworkForm from "../components/AddArtworkForm";

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

const AddArtwork = ({
  isLoading,
  artists,
  isAuthenticated,
  handleGetArtists,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!artists) {
      handleGetArtists();
    }

    if (artists && artists.length > 0) {
      const newOptions = artists.map((artist) => {
        return {
          value: artist._id,
          label: artist.name,
        };
      });
      setOptions(newOptions);
    }
  }, [handleGetArtists, artists]);

  return (
    <Page>
      {isLoading && <p>Loading artists...</p>}

      {!isLoading && artists && <AddArtworkForm options={options} />}
    </Page>
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
