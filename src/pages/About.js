import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;
  text-align: center;
  img {
    width: 400px;
    height: 300px;
  }
`;

const About = () => {
  return (
    <div>
      <Header></Header>
      <AboutContainer>
        <p>This is Nawaart</p>
        <img src="/assets/aung-jo.jpg"></img>
        <p> this is the about page</p>
      </AboutContainer>
    </div>
  );
};

export default About;
