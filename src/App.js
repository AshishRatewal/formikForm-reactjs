import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
