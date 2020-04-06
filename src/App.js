import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ArtistsPage from "./pages/Artists";
import ArtistPage from "./pages/Artist";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/artists/:slug" component={ArtistPage} />
          <Route path="/artists" component={ArtistsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
