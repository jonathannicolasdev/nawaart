import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import axios from "axios";
import Select from "react-select";

import { getToken } from "../utils/token";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 500px;
`;

const Form = styled.form`
  width: 900px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Label = styled.label`
  font-weight: 700;
  h3 {
    margin-top: 0px;
  }
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const AddArtwork = ({ history, options }) => {
  const [artwork, setArtwork] = useState({
    name: "",
    image: null,
  });

  const url = process.env.REACT_APP_API_URL + "/artworks";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = new FormData();

      body.append("name", artwork.name);
      body.append("image", artwork.image);

      const response = await axios.post(url, body, {
        headers: {
          Authorization: "Bearer " + getToken(),
          "content-type": "multipart/form-data",
        },
      });

      if (response.data.artwork) {
        history.push(`/artworks/${response.data.artwork.slug}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFileChange = (event) => {
    setArtwork({
      ...artwork,
      photo: event.target.files[0],
    });
  };

  return (
    <FormContainer>
      <h1>Add New Artwork</h1>
      <FormGroup>
        <Label htmlFor="artist">
          <h3>Artist</h3>
        </Label>
        {options.length > 0 && <Select name="artist" options={options} />}
      </FormGroup>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">
            <h3>Title</h3>
          </Label>
          <Input
            name="title"
            type="text"
            placeholder="Artwork Title"
            value={artwork.title}
            onChange={(event) => {
              setArtwork({
                ...artwork,
                title: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="image">
            <h3>Image</h3>
          </Label>
          <Input name="image" type="file" onChange={onFileChange} />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Add Artist" />
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default withRouter(AddArtwork);
