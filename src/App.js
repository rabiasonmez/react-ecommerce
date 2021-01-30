import React from 'react';
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
//import PreLoader from "./components/base/PreLoader";
import { links } from "./data/links"

function App() {
  const routeMaps = links.map((item, index) =>
    <Route key={index} path={item.link} exact={item.isExact} component={item.component} />
  );
  return (
    <BrowserRouter>
      {/* <PreLoader /> */}
      <Navbar links={links} />
      <Switch>
        {routeMaps}
        <Route path="*">
          <Redirect to={"/404"} />
        </Route>
      </Switch>
      <Footer />

    </ BrowserRouter>

  );
}

export default App;
