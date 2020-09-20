import axios from "axios";

const getArtworks = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_ARTWORKS_START" });

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/artworks`
      );

      dispatch({
        type: "GET_ARTWORKS_SUCCESS",
        payload: response.data.artworks,
      });
    } catch (error) {
      dispatch({
        type: "GET_ARTWORKS_FAILURE",
        payload: error,
      });
    }
  };
};

export default getArtworks;
