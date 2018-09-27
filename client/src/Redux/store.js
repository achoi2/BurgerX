import { createStore } from "redux";
import reducer from "./reducers.js";

let initialState = {
  menu: [],
  cartItems: [],
  backlog: [],
  reservations: [],
  admin: []
};

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
