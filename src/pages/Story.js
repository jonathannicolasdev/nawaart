import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";

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
    axios
      .get(url)
      .then((response) => {
        setStory(response.data.story);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url, error]);

  return (
    <div>
      <Header></Header>
      {error && <p>{error}</p>}
      {!error && (
        <StoryContainer>
          <img src={story.imageUrl} alt="" />
          <h2>{story.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: story.content }} />
        </StoryContainer>
      )}
    </div>
  );
};

export default Story;
