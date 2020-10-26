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
  background-position: center center;
  width: 100%;
  height: 100vh;
  h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #ffffff;
    font-size: 72px;
    padding: 50px;
    margin: 0;
    span {
      font-size: 100px;
    }
  }
  @media (max-width: 1024px) {
    height: 50vh;
    h1 {
      font-size: 28px;
      padding: 20px;
      span {
        font-size: 47px;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  p {
    width: 50ch;
    line-height: 150%;
    font-size: 28px;
  }
  @media (max-width: 1024px) {
    p {
      margin: 20px;
      font-size: 18px;
    }
  }
  @media (max-width: 600px) {
    p {
      width: 100%;
    }
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
            Jonathan Nicolas and Aung Myint Tun built Nawaart in 2020. The
            gallery represents a diverse range of contemporary artists and
            estates from Myanmar.
          </p>
        </Content>
      </AboutContainer>
    </Page>
  );
};

export default About;
