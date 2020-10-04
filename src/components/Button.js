import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #333333;
  color: #ffffff;
  padding: 10px 32px;
  border: 0;
  text-decoration: none;
`;

const Button = ({ onClick, children }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </motion.div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Button;
