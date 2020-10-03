import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

import Footer from "./Footer";

const Main = styled(motion.main)``;

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  ease: "anticipate",
  duration: 0.5,
};

const PageSpecial = ({ children }) => {
  return (
    <div>
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

PageSpecial.propTypes = {
  children: PropTypes.any,
};

export default PageSpecial;
