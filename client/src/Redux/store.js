import { createStore } from 'redux';
import reducer from './reducers.js';

let initialState = {
    menu: [
        {id: "1", title: "Boring Burger", details: "Charred to perfection by our homemade flamethrower", price: 10, thumbsup: 2},
        {id: "2", title: "Tesla Curly Fries", details: "Innovative coils of greasy goodness", price: 3, thumbsup: 5},
        {id: "3", title: "Space Shake", details: "Cool your jets with this steller milkshake", price: 6, thumbsup: 9},
        {id: "4", title: "Mars Nuggets", details: "Best fried chicken on the planet", price: 8, thumbsup: 3},
    ],
    cartItems: [{ id: "3", title: "Space Shake", details: "Cool your jets with this steller milkshake", price: 6, thumbsup: 9 },
        { id: "4", title: "Mars Nuggets", details: "Best fried chicken on the planet", price: 8, thumbsup: 3 },]
}

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

