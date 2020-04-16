import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

const ArtworksGallery = styled.div`
  display: flex;
  width: 1200px;
  /* margin: auto; */
`;

const ArtworkCard = styled.div`
  margin: 50px;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
`;

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState();
  const url = process.env.REACT_APP_API_URL + "/artworks";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArtworks(response.data.artworks);
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
        <ArtworksGallery>
          {artworks.map((artwork, index) => {
            return (
              <ArtworkCard key={index}>
                <Link to={`/artworks/${artwork.slug}`}>
                  <img src={artwork.image} alt={artwork.title} />
                </Link>
                <h3>{artwork.title}</h3>
              </ArtworkCard>
            );
          })}
        </ArtworksGallery>
      )}
    </div>
  );
};

export default Artworks;
