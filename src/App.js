import React, {useEffect, useState} from "react";
import {Round} from "./components/Round";
import {Result} from "./components/Result";
import * as tf from "@tensorflow/tfjs";


const model = tf.loadLayersModel("./model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

const GameContext = React.createContext();

function App() {

    const [currentRound, setCurrentRound] = useState(0);


    // useEffect(() => {
    //     console.log("currentRound: " + currentRound);
    // });


    return (
        <GameContext.Provider value={{
            currentRound: currentRound,
            setCurrentRound: setCurrentRound,
            canvas: ref,
            model: model,
            labels: labels
        }}>
            {currentRound > 9 ? <Result/> : <Round/>}
        </GameContext.Provider>
    );
}


export {App, GameContext};