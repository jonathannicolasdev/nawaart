import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

const ArtworksGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    const fetchData = async () => {
      const response = await axios.get(url);
      if (response) {
        setArtworks(response.data.artworks);
      } else {
        setError("Error when getting artworks");
      }
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <Header></Header>
      {error && <p>{error}</p>}

      <ArtworksGallery>
        {artworks.length > 0 ? (
          artworks.map((artwork, index) => {
            return (
              <ArtworkCard key={index}>
                <Link to={`/artworks/${artwork.slug}`}>
                  <img src={artwork.imageUrl} alt={artwork.title} />
                </Link>
                <h3>{artwork.title}</h3>
              </ArtworkCard>
            );
          })
        ) : (
          <div>No artworks found</div>
        )}
      </ArtworksGallery>
    </div>
  );
};

export default Artworks;
