import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import PrivateRoute from "./PrivateRoute";

import HomePage from "./pages/Home";
import ArtistsPage from "./pages/Artists";
import ArtistPage from "./pages/Artist";
import ArtworksPage from "./pages/Artworks";
import ArtworkPage from "./pages/Artwork";
import StoriesPage from "./pages/Stories";
import RegisterPage from "./pages/Register";
import StoryPage from "./pages/Story";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import AddArtistPage from "./pages/AddArtist";
import AddArtworkPage from "./pages/AddArtwork";

import store from "./redux/store";

class App extends Component {
  componentDidMount() {
    const url = process.env.REACT_APP_API_URL;
    async function requestBackend() {
      await axios.get(url);
    }
    requestBackend();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <PrivateRoute path="/artists/add" component={AddArtistPage} exact />
            <Route path="/artists/:slug" component={ArtistPage} />
            <Route path="/artists" component={ArtistsPage} />
            <PrivateRoute
              path="/artworks/add"
              component={AddArtworkPage}
              exact
            />
            <Route path="/artworks/:slug" component={ArtworkPage} />
            <Route path="/artworks" component={ArtworksPage} />
            <Route path="/stories/:slug" component={StoryPage}></Route>
            <Route path="/stories" component={StoriesPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
