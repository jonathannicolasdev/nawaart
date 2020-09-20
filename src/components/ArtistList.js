import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArtistListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArtistLink = styled(Link)`
  text-decoration: none;
`;

const ArtistCard = styled.div`
  position: relative;
  text-align: center;
  margin: 50px;
`;

const ArtistName = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ArtistImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
  filter: brightness(0.5);
`;

const ArtistList = ({ artists }) => {
  return (
    <ArtistListContainer>
      {artists.length > 0 ? (
        artists.map((artist, index) => {
          return (
            <ArtistLink to={`/artists/${artist.slug}`}>
              <ArtistCard key={index}>
                <ArtistImage src={artist.photoUrl}></ArtistImage>
                <ArtistName>{artist.name}</ArtistName>
              </ArtistCard>
            </ArtistLink>
          );
        })
      ) : (
        <div>No artists found</div>
      )}
    </ArtistListContainer>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistList;
