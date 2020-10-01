import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = styled.div`
  height: 100vh;
  background-image: url("/assets/Home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroDetails = styled.div`
  font-family: "Armata";
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 100px;
    margin: 0;
  }
  h2 {
    font-size: 33px;
    margin: 0;
  }
`;

const ActionLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: #890b0b;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const HomePage = () => {
  return (
    <div>
      <Hero>
        <Header />
        <HeroDetails>
          <div>
            <h2>Contemporary</h2>
            <h1>Artworks</h1>
            <h2>From Myanmar</h2>
            <ActionLink>View Catalogue</ActionLink>
          </div>
        </HeroDetails>
        <div>
          <p>Panyan</p>
          <p>the art of bricklaying and masonry</p>
        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default HomePage;
