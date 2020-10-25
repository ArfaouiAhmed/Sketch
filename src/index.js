import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "nes.css/css/nes.min.css";
import {App} from "./App";
import {Home} from "./components/Home";
import {Router} from "@reach/router";



ReactDOM.render(
    <Router>
        <Home path="/" />
        <App path="game" />
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
