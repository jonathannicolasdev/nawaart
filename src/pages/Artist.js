import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ArtistProfile from "../components/ArtistProfile";

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
          await axios.get(responseArtist.data.artist.photoUrl);
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
        <ArtistProfile artist={artist} />
      ) : (
        <p>Artist not found</p>
      )}
    </div>
  );
};

export default Artist;
