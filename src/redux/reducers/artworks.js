const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const artworks = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTWORKS_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_ARTWORKS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_ARTWORKS_FAILURE":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artworks;
