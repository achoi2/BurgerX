import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import ReservationPage from './Components/Pages/ReservationPage';

const Router = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/reservations" component={ReservationPage} />
          <Route exact path="/menu" component={MenuPage} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
