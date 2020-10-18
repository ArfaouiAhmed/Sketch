import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React from "react";
import GamingText from "./GamingText";

const homeBtnStyle = {
    position: 'absolute',
    left: '850px',
    top: '15px'
};


const resultContainer = {
    // height: '160px'
};


function Home() {


    return (
        <NesContainer style={resultContainer}  dark >
            <FlexColumn>
                <h1>Sketch!</h1>
                    <FlexRow>
                        <GamingText strings={[getAppropriateText("welcome")]}/>
                    </FlexRow>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                    <FlexRow>
                        { getAppropriateText("toYouby") }
                    </FlexRow>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                <button type="button"
                        className="nes-btn">
                    Play game
                </button>
            </FlexColumn>
        </NesContainer>
    );
}

export {Home};