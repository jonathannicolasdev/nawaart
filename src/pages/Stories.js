import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Page from "../components/Page";
import Hero from "../components/Hero";
import Content from "../components/Content";
import LinkButton from "../components/LinkButton";
import StoryDate from "../components/StoryDate";

import getStories from "../redux/actions/getStories";

const StoriesContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StoryLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Story = styled.div`
  display: flex;
  margin: 20px;
  max-width: 950px;
`;

const StoryImage = styled.img`
  border-radius: 10px;
  height: auto;
  object-fit: cover;
  width: 400px;
  max-height: 300px;
`;

const StoryInfo = styled.div`
  margin-left: 30px;
`;

const StoryTitle = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  font-size: 2.5em;
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
                <StoryLink key={story.slug} to={`/stories/${story.slug}`}>
                  <Story>
                    <StoryImage src={story.imageUrl} alt={story.title} />
                    <StoryInfo>
                      <StoryTitle>{story.title}</StoryTitle>
                      <StoryDate>{story.date}</StoryDate>
                    </StoryInfo>
                  </Story>
                </StoryLink>
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
