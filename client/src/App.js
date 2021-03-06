import React from "react";
import Main from "./pages/main";
import ScoreBoard from "./components/scoreboard/Scoreboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./pages/Demo";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/scoreboard">
            <ScoreBoard />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
