import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="*" component={() => <h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
