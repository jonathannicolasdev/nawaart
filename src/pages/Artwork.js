import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import { getToken } from "../utils/token";

const Button = styled.button`
  cursor: pointer;
  background-color: #990000;
  border: none;
  color: #ffffff;
  padding: 10px 32px;
`;

const ArtworkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ArtworkSection = styled.section`
  margin-bottom: 100px;
`;

const ArtworkImage = styled.img`
  max-width: 720px;
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
`;

const ArtistPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 200px;
`;

const Artwork = ({ history }) => {
  const { slug } = useParams();
  const [artwork, setArtwork] = useState({});
  const [artist, setArtist] = useState({});
  const [error, setError] = useState();

  const url = process.env.REACT_APP_API_URL + `/artworks/${slug}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArtwork(response.data.artwork);
        setArtist(response.data.artwork.artist);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  const handleRemoveArtwork = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/artworks/${artwork.slug}`,
        {
          headers: {
            Authorization: "Bearer " + getToken(),
            "content-type": "multipart/form-data",
          },
        }
      );

      if (response.data) history.push(`/artworks`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header></Header>

      {error && <p>{error}</p>}

      {!error && <Button onClick={handleRemoveArtwork}>Remove Artwork</Button>}

      {!error && (
        <ArtworkContainer>
          {artwork ? (
            <div>
              <ArtworkSection>
                <ArtworkImage src={artwork.imageUrl} alt={artwork.title} />
                <h3>{artwork.title}</h3>
                <span>{artwork.year}</span>
                <span>{artwork.dimensions}</span>
                <span>{artwork.country}</span>
              </ArtworkSection>

              <ArtistLink to={`/artists/${artist.slug}`}>
                <ArtistPhoto src={artist.photoUrl} alt={artist.name} />
                <h3>{artist.name}</h3>
              </ArtistLink>
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

export default withRouter(Artwork);
