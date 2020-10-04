import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Page from "../components/Page";
import Hero from "../components/Hero";
import Content from "../components/Content";
import LinkButton from "../components/LinkButton";

import getStories from "../redux/actions/getStories";

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

const Stories = ({ isLoading, stories, isAuthenticated, handleGetStories }) => {
  useEffect(() => {
    handleGetStories();
  }, [handleGetStories]);

  return (
    <Page>
      <Hero
        title="Interesting tales about art"
        description="Unique perspectives around"
        coverUrl="/assets/Stories.jpg"
        backgroundColor="rgba(76, 96, 74, 0.8)"
      ></Hero>
      <Content>
        {isAuthenticated && (
          <LinkButton to="/stories/add">Add New Story</LinkButton>
        )}

        {isLoading && <div>Loading stories...</div>}

        {!isLoading && stories && (
          <StoriesContainer>
            {stories.map((story, index) => {
              return (
                <StoryContainer key={index}>
                  <Link to={`/stories/${story.slug}`}>
                    <StoryImage
                      src={story.imageUrl}
                      alt={story.title}
                    ></StoryImage>
                    <h2>{story.title}</h2>
                  </Link>
                </StoryContainer>
              );
            })}
          </StoriesContainer>
        )}
      </Content>
    </Page>
  );
};

Stories.propTypes = {
  isLoading: PropTypes.bool,
  stories: PropTypes.array,
  handleGetStories: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.stories.isLoading,
    stories: state.stories.data,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetStories: () => dispatch(getStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
