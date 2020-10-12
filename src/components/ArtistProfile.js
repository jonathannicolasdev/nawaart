import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ArtworkList from "./ArtworkList";

const ArtistCover = styled.div`
  background-image: url("/assets/artist-cover.jpg");
  height: 300px;
  width: 100%;
`;

const ArtistContainer = styled.div`
  max-width: 720px;
  margin: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtistPhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
`;

const ArtistName = styled.h3`
  font-size: 72px;
  margin: 0;
`;

const ExhibitionsList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 20px 0px;
  }
`;

const ArtistProfile = ({ artist }) => {
  return (
    <>
      <ArtistCover></ArtistCover>
      <ArtistContainer>
        <ArtistPhoto src={artist.photoUrl} alt={artist.name} />
        <ArtistName>{artist.name}</ArtistName>
        <div>
          <h4>About</h4>
          <p>{artist.biography.about}</p>
        </div>
        <div>
          <h4>Exhibitions</h4>
          <ExhibitionsList>
            {artist.biography.exhibitions.map((exhibition, index) => {
              return <li key={index}>{exhibition}</li>;
            })}
          </ExhibitionsList>
        </div>
        <div>
          <h4>Artworks</h4>
          <ArtworkList artworks={artist.artworks}></ArtworkList>
        </div>
      </ArtistContainer>
    </>
  );
};

ArtistProfile.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistProfile;
