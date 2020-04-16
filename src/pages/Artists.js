import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import styled from "styled-components";

const ArtistsGallery = styled.div`
  display: flex;
`;

const ArtistCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px;
  h3 {
    text-align: center;
  }
`;

const ArtistImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState();
  const url = "https://nawaart.herokuapp.com/artists";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArtists(response.data.artists);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return (
    <div>
      <Header></Header>
      {error && <span>{error}</span>}
      <ArtistsGallery>
        {artists.map((artist, index) => {
          return (
            <ArtistCard key={index}>
              <Link to={`/artists/${artist.slug}`}>
                <ArtistImage src={artist.photo}></ArtistImage>
              </Link>
              <h3>{artist.name}</h3>
            </ArtistCard>
          );
        })}
      </ArtistsGallery>
    </div>
  );
};

export default Artists;
