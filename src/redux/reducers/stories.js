const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const stories = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STORIES_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "GET_STORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case "GET_STORIES_FAILURE":
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

export default stories;
