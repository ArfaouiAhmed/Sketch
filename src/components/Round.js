import React, { useEffect, useContext} from "react";
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

    const {currentRound, ref, labels } = useContext(GameContext);


    useEffect(() => {
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
                <Canvas ref={ref}/>
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
                    <Controls  />
                </FlexRow>
            </FlexColumn>
        </FlexRow>
    </NesContainer>

);
}

export {Round};