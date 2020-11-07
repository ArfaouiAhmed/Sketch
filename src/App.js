import React, {useReducer, useState} from "react";
import {Result} from "./components/Result";
import * as tf from "@tensorflow/tfjs";
import {scoreReducer} from "./components/Score";
import {Game} from "./components/Game";

const model = tf.loadLayersModel(process.env.PUBLIC_URL + "/model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

const GameContext = React.createContext();

function useRounds(labels) {
    let [currentRound, setCurrentRound] = useState(0);
    return [currentRound, setCurrentRound, () => setCurrentRound(currentRound + 1), () => setCurrentRound(0)];
}

function useGamingText(){
    const [gtext, setGtext] = useState("gameStart");
    return [gtext,() => setGtext("gameFailure"),() => setGtext("gameSuccess"),() => setGtext("gameStart")]
}

function App() {

    const [currentRound, setCurrentRound, nextRound, resetRounds] = useRounds();
    const [score, dispatch] = useReducer(scoreReducer, 0);
    const [gamingtext, failureText, sucessText, resetGamingText] = useGamingText();

    return (
        <GameContext.Provider value={{
            currentRound: currentRound,
            setCurrentRound: setCurrentRound,
            nextRound: nextRound,
            resetRounds: resetRounds,
            score: score,
            dispatch: dispatch,
            ref: ref,
            model: model,
            labels: labels,
            gamingtext: gamingtext,
            failureText: failureText,
            sucessText: sucessText,
            resetGamingText: resetGamingText
        }}>
            {currentRound > 9 ? <Result/> : <Game/>}
        </GameContext.Provider>
    );
}


export {App, GameContext};