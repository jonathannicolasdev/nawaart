import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { getToken } from "../utils/token";
import ExhibitionList from "../components/ExhibitionList";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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

const AddArtist = (props) => {
  const [artist, setArtist] = useState({
    name: "",
    photo: null,
    biography: {
      about: "",
      exhibitions: [""],
    },
  });

  const url = process.env.REACT_APP_API_URL + "/artists";

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

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
      console.error(error);
    }
  };

  const onFileChange = (event) => {
    setArtist({
      ...artist,
      photo: event.target.files[0],
    });
  };

  return (
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

          <FormGroup>
            <SubLabel htmlFor="exhibitions">Exhibitions</SubLabel>
            <Input
              type="text"
              name="exhibitions"
              value={artist.biography.exhibitions[0]}
              onChange={(event) => {
                setArtist({
                  ...artist,
                  biography: {
                    ...artist.biography,
                    exhibitions: [event.target.value],
                  },
                });
              }}
            />
          </FormGroup>
        </section>

        <ExhibitionList></ExhibitionList>

        <FormGroup>
          <Input type="submit" value="Add Artist" />
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default withRouter(AddArtist);
