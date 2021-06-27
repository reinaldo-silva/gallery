import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </BrowserRouter>
  );
}
