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

const Error = styled.p`
  color: red;
`;

const AddArtwork = ({ history, options }) => {
  const [artwork, setArtwork] = useState({
    artistId: "",
    title: "",
    image: "",
    year: 2000,
    country: "",
    dimensions: "",
  });

  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + "/artworks";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        artwork.artistId &&
        artwork.title &&
        artwork.image &&
        artwork.country &&
        artwork.year
      ) {
        const body = new FormData();

        body.append("artistId", artwork.artistId);
        body.append("title", artwork.title);
        body.append("image", artwork.image);
        body.append("country", artwork.country);
        body.append("dimensions", artwork.dimensions);
        body.append("year", artwork.year);

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
      setError(error);
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
          <Label htmlFor="year">
            <h3>Year</h3>
          </Label>
          <Input
            name="year"
            type="number"
            placeholder="2020"
            required
            value={artwork.year}
            onChange={(event) => {
              setArtwork({
                ...artwork,
                year: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="dimensions">
            <h3>Dimensions</h3>
          </Label>
          <Input
            name="dimensions"
            type="text"
            placeholder="24cm x 24cm"
            value={artwork.dimensions}
            onChange={(event) => {
              setArtwork({
                ...artwork,
                dimensions: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">
            <h3>Country</h3>
          </Label>
          <Input
            name="country"
            type="text"
            placeholder="Country"
            required
            value={artwork.country}
            onChange={(event) => {
              setArtwork({
                ...artwork,
                country: event.target.value,
              });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Input type="submit" value="Add Artwork" />
          {error && <Error>Failed to add Artwork. Please try again.</Error>}
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default withRouter(AddArtwork);
