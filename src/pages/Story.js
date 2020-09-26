import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Page from "../components/Page";
import ErrorHeading from "../components/ErrorHeading";

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: auto;
  img {
    object-fit: cover;
    width: 400px;
    height: 400px;
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
          <img src={story.imageUrl} alt="" />
          <h2>{story.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: story.content }} />
        </StoryContainer>
      )}
    </Page>
  );
};

export default Story;
