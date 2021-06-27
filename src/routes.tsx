import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Welcome} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
}
