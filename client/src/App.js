import React from "react";
import "./App.css";
import Main from "./pages/main";
import ScoreBoard from "./components/ScoreBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Main />
      <ScoreBoard />
    </div>
  );
};

export default App;
