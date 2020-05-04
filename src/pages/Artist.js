import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";

const ArtistContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    color: #828282;
  }
`;

const ArtistImage = styled.img`
  object-fit: cover;
`;

// should be ul, not div
const ExhibitionsList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin: 20px 0px;
  }
`;

const Artist = () => {
  const { slug } = useParams();
  const [artist, setArtist] = useState({});
  const url = process.env.REACT_APP_API_URL + `/artists/${slug}`;

  useEffect(() => {
    const fetchData = async () => {
      const responseArtist = await axios.get(url);
      if (responseArtist) {
        setArtist(responseArtist.data.artist);
        try {
          await axios.get(responseArtist.data.artist.photo);
        } catch (error) {
          const artistName = responseArtist.data.artist.name
            .split(" ")
            .join("+");
          const placeholderPhoto = `https://ui-avatars.com/api/?size=600&name=${artistName}`;
          setArtist((state) => ({
            ...state,
            photo: placeholderPhoto,
          }));
        }
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <Header></Header>
      {artist.name ? (
        <ArtistContainer>
          <ArtistImage src={artist.photo} alt={artist.name} />

          <h3>{artist.name}</h3>

          <div>
            <h4>About</h4>
            <p>{artist.biography.about}</p>
          </div>

          <div>
            <h4>Exhibitions</h4>
            <ExhibitionsList>
              {artist.biography.exhibitions.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ExhibitionsList>
          </div>
        </ArtistContainer>
      ) : (
        <ArtistContainer>Artist not found</ArtistContainer>
      )}
    </div>
  );
};

export default Artist;
