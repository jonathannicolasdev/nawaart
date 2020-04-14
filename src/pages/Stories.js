import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import storiesData from "../data/stories.json";

const StoriesContainer = styled.div`
  margin: 10px;
`;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
  img {
    width: 400px;
    height: 300px;
  }
  h2 {
    width: 500px;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const Stories = () => {
  return (
    <div>
      <Header></Header>
      <StoriesContainer>
        {storiesData.map((story, index) => {
          return (
            <StoryContainer key={index}>
              <img src={story.image} alt={story.title}></img>
              <Link to={`/stories/${story.slug}`}>
                <h2>{story.title}</h2>
              </Link>
            </StoryContainer>
          );
        })}
      </StoriesContainer>
    </div>
  );
};

export default Stories;
