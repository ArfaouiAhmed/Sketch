import * as tf from "@tensorflow/tfjs";
import React, {useState, useEffect, useContext} from "react";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import {Canvas} from "./Canvas";
import GamingText from "./GamingText";
import {getAppropriateText} from "./AppText";
import {Controls} from "./Controls";
import NesContainer from "./NesContainer";
import {Link} from "@reach/router";
import {GameContext} from "../App";



const model = tf.loadLayersModel("./model/model.json");
const labels = require(".././labels.json");
let ref = React.createRef();

const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};


function Round() {

    let [drawTarget, setDrawTarget] = useState('');

    const {currentRound, setCurrentRound} = useContext(GameContext);


    useEffect(() => {
        setDrawTarget(labels[currentRound]);
    }, [currentRound]);


    return (
            <NesContainer title={"Sketch! - Round " + (currentRound) +  " of "+ labels.length} dark>
                <div>
                    <Link to="/">
                        <button type="button"
                                style={homeBtnStyle}
                                className="nes-btn">
                            Home
                        </button>
                    </Link>
                </div>
                <FlexRow>
                    <FlexColumn>
                        <Canvas ref={ref}/>
                    </FlexColumn>
                    <FlexColumn>
                        <FlexRow>
                            <GamingText strings={[getAppropriateText("gameFailure", 20 , drawTarget)]}/>
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