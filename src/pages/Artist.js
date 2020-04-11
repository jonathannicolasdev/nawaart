import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import artistsData from "../data/artists.json";

const ArtistContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    color: #828282;
  }
`;

const ArtistImage = styled.img`
  object-fit: cover;
`;

// should be ul, not div
const ExhibitionsList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 20px 0px;
  }
`;

const Artists = () => {
  const { slug } = useParams();

  const artists = artistsData.filter((artist) => artist.slug === slug);
  const artist = artists[0];
  // backend.com/api/artists/jonathan-nicolas
  // { name: '', photo: '' }

  // const artworks = artworks
  // backend.com/api/artists/jonathan-nicolas/artworks

  return (
    <div>
      <Header></Header>
      {artist ? (
        <ArtistContainer>
          <ArtistImage src={artist.photo} alt={artist.name} />
          <h3>{artist.name}</h3>

          <div>
            <h4>About</h4>
            <p>{artist.biography.about}</p>
          </div>

          <div>
            <h4>Exhibitions</h4>
            <ExhibitionsList>
              {artist.biography.exhibitions.map((item, index) => {
                return <li>{item}</li>;
              })}
            </ExhibitionsList>
          </div>
        </ArtistContainer>
      ) : (
        <ArtistContainer>Artist not found</ArtistContainer>
      )}
    </div>
  );
};

export default Artists;
