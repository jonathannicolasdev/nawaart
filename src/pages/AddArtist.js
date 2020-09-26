import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { getToken } from "../utils/token";

import Page from "../components/Page";
import ExhibitionsFormGroup from "../components/ExhibitionsFormGroup";

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

const SubLabel = styled.label`
  font-weight: 700;
  color: #888888;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const TextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 10px;
  height: 200px;
`;

const Error = styled.p`
  color: red;
`;

const AddArtist = (props) => {
  const [artist, setArtist] = useState({
    name: "",
    photo: null,
    biography: {
      about: "",
      exhibitions: [""],
    },
  });

  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + "/artists";

  const handleSetExhibitions = (newExhibitions) => {
    setArtist({
      ...artist,
      biography: {
        ...artist.biography,
        exhibitions: newExhibitions,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = new FormData();

      body.append("name", artist.name);
      body.append("photo", artist.photo);
      body.append("about", artist.biography.about);
      body.append("exhibitions", JSON.stringify(artist.biography.exhibitions));

      const response = await axios.post(url, body, {
        headers: {
          Authorization: "Bearer " + getToken(),
          "content-type": "multipart/form-data",
        },
      });

      if (response.data.artist) {
        props.history.push(`/artists/${response.data.artist.slug}`);
      }
    } catch (error) {
      setError(error);
    }
  };

  const onFileChange = (event) => {
    setArtist({
      ...artist,
      photo: event.target.files[0],
    });
  };

  return (
    <Page>
      <FormContainer>
        <h1>Add New Artist</h1>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">
              <h3>Name</h3>
            </Label>
            <Input
              name="name"
              type="text"
              placeholder="Artist's Name"
              value={artist.name}
              onChange={(event) => {
                setArtist({
                  ...artist,
                  name: event.target.value,
                });
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="photo">
              <h3>Photo</h3>
            </Label>
            <Input name="photo" type="file" onChange={onFileChange} />
          </FormGroup>

          <section>
            <h3>Biography</h3>

            <FormGroup>
              <SubLabel htmlFor="about">About</SubLabel>
              <TextArea
                name="about"
                value={artist.biography.about}
                onChange={(event) => {
                  setArtist({
                    ...artist,
                    biography: {
                      ...artist.biography,
                      about: event.target.value,
                    },
                  });
                }}
              />
            </FormGroup>

            <ExhibitionsFormGroup
              exhibitions={artist.biography.exhibitions}
              setExhibitions={handleSetExhibitions}
            />
          </section>

          <FormGroup>
            <Input type="submit" value="Add Artist" />
            {error && <Error>Failed to add Artist. Please try again.</Error>}
          </FormGroup>
        </Form>
      </FormContainer>
    </Page>
  );
};

export default withRouter(AddArtist);
