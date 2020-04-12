import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import artworksData from "../data/artworks.json";

const Artwork = () => {
  const { slug } = useParams();
  console.log(slug);
  console.log(artworksData);
  const artwork = artworksData.filter((artwork) => {
    return artwork.slug === slug;
  })[0];

  const ArtworkContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <div>
      <Header></Header>
      <ArtworkContainer>
        {artwork ? (
          <div>
            <img src={artwork.image} alt="" />
            <h3>{artwork.title}</h3>
          </div>
        ) : (
          <div>
            <h3>Artwork not found</h3>
          </div>
        )}
      </ArtworkContainer>
    </div>
  );
};

export default Artwork;
