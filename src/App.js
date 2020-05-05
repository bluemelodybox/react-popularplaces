import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Analysis from "./Analysis";
import About from "./About";

function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/analysis" component={Analysis} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
