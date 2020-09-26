import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import ErrorHeading from "../components/ErrorHeading";
import ArtistProfile from "../components/ArtistProfile";
import { getToken } from "../utils/token";

import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: #990000;
  border: none;
  color: #ffffff;
  padding: 10px 32px;
`;

const Artist = ({ history }) => {
  const { slug } = useParams();
  const [artist, setArtist] = useState({});
  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + `/artists/${slug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setArtist(response.data.artist);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  const handleRemoveArtist = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/artists/${artist.slug}`,
        {
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        }
      );

      if (response.data) history.push(`/artists`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Page>
      {error && <ErrorHeading>Sorry, artist not found.</ErrorHeading>}

      {!error && artist && (
        <Button onClick={handleRemoveArtist}>Remove Artist</Button>
      )}

      {!error && artist && artist.name && <ArtistProfile artist={artist} />}
    </Page>
  );
};

export default withRouter(Artist);
