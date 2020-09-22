import { removeToken } from "../../utils/token";

const logout = () => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT_START" });
    try {
      removeToken();
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "LOGOUT_FAILURE",
        payload: error,
      });
    }
  };
};

export default logout;
