import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import MenuPage from './Components/MenuPage';
import ReservationPage from './Components/ReservationPage';
import GetReservationsPage from './Components/GetReservationsPage';
import AdminLoginPage from './Components/AdminLoginPage';
import ManagementPage from './Components/ManagementPage';

const Router = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/reservations" component={ReservationPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/reserved" component={GetReservationsPage} />
          <Route exact path="/admin" component={AdminLoginPage} />
          <Route exact path="/management" component={ManagementPage} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default Router;
