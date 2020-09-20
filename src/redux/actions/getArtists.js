import axios from "axios";

const getArtists = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_ARTISTS_START" });

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/artists`
      );

      dispatch({
        type: "GET_ARTISTS_SUCCESS",
        payload: response.data.artists,
      });
    } catch (error) {
      dispatch({
        type: "GET_ARTISTS_FAILURE",
        payload: error,
      });
    }
  };
};

export default getArtists;
