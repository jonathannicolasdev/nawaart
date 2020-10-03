import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Page from "../components/Page";
import Hero from "../components/Hero";

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

const StoryImage = styled.img`
  object-fit: cover;
`;

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState();
  const url = process.env.REACT_APP_API_URL + "/stories";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      if (response) {
        setStories(response.data.stories);
      } else {
        setError("Error when getting stories");
        console.error(error);
      }
    };
    fetchData();
  }, [url, error]);

  return (
    <Page>
      <Hero
        title="Interesting tales about art"
        description="Unique perspectives around"
        coverUrl="/assets/Stories.jpg"
        backgroundColor="rgba(76, 96, 74, 0.8)"
      ></Hero>
      <StoriesContainer>
        {stories.map((story, index) => {
          return (
            <StoryContainer key={index}>
              <Link to={`/stories/${story.slug}`}>
                <StoryImage src={story.imageUrl} alt={story.title}></StoryImage>
                <h2>{story.title}</h2>
              </Link>
            </StoryContainer>
          );
        })}
      </StoriesContainer>
    </Page>
  );
};

export default Stories;
