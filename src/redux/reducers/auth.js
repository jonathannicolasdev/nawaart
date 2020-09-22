import { getToken } from "../../utils/token";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  isAuthenticated: getToken() ? true : false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    case "LOGOUT_START":
      return {
        ...state,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case "LOGOUT_FAILURE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default auth;
