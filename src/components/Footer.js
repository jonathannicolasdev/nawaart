import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  margin-top: 100px;
  margin-bottom: 20px;
  text-align: center;
`;

const Footer = () => {
  return <FooterStyled>Copyright &copy; 2020 Nawaart</FooterStyled>;
};

export default Footer;
