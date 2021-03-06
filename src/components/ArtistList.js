import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArtistListContainer = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
`;

const ArtistLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const ArtistCard = styled.div`
  position: relative;
  text-align: center;
  margin: 0 25px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin: 0 15px;
    margin-bottom: 30px;
  }
`;

const ArtistName = styled.span`
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ArtistImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  object-fit: cover;
  filter: brightness(0.5);
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 320px) {
    width: 120px;
    height: 120px;
  }
`;

const ArtistList = ({ artists }) => {
  return (
    <ArtistListContainer>
      {artists.length > 0 ? (
        artists.map((artist, index) => {
          return (
            <ArtistCard key={index}>
              <ArtistLink to={`/artists/${artist.slug}`}>
                <ArtistImage src={artist.photoUrl}></ArtistImage>
                <ArtistName>{artist.name}</ArtistName>
              </ArtistLink>
            </ArtistCard>
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
