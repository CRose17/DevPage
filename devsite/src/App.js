import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

library.add(fab);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-container">
          <Main />;
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
