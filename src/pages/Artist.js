import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import artistsData from "../data/artists.json";

const Artists = () => {
  const { slug } = useParams();
  const artists = artistsData.filter((artist) => artist.slug === slug);
  const artist = artists[0];
  // backend.com/api/artists/jonathan-nicolas
  // { name: '', photo: '' }

  return (
    <div>
      <Header></Header>
      {artist ? (
        <div>
          <h3>{artist.name}</h3>s
          <img src={artist.photo} alt={artist.name} />
        </div>
      ) : (
        <div>Artist not found</div>
      )}
    </div>
  );
};

export default Artists;
