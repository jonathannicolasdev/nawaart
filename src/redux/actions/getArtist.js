import axios from "axios";

const getArtist = (slug) => {
  return async (dispatch) => {
    if (slug) {
      dispatch({ type: "GET_ARTIST_START" });

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/artists/${slug}`
        );

        dispatch({
          type: "GET_ARTIST_SUCCESS",
          payload: response.data.artist,
        });
      } catch (error) {
        dispatch({
          type: "GET_ARTIST_FAILURE",
          payload: error,
        });
      }
    } else {
      console.error("There is no slug");
    }
  };
};

export default getArtist;
