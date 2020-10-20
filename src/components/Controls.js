import React, {useEffect, useState} from "react";
import {getPrediction} from "../helpers";
import { navigate } from '@reach/router'


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



function Controls({ theCanvas, model, labels, round, nextRound }) {
    let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

    useEffect(() => {
        console.log(prediction);
    });

    function predict(){
        getPrediction(theCanvas, model).then(prediction =>
            setPrediction(labels[prediction[0]])
        )
        nextRound();
        navigate('game')
    }

    return (
        <div>
            <button
                style={clearBtnStyle}
                className="nes-btn is-warning"
                onClick={() => {
                    const canvas = theCanvas.current;
                    const ctx = canvas.getContext("2d");
                    ctx.fillRect(0, 0, canvas.height, canvas.width);
                }}
            >
                Clear the canvas.
            </button>
            <button
                className="nes-btn is-warning"
                style={predictBtnStyle}
                onClick={() =>predict()}
            >
                Predict the drawing.
            </button>
        </div>
    );
}

export { Controls };