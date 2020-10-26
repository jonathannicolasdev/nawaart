import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ArtworkList from "./ArtworkList";
import Button from "./Button";

const ArtistCover = styled.div`
  background-image: url("/assets/artist-cover.jpg");
  height: 300px;
  width: 100%;
`;

const ArtistContainer = styled.div`
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
  margin-bottom: 30px;
`;

const Section = styled.section`
  font-size: 22px;
  width: 900px;
  margin-bottom: 50px;
  line-height: 150%;
`;

const Heading = styled.h4`
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
  text-align: ${({ center }) => center && "center"};
  color: ${({ color }) => color};
`;

const ExhibitionsList = styled.ul`
  li {
    margin: 20px 0px;
  }
`;

const ArtistProfile = ({
  artist,
  isAuthenticated,
  removeArtistAndRedirect,
}) => {
  return (
    <>
      <ArtistCover></ArtistCover>
      <ArtistContainer>
        <ArtistPhoto src={artist.photoUrl} alt={artist.name} />
        <ArtistName>{artist.name}</ArtistName>
        {isAuthenticated && (
          <Button onClick={removeArtistAndRedirect}>Remove Artist</Button>
        )}

        <Section>
          <Heading color="#7A1111">About</Heading>
          <p>{artist.biography.about}</p>
        </Section>

        <Section>
          <Heading color="#C0620B">Exhibitions</Heading>
          <ExhibitionsList color="#C0620B">
            {artist.biography.exhibitions.map((exhibition, index) => {
              return <li key={index}>{exhibition}</li>;
            })}
          </ExhibitionsList>
        </Section>

        <Section>
          <Heading center color="#FF6060">
            Artworks
          </Heading>
          <ArtworkList artworks={artist.artworks}></ArtworkList>
        </Section>
      </ArtistContainer>
    </>
  );
};

ArtistProfile.propTypes = {
  artist: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  removeArtistAndRedirect: PropTypes.func,
};

export default ArtistProfile;
