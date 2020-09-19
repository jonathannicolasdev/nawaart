import axios from "axios";
import { setToken } from "../../utils/token";

const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        user
      );

      const token = response.data.token;
      setToken(token);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token,
        },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error,
      });
    }
  };
};

export default login;
