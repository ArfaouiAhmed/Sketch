import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "nes.css/css/nes.min.css";
import {App} from "./App";
import {Home} from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/game">
                <App/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
