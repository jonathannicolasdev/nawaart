import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import storiesData from "../data/stories.json";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;
  img {
    width: 400px;
    height: 400px;
  }
`;

const Story = () => {
  const { slug } = useParams();
  const story = storiesData.filter((story) => {
    return story.slug === slug;
  })[0];

  return (
    <div>
      <Header></Header>
      <StoryContainer>
        <img src={story.image} alt="" />
        <h2>{story.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: story.content }} />
      </StoryContainer>
    </div>
  );
};

export default Story;
