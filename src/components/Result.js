import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import GamingText from "./GamingText";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React from "react";

const homeBtnStyle = {
    position: 'absolute',
    left: '850px',
    top: '15px'
};

const tryBtnStyle = {
    position: 'absolute',
    left: '800px',
    top: '70px'
};

const resultContainer = {
    height: '160px'

};


function Result() {


    return (
        <NesContainer style={resultContainer} title={"Sketch!"} dark >
            <FlexRow>
                <FlexColumn>
                    <GamingText strings={[getAppropriateText("gameEndFailure")]}/>
                </FlexColumn>
                <FlexColumn>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                    <FlexRow>
                        <button type="button"
                                style={homeBtnStyle}
                                className="nes-btn">
                            Home
                        </button>
                        <button
                            className="nes-btn is-warning"
                            style={tryBtnStyle}>
                            Try Again.
                        </button>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </NesContainer>
    );
}

export {Result};