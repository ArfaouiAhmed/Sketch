import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Canvas, Controls} from "./App";
import NesContainer from './components/NesContainer'
import * as serviceWorker from './serviceWorker';
import * as tf from "@tensorflow/tfjs";
import "nes.css/css/nes.min.css";
import FlexRow from "./components/FlexRow";
import FlexColumn from "./components/FlexColumn";

const model = tf.loadLayersModel("./model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

ReactDOM.render(
    <NesContainer title="Sketch" dark>
        <FlexRow>
            <FlexColumn>
                <Canvas ref={ref}/>
            </FlexColumn>
            <FlexColumn>
                <FlexRow>
                    gaming text
                </FlexRow>
                <FlexRow>
                    &nbsp;
                </FlexRow>
                <FlexRow>
                    <Controls theCanvas={ref} model={model} labels={labels}/>
                </FlexRow>
            </FlexColumn>
        </FlexRow>
    </NesContainer>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
