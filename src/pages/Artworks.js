import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import artworksData from "../data/artworks.json";

const ArtworksGallery = styled.div`
  display: flex;
  width: 1200px;
  /* margin: auto; */
`;

const ArtworkCard = styled.div`
  margin: 50px;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
`;

const Artworks = () => {
  return (
    <div>
      <Header></Header>
      <ArtworksGallery>
        {artworksData.map((artwork, index) => {
          return (
            <ArtworkCard key={index}>
              <Link to={`/artworks/${artwork.slug}`}>
                <img src={artwork.image} alt="" />
              </Link>
              <h3>{artwork.title}</h3>
            </ArtworkCard>
          );
        })}
      </ArtworksGallery>
    </div>
  );
};

export default Artworks;
