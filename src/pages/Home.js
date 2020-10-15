import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageSpecial from "../components/PageSpecial";
import Navigation from "../components/Navigation";

const Hero = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("/assets/Home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  font-family: "Armata";
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const Big = styled.span`
  font-size: 150px;
  @media (max-width: 1024px) {
    font-size: 100px;
  }
  @media (max-width: 425px) {
    font-size: 60px;
  }
`;

const Small = styled.span`
  font-size: 50px;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const ActionLink = styled(Link)`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  background-color: #890b0b;
  margin: 10px;
  padding: 10px 30px;
  border-radius: 5px;
`;

const Meta = styled.div`
  color: #fff;
  font-family: "Armata";
  margin-left: 50px;
  margin-bottom: 50px;
  h2 {
    font-size: 30px;
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 20px;
  }
`;

const HomePage = () => {
  return (
    <PageSpecial>
      <Hero>
        <Navigation />
        <Header>
          <div>
            <Heading>
              <Small>Contemporary</Small>
              <Big>Artworks</Big>
              <Small>From Myanmar</Small>
            </Heading>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ActionLink to="/artworks">View Catalogue</ActionLink>
            </motion.div>
          </div>
        </Header>
        <Meta>
          <h2>Panyan</h2>
          <p>the art of bricklaying and masonry</p>
        </Meta>
      </Hero>
    </PageSpecial>
  );
};

export default HomePage;
