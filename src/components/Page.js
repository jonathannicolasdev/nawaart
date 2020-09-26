import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
