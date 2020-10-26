import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Page from "../components/Page";
import ErrorHeading from "../components/ErrorHeading";
import StoryDate from "../components/StoryDate";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;
`;

const StoryImage = styled.img`
  object-fit: cover;
  width: 720px;
  height: auto;
  border-radius: 10px;
`;

const StoryTitle = styled.h1``;

const StoryContent = styled.div`
  p {
    font-size: 1.2em;
  }
`;

const Story = () => {
  const { slug } = useParams();
  const [story, setStory] = useState({});
  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + `/stories/${slug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setStory(response.data.story);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  return (
    <Page>
      {error && <ErrorHeading>Sorry, story not found.</ErrorHeading>}

      {!error && story && story.title && (
        <StoryContainer>
          <StoryImage src={story.imageUrl} alt={story.title} />
          <StoryTitle>{story.title}</StoryTitle>
          <StoryDate>{story.date}</StoryDate>
          <StoryContent dangerouslySetInnerHTML={{ __html: story.content }} />
        </StoryContainer>
      )}
    </Page>
  );
};

export default Story;
