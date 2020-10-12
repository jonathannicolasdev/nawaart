const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const artwork = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTWORK_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_ARTWORK_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_ARTWORK_FAILURE":
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

export default artwork;
