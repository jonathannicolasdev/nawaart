import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtworkListContainer = styled.div`
  margin: 50px 100px;
  display: block;
  columns: 20rem;
  gap: 2rem;
  @media (max-width: 768px) {
    margin: 50px 20px;
  }
`;

const ArtworkCard = styled.div`
  margin: 0;
  margin-bottom: 50px;
  break-inside: avoid;
`;

const ArtworkImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

const TitleYear = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const Title = styled.span``;

const Year = styled.span`
  color: #aaaaaa;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dimensions = styled.span``;

const ArtworkList = ({ artworks }) => {
  return (
    <ArtworkListContainer>
      {artworks.length > 0 ? (
        artworks.map((artwork, index) => {
          return (
            <ArtworkCard key={index}>
              <Link to={`/artworks/${artwork.slug}`}>
                <ArtworkImage src={artwork.imageUrl} alt={artwork.title} />
              </Link>
              <TitleYear>
                <Title>{artwork.title}</Title>
                <Year>{artwork.year}</Year>
              </TitleYear>
              <Info>
                <Dimensions>{artwork.dimensions}</Dimensions>
              </Info>
            </ArtworkCard>
          );
        })
      ) : (
        <div>No artworks found</div>
      )}
    </ArtworkListContainer>
  );
};

ArtworkList.propTypes = {
  artworks: PropTypes.array.isRequired,
};

export default ArtworkList;
