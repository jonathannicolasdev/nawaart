import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
