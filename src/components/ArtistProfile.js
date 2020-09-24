import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArtistContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    color: #828282;
  }
`;

const ArtistImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
`;

const ExhibitionsList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 20px 0px;
  }
`;

const ArtworksList = styled.div``;

const ArtistProfile = ({ artist }) => {
  return (
    <ArtistContainer>
      <ArtistImage src={artist.photoUrl} alt={artist.name} />

      <h3>{artist.name}</h3>

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
        <ArtworksList>
          {artist.artworks.map((artwork, index) => {
            return <img src={artwork.imageUrl} key={index} />;
          })}
        </ArtworksList>
      </div>
    </ArtistContainer>
  );
};

ArtistProfile.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistProfile;
