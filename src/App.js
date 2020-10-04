import React from "react";
import NesContainer from "./components/NesContainer";
import FlexRow from "./components/FlexRow";
import FlexColumn from "./components/FlexColumn";
import GamingText from "./components/GamingText";
import {getAppropriateText} from "./components/AppText";
import {Controls} from "./components/Controls";
import * as tf from "@tensorflow/tfjs";
import {Canvas} from "./components/Canvas";


const model = tf.loadLayersModel("./model/model.json");
const labels = require("./labels.json");
let ref = React.createRef();

const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};

function App() {

    return (
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
        </NesContainer>
    );
}


export default App;