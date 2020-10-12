import { combineReducers } from "redux";

import auth from "./auth";
import artists from "./artists";
import artist from "./artist";
import artworks from "./artworks";
import artwork from "./artwork";
import stories from "./stories";

const rootReducer = combineReducers({
  auth,
  artists,
  artist,
  artworks,
  artwork,
  stories,
});

export default rootReducer;
