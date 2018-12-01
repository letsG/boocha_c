import React from 'react';
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import {Router} from "react-router";

import App from './containers/App/App';

const history = createHistory();

const target = document.querySelector('#root');

render(
    <Router history={history}>
        <App/>
    </Router>,
    target
);
