import React, {useEffect, useState} from "react";
import {getPrediction} from "../helpers";


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

function Controls({ theCanvas, model, labels }) {
    let [prediction, setPrediction] = useState(""); // Sets default label to empty string.

    useEffect(() => {
        console.log(prediction);
    });

    return (
        <div>
            <button
                style={clearBtnStyle}
                class="nes-btn is-warning"
                onClick={() => {
                    const canvas = theCanvas.current;
                    const ctx = canvas.getContext("2d");
                    ctx.fillRect(0, 0, canvas.height, canvas.width);
                }}
            >
                Clear the canvas.
            </button>
            <button
                class="nes-btn is-warning"
                style={predictBtnStyle}
                onClick={() =>
                    getPrediction(theCanvas, model).then(prediction =>
                        setPrediction(labels[prediction[0]])
                    )
                }
            >
                Predict the drawing.
            </button>
        </div>
    );
}

export { Controls };