import React from "react";
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Picture from "./components/Picture";
import Name from "./components/Name";
import SocialMedia from "./components/SocialMedia";
import TextSummary from "./components/TextSummary";
import Text2 from "./components/Text2";
import Text3 from "./components/Text3";
import NavMenu from "./components/NavMenu";
import Portifolio from "./components/Portifolio";
import PortfolioBar from "./components/PortfolioBar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <NavMenu />
        </nav>

        <Route
          exact
          path="/"
          render={() => (
            <div id="wrapper">
              <Picture />
              <Name />
              <SocialMedia />
              <TextSummary />
              <Text2 />
              <Text3 />
            </div>
          )}
        />
        <Route
          path="/portifolio"
          render={() => (
            <div id="wrapper-portifolio">
              <PortfolioBar />
              <Portifolio />
            </div>
          )}
        />
      </HashRouter>
    </div>
  );
}

export default App;
