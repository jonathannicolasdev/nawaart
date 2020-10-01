import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = styled.div`
  height: 100vh;
  background-image: url("/assets/hero.jpg");
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
          <h2>Billy Childish</h2>
          <p>
            remember all the / high and exalted thingsremember all the low / and
            broken things
          </p>
          <p>New York, W 22nd Street</p>
          <p>January 23 - March 21, 2020</p>
        </HeroDetails>
      </Hero>

      <Footer />
    </div>
  );
};

export default HomePage;
