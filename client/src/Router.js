import React from "react";
import { HashRouter as Router, Switch } from "react-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Home from './Components/Home'
import Menu from './Components/Menu';

const Router = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={MenuPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Router;
