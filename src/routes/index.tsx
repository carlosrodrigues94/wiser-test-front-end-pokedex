import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../services/history";

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={() => <h1>Home</h1>} />
      </Switch>
    </Router>
  );
};

export default Routes;
