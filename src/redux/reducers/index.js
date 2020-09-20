import { combineReducers } from "redux";

import auth from "./auth";
import artists from "./artists";
import artworks from "./artworks";

const rootReducer = combineReducers({
  auth,
  artists,
  artworks,
});

export default rootReducer;
