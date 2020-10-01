import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
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
  font-size: 120px;
`;

const Small = styled.span`
  font-size: 40px;
`;

const ActionLink = styled(Link)`
  color: #fff;
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
        <Navigation />
        <Header>
          <div>
            <Heading>
              <Small>Contemporary</Small>
              <Big>Artworks</Big>
              <Small>From Myanmar</Small>
            </Heading>
            <ActionLink>View Catalogue</ActionLink>
          </div>
        </Header>
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
