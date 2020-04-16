import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";

const ArtworkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Artwork = () => {
  const { slug } = useParams();
  const [artwork, setArtwork] = useState({});
  const [error, setError] = useState();
  const url = process.env.REACT_APP_API_URL + `/artworks/${slug}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArtwork(response.data.artwork);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return (
    <div>
      <Header></Header>
      {error && <p>{error}</p>}
      {!error && (
        <ArtworkContainer>
          {artwork ? (
            <div>
              <img src={artwork.image} alt="" />
              <h3>{artwork.title}</h3>
            </div>
          ) : (
            <div>
              <h3>Artwork not found</h3>
            </div>
          )}
        </ArtworkContainer>
      )}
    </div>
  );
};

export default Artwork;
