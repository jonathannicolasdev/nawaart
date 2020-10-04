import { combineReducers } from "redux";

import auth from "./auth";
import artists from "./artists";
import artworks from "./artworks";
import stories from "./stories";

const rootReducer = combineReducers({
  auth,
  artists,
  artworks,
  stories,
});

export default rootReducer;
