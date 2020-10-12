import axios from "axios";

const getArtwork = (slug) => {
  return async (dispatch) => {
    if (slug) {
      dispatch({ type: "GET_ARTWORK_START" });

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/artworks/${slug}`
        );

        dispatch({
          type: "GET_ARTWORK_SUCCESS",
          payload: response.data.artwork,
        });
      } catch (error) {
        dispatch({
          type: "GET_ARTWORK_FAILURE",
          payload: error,
        });
      }
    } else {
      console.error("There is no slug");
    }
  };
};

export default getArtwork;
