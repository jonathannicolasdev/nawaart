import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ArtistsPage from "./pages/Artists";
import ArtistPage from "./pages/Artist";
import ArtworksPage from "./pages/Artworks";
import ArtworkPage from "./pages/Artwork";
import StoriesPage from "./pages/Stories";
import RegisterPage from "./pages/Register";
import StoryPage from "./pages/Story";
import AboutPage from "./pages/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/artists/:slug" component={ArtistPage} />
          <Route path="/artists" component={ArtistsPage} />
          <Route path="/artworks/:slug" component={ArtworkPage} />
          <Route path="/artworks" component={ArtworksPage} />
          <Route path="/stories/:slug" component={StoryPage}></Route>
          <Route path="/stories" component={StoriesPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
