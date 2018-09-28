import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Checkout from "./Components/Checkout";
import MenuPage from './Components/MenuPage';
import ReservationPage from './Components/ReservationPage';
import GetReservationsPage from './Components/GetReservationsPage';
import GetOrdersPage from './Components/GetOrdersPage';
import AdminLoginPage from './Components/AdminLoginPage';
import ManagementPage from './Components/ManagementPage';
import AddToMenu from './Components/AdminCRUD/AddToMenu';
import UpdateMenu from './Components/AdminCRUD/UpdateMenu';
import DeleteFromMenu from './Components/AdminCRUD/DeleteFromMenu';


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
          <Route exact path="/orders" component={GetOrdersPage} />
          <Route exact path="/admin" component={AdminLoginPage} />
          <Route exact path="/management" component={ManagementPage} />
          <Route exact path="/management/add" component={AddToMenu} />
          <Route exact path="/management/update" component={UpdateMenu} />
          <Route exact path="/management/delete" component={DeleteFromMenu} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Router;
