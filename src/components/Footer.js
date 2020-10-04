import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  margin-top: 100px;
  background-color: #d6b48c;
  color: #55270d;
`;

const Sitemap = styled.div`
  display: flex;
  justify-content: center;
`;

const SitemapColumn = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px;
  h3 {
    font-size: 18px;
    text-transform: uppercase;
    margin: 0;
  }
  li {
    font-size: 18px;
    margin: 10px;
  }
`;

const SocialMedia = styled.p`
  text-align: center;
  margin: 10px;
`;

const Copyright = styled.p`
  text-align: center;
  padding: 50px 0;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Sitemap>
        <SitemapColumn>
          <li>
            <h3> Nawaart</h3>
          </li>
          <li>About</li>
          <li>Stories</li>
        </SitemapColumn>
        <SitemapColumn>
          <li>
            <h3>Content</h3>
          </li>
          <li>Artists</li>
          <li>Artworks</li>
        </SitemapColumn>
      </Sitemap>
      <SocialMedia>
        <img src="/assets/Instagram.svg" />
      </SocialMedia>
      <Copyright>Copyright &copy; 2020 Nawaart</Copyright>
    </FooterStyled>
  );
};

export default Footer;
