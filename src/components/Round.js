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




const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};


function Round() {

    const [drawTarget, setDrawTarget] = useState('');
    const {currentRound, setCurrentRound, seconds, setSeconds, canvas, model, labels } = useContext(GameContext);


    useEffect(() => {
     setDrawTarget(labels[currentRound]);
    console.log("drawtarget: " + labels[currentRound])
    },[currentRound, labels]);


return (
    <NesContainer title={"Sketch! - Round " + (currentRound + 1) + " of " + labels.length} dark>
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
                <Canvas ref={canvas}/>
            </FlexColumn>
            <FlexColumn>
                <FlexRow>
                    <GamingText strings={[getAppropriateText("gameFailure")]}/>
                </FlexRow>
                <FlexRow>

                </FlexRow>
                <FlexRow>
                    &nbsp;
                </FlexRow>
                <FlexRow>
                    <Controls theCanvas={canvas} model={model} labels={labels} round={currentRound}
                              nextRound={() => setCurrentRound(currentRound + 1)} seconds={seconds} setSeconds={setSeconds} drawTarget={drawTarget} />
                </FlexRow>
            </FlexColumn>
        </FlexRow>
    </NesContainer>

);
}

export {Round};