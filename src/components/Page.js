import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
