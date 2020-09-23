import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "react-select";

import Header from "../components/Header";
import getArtists from "../redux/actions/getArtists";
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
    <div>
      <Header></Header>

      {isLoading && <p>Loading artists...</p>}

      {!isLoading && artists && <div>Add Artwork Form</div>}

      {options.length > 0 && <Select options={options} />}
      <AddArtworkForm></AddArtworkForm>
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
