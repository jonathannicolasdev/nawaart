import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import storiesData from "../data/stories.json";

const Stories = () => {
  const StoriesContainer = styled.div`
    margin: 50px;
  `;

  const StoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 400px;
      height: 300px;
    }
    h2 {
      width: 500px;
    }
  `;

  return (
    <div>
      <Header></Header>

      {storiesData.map((story, index) => {
        return (
          <StoriesContainer>
            <StoryContainer key={index}>
              <img src={story.image} alt={story.title}></img>
              <h2>{story.title}</h2>
            </StoryContainer>
          </StoriesContainer>
        );
      })}
    </div>
  );
};

export default Stories;
