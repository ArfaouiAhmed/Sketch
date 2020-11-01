import React, {useContext, useState} from "react";
import {getPrediction} from "../helpers";
import {useHistory} from "react-router-dom";
import {GameContext} from "../App";
import {RoundContext} from "./Round";


const clearBtnStyle = {
    position: 'absolute',
    left: '500px',
    top: '300px'
};

const predictBtnStyle = {
    position: 'absolute',
    left: '500px',
    top: '250px'
};


function Controls() {
    const {currentRound, nextRound, score, dispatch, ref, model, labels} = useContext(GameContext);
    const [prediction, setPrediction] = useState(""); // Sets default label to empty string.
    const {seconds, resetTimer} = useContext(RoundContext);
    const history = useHistory();


    function predict() {
        console.log("Prediction: " + prediction);
        getPrediction(ref, model).then(prediction => {
                setPrediction(labels[prediction[0]]);
                if (labels[prediction[0]] === labels[currentRound]) {
                    if (seconds < 10) {
                        dispatch({type: "one"});
                        console.log("+1");
                    } else {
                        dispatch({type: "two"});
                        console.log("+2")
                    }
                }
            }
        )

        nextRound();
        resetTimer();
        history.push("game");
    }


    return (
        <div>
            {seconds > 0 ? <div>

                    <button
                        style={clearBtnStyle}
                        className="nes-btn is-warning"
                        id="clear"
                        onClick={() => {
                            const canvas = ref.current;
                            const ctx = canvas.getContext("2d");
                            ctx.fillRect(0, 0, canvas.height, canvas.width);
                        }}
                    >
                        Clear the canvas.
                    </button>
                    <button
                        className="nes-btn is-warning"
                        style={predictBtnStyle}
                        onClick={() => predict()}
                        id="predict"
                    >
                        Predict the drawing.
                    </button>
                    <div>
                        your Score : {score}
                    </div>
                </div>
                : predict()}
        </div>
    );
}

export {Controls};