import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";

const Router = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
