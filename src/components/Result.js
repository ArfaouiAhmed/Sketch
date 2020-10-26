import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import GamingText from "./GamingText";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React, {useContext} from "react";
import { Link } from "@reach/router"
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
    const { setCurrentRound ,score ,dispatch} = useContext(GameContext);



    return (
        <NesContainer style={resultContainer} title={"Sketch!"} dark >
            <FlexRow>
                <FlexColumn>
                    you scored : {score}
                    <GamingText strings={[getAppropriateText("gameEndFailure")]}/>
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
                                    setCurrentRound(0);
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