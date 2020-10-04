import axios from "axios";

const getStories = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_STORIES_START" });

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/stories`
      );

      dispatch({
        type: "GET_STORIES_SUCCESS",
        payload: response.data.stories,
      });
    } catch (error) {
      dispatch({
        type: "GET_STORIES_FAILURE",
        payload: error,
      });
    }
  };
};

export default getStories;
