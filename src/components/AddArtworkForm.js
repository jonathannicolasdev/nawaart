import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import axios from "axios";
import Select from "react-select";

import { getToken } from "../utils/token";

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

const SelectStyled = styled(Select)`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
`;

const AddArtwork = ({ history, options }) => {
  const [artwork, setArtwork] = useState({
    artistId: "",
    title: "",
    image: "",
  });

  const url = process.env.REACT_APP_API_URL + "/artworks";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (artwork.artistId && artwork.title && artwork.image) {
        const body = new FormData();

        body.append("artistId", artwork.artistId);
        body.append("title", artwork.title);
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
      } else {
        console.error("You need the artist, title, image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onFileChange = (event) => {
    setArtwork({
      ...artwork,
      image: event.target.files[0],
    });
  };

  const handleSelectArtist = (event) => {
    setArtwork({
      ...artwork,
      artistId: event.value,
    });
  };

  return (
    <FormContainer>
      <h1>Add New Artwork</h1>

      <FormGroup>
        <Label htmlFor="artist">
          <h3>Select Artist</h3>
        </Label>
        {options.length > 0 && (
          <SelectStyled
            name="artist"
            options={options}
            placeholder="Select Artist"
            onChange={handleSelectArtist}
          />
        )}
      </FormGroup>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">
            <h3>Artwork Title</h3>
          </Label>
          <Input
            name="title"
            type="text"
            placeholder="Artwork Title"
            required
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
          <Input name="image" type="file" onChange={onFileChange} required />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Add Artist" />
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default withRouter(AddArtwork);
