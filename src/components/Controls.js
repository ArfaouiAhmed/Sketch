import React, {useContext, useEffect, useState} from "react";
import {getPrediction} from "../helpers";
import {navigate} from '@reach/router'
import {GameContext} from "../App";
import {useTimer} from "./Timer";


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
    const {currentRound, setCurrentRound, score, dispatch, ref, model, labels} = useContext(GameContext);
    const [prediction, setPrediction] = useState(""); // Sets default label to empty string.
    const [timer, seconds, resetTimer] = useTimer();


    useEffect(() => {
        console.log("prediction: "+ prediction);
        if (seconds === 0) {
            predict();
        }else{
            return clearInterval(timer);
        }
    }, [prediction, predict, seconds, timer, resetTimer]);

    function predict() {
        getPrediction(ref, model).then(prediction => {
                console.log("Predicting...");
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

        setCurrentRound(currentRound + 1);
        resetTimer();
        navigate('game');
    }

    return (
        <div>
            you have {seconds} to draw {labels[currentRound]}
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
        </div>
    );
}

export {Controls};