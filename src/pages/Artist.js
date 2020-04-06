import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import artistsData from "../data/artists.json";

const Artists = () => {
  const { slug } = useParams();
  return (
    <div>
      <Header></Header>
      {artistsData
        .filter((artist) => artist.slug === slug)
        .map((artist, index) => {
          return (
            <div key={index}>
              <h3>{artist.name}</h3>
              <img src={artist.photo} alt={artist.name} />
            </div>
          );
        })}
    </div>
  );
};

export default Artists;
