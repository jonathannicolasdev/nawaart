import axios from "axios";

import { getToken } from "../../utils/token";

const removeArtwork = (slug) => {
  return async (dispatch) => {
    if (slug) {
      dispatch({ type: "REMOVE_ARTWORK_START" });

      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/artworks/${slug}`,
          {
            headers: {
              Authorization: "Bearer " + getToken(),
            },
          }
        );

        dispatch({
          type: "REMOVE_ARTWORK_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: "REMOVE_ARTWORK_FAILURE",
          payload: error,
        });
      }
    } else {
      console.error("There is no slug");
    }
  };
};

export default removeArtwork;
