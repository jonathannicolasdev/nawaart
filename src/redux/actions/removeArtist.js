import axios from "axios";

import { getToken } from "../../utils/token";

const removeArtist = (slug) => {
  return async (dispatch) => {
    if (slug) {
      dispatch({ type: "REMOVE_ARTIST_START" });

      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/artists/${slug}`,
          {
            headers: {
              Authorization: "Bearer " + getToken(),
            },
          }
        );

        dispatch({
          type: "REMOVE_ARTIST_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: "REMOVE_ARTIST_FAILURE",
          payload: error,
        });
      }
    } else {
      console.error("There is no slug");
    }
  };
};

export default removeArtist;
