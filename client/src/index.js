import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import store from './Redux/store';
import {Provider} from 'react-redux';

let app = (
    <Provider store={store}>
        <Router />
    </Provider> 
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

