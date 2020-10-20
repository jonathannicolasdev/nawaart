import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import axios from "axios";
import Select from "react-select";

import { getToken } from "../utils/token";

// title
// date
// imageUrl
// content

const FormContainer = styled.div`
  margin-bottom: 500px;
  width: 720px;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 720px;
`;

const FormGroup = styled.div`
  margin: 20px 0px;
  width: 720px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  h3 {
    margin-top: 0px;
  }
`;

const Input = styled.input`
  padding: 10px;
`;

const TextArea = styled.textarea`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  padding: 10px;
  height: 200px;
`;

const Error = styled.p`
  color: red;
`;

const AddStoryForm = ({ history }) => {
  const [story, setStory] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
  });

  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + "/stories";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (story.title && story.date && story.image && story.content) {
        const body = new FormData();

        body.append("title", story.title);
        body.append("date", story.date);
        body.append("image", story.image);
        body.append("content", story.content);

        const response = await axios.post(url, body, {
          headers: {
            Authorization: "Bearer " + getToken(),
            "content-type": "multipart/form-data",
          },
        });

        if (response.data.story) {
          history.push(`/stories/${response.data.story.slug}`);
        }
      } else {
        console.error("You need the title, date, image, content");
      }
    } catch (error) {
      setError(error);
    }
  };

  const onFileChange = (event) => {
    setStory({
      ...story,
      image: event.target.files[0],
    });
  };

  return (
    <FormContainer>
      <h1>Add New Story</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">
            <h3>Title</h3>
          </Label>
          <Input
            name="title"
            type="text"
            placeholder="Story Title"
            required
            value={story.title}
            onChange={(event) => {
              setStory({
                ...story,
                title: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">
            <h3>Image</h3>
          </Label>
          <Input name="image" type="file" onChange={onFileChange} required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date">
            <h3>Date</h3>
          </Label>
          <Input
            name="date"
            type="date"
            required
            value={story.date}
            onChange={(event) => {
              setStory({
                ...story,
                date: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="content">
            <h3>Content</h3>
          </Label>
          <TextArea
            name="content"
            value={story.content}
            onChange={(event) => {
              setStory({
                ...story,
                content: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Add Story" />
          {error && <Error>Failed to add new story. Please try again.</Error>}
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default withRouter(AddStoryForm);
