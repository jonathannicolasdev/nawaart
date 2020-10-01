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
  padding: 50px;
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.5em;
  }
`;

const HomePage = () => {
  return (
    <div>
      <Hero>
        <Header />
        <HeroDetails>
          <h2>Contemporary</h2>
          <h1>Artworks</h1>
          <h2>From Myanmar</h2>
          <Link>View Catalogue</Link>
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
