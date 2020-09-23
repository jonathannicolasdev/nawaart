import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";
import dayjs from "dayjs";

const Hero = styled.div`
  height: 100vh;
  background-image: url("/assets/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeroDetails = styled.div`
  font-family: "Armata";
  padding: 50px;
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.5em;
  }
`;

const Section = styled.section`
  margin: 100px 0;
  h2 {
    margin: 50px;
    font-size: 2.5em;
  }
`;

const Stories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Story = styled.div`
  width: 400px;
  margin: 50px;
  margin-top: 10px;
  img {
    height: 400px;
    width: 400px;
    object-fit: cover;
  }
`;

const HomePage = () => {
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
    <div>
      <Hero>
        <Header></Header>
        <HeroDetails>
          <h2>Billy Childish</h2>
          <p>
            remember all the / high and exalted thingsremember all the low / and
            broken things
          </p>
          <p>New York, W 22nd Street</p>
          <p>January 23 - March 21, 2020</p>
        </HeroDetails>
      </Hero>
      <Section>
        <h2>Stories</h2>
        <Stories>
          {stories.length > 0 ? (
            stories.map((story, index) => {
              return (
                <Story key={index}>
                  <img src={story.imageUrl} alt={story.slug} />
                  <h3>{story.title}</h3>
                  <p> {dayjs(story.date).format("D MMMM YYYY")}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: story.content,
                    }}
                  ></div>
                </Story>
              );
            })
          ) : (
            <div>No Stories Found</div>
          )}
        </Stories>
      </Section>
    </div>
  );
};

export default HomePage;
