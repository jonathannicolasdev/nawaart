import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArtistListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ArtistList = ({ artists }) => {
  return (
    <ArtistListContainer>
      {artists.length > 0 ? (
        artists.map((artist, index) => {
          return (
            <ArtistCard key={index}>
              <Link to={`/artists/${artist.slug}`}>
                <ArtistImage src={artist.photoUrl}></ArtistImage>
              </Link>
              <h3>{artist.name}</h3>
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
