import React from "react";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Country from "./Pages/Country";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country/:country" component={Country} />
        <Route component={NoPage} />
      </Switch>
    </BrowserRouter>
  );
}

const NoPage = (props) => {
  return <div>{props.history.push("/")}</div>;
};
