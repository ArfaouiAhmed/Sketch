import React, {useEffect, useReducer, useState} from "react";
import {Round} from "./components/Round";
import {Result} from "./components/Result";
import * as tf from "@tensorflow/tfjs";
import {scoreReducer} from "./components/Score";


const model = tf.loadLayersModel("./model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

const GameContext = React.createContext();

function App() {

    const [currentRound, setCurrentRound] = useState(0);
    const [score, dispatch] = useReducer(scoreReducer, 0);

    useEffect(() => {
        setCurrentRound(0);
    }, []);


    return (
        <GameContext.Provider value={{
            currentRound: currentRound,
            setCurrentRound: setCurrentRound,
            score: score,
            dispatch: dispatch,
            ref: ref,
            model: model,
            labels: labels
        }}>
            {currentRound > 9 ? <Result/> : <Round/>}
        </GameContext.Provider>
    );
}


export {App, GameContext};