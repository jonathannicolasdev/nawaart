import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Page from "../components/Page";
import AddStoryForm from "../components/AddStoryForm";

const AddStory = ({ isAuthenticated }) => {
  return <Page>{isAuthenticated && <AddStoryForm />}</Page>;
};

AddStory.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(AddStory);
