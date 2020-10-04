const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const artists = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTIST_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_ARTIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_ARTIST_FAILURE":
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

export default artists;
