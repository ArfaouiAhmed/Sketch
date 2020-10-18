import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React from "react";
import GamingText from "./GamingText";
import { Link } from "@reach/router"

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
                <Link to="/game">
                <button type="button"
                        className="nes-btn">
                    Play game
                </button>
                </Link>
            </FlexColumn>
        </NesContainer>
    );
}

export {Home};