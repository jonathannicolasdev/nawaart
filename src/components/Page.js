import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { motion } from "framer-motion";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Main = styled(motion.main)``;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  ease: "anticipate",
  duration: 0.5,
};

const Page = ({ children }) => {
  return (
    <div>
      <Navigation />

      <Main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
        <Footer />
      </Main>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
