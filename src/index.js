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
import GamingText from "./components/GamingText";
import {getAppropriateText} from "./components/AppText";

const model = tf.loadLayersModel("./model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};

ReactDOM.render(
    <NesContainer title="Sketch - round 10 of 10" dark>
        <div>
            <button type="button"
                    style={homeBtnStyle}
                    className="nes-btn">
                Home
            </button>
        </div>
        <FlexRow>
            <FlexColumn>
                <Canvas ref={ref}/>
            </FlexColumn>
            <FlexColumn>
                <FlexRow>
                    <GamingText strings={[getAppropriateText("gameFailure")]}/>
                    {/*<GamingText strings={['Some <i>strings</i> are slanted']}/>*/}
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
