import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import GamingText from "./GamingText";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {GameContext} from "../App";

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
    const { resetRounds ,score ,dispatch} = useContext(GameContext);
    let resultText = score > 8 ?  "gameEndSuccess" :  "gameEndFailure";
    let finalText = getAppropriateText(resultText).replace("scoreValue", score);

    return (
        <NesContainer style={resultContainer} title={"Sketch!"} dark >
            <FlexRow>
                <FlexColumn>
                    <GamingText strings={[finalText]}/>
                </FlexColumn>
                <FlexColumn>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                    <FlexRow>
                        <Link to="/">
                            <button type="button"
                                    style={homeBtnStyle}
                                    className="nes-btn">
                                Home
                            </button>
                        </Link>
                        <Link to="/game">
                            <button
                                className="nes-btn is-warning"
                                style={tryBtnStyle}
                                onClick={() => {
                                    resetRounds();
                                    dispatch({type: "reset"});
                                }}>
                                Try Again.
                            </button>
                        </Link>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </NesContainer>
    );
}

export {Result};