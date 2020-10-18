import * as tf from "@tensorflow/tfjs";
import React, {useState, useEffect} from "react";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import {Canvas} from "./Canvas";
import GamingText from "./GamingText";
import {getAppropriateText} from "./AppText";
import {Controls} from "./Controls";
import NesContainer from "./NesContainer";


const model = tf.loadLayersModel("./model/model.json");
const labels = require(".././labels.json");
let ref = React.createRef();

const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};
const RoundContext = React.createContext({});

function Round() {
    let [currentRound, setCurrentRound] = useState(1);
    let [drawTarget, setDrawTarget] = useState('');



    useEffect(() => {
        setDrawTarget(labels[currentRound]);
    });


    return (
        <NesContainer title={"Sketch! - Round " + (currentRound) +  " of "+ labels.length} dark>
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
                        <GamingText strings={[getAppropriateText("gameFailure", 20 , drawTarget)]}/>
                        {/*<GamingText strings={['Some <i>strings</i> are slanted']}/>*/}
                    </FlexRow>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                    <FlexRow>
                        <Controls theCanvas={ref} model={model} labels={labels} round={currentRound} nextRound={() => setCurrentRound(currentRound +1)}/>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </NesContainer>
    );
}

export {Round};