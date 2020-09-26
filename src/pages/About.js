import React from "react";
import styled from "styled-components";
import Page from "../components/Page";

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
    <Page>
      <AboutContainer>
        <p>This is Nawaart</p>
        <img src="/assets/aung-jo.jpg" alt="About"></img>
        <p> this is the about page</p>
      </AboutContainer>
    </Page>
  );
};

export default About;
