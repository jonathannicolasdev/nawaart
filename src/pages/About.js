import React from "react";
import styled from "styled-components";
import Page from "../components/Page";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  img {
    width: 400px;
    height: 300px;
  }
`;

const Hero = styled.div`
  background: url("/assets/About.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #ffffff;
    font-size: 72px;
    padding: 50px;
    span {
      font-size: 144px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  p {
    width: 720px;
    font-size: 30px;
    line-height: 150%;
  }
`;

const About = () => {
  return (
    <Page>
      <AboutContainer>
        <Hero>
          <h1>
            This is
            <span> Nawaart</span>
          </h1>
        </Hero>
        <Content>
          <p>
            Jonathan Nicolas and Me built Nawaart in 2020. The gallery
            represents a diverse range of contemporary artists and estates from
            around the world. Since inception, Lehmann Maupin has been
            instrumental in introducing international artists in new
            geographies. This mission has resulted in historic first exhibitions
            in New York, Hong Kong, and Seoul.
          </p>
        </Content>
      </AboutContainer>
    </Page>
  );
};

export default About;
