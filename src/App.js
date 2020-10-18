import React from "react";
import {Round} from "./components/Round";
import {Result} from "./components/Result";
import {Home} from "./components/Home";
import { Router, Link } from "@reach/router"







function App() {

    return (
        <Router>
            <Home path="/" />
            <Round path="game" />
            <Result path="result"/>
        </Router>
        // <Home/>
        // <Round/>
        // <Result/>
    );
}


export default App;