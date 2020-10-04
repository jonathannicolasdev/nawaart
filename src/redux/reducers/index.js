import { combineReducers } from "redux";

import auth from "./auth";
import artists from "./artists";
import artist from "./artist";
import artworks from "./artworks";
import stories from "./stories";

const rootReducer = combineReducers({
  auth,
  artists,
  artist,
  artworks,
  stories,
});

export default rootReducer;
