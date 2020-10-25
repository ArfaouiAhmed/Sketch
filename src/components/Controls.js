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



function Controls({ theCanvas, model, labels, round, nextRound, drawTarget }) {
    const [prediction, setPrediction] = useState(""); // Sets default label to empty string.
    const [seconds, setSeconds] = useState(20);

    const interval = setInterval(() => {
        if (seconds === 0) {
            clearInterval();
        } else {
            setSeconds(seconds - 1);
        }
    }, 1000);

    useEffect(() => {
        // console.log("prediction: "+ prediction);
        if(seconds === 0){
            predict();
        }
        return () => clearInterval(interval);
    });

    function predict(){
        getPrediction(theCanvas, model).then(prediction =>
            setPrediction(labels[prediction[0]])
        )

        nextRound();
        setSeconds(20);
        navigate('game')
    }

    return (
        <div>
            you have {seconds} to draw {drawTarget}
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