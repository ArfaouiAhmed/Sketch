import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import NesContainer from "./NesContainer";
import {getAppropriateText} from "./AppText";
import React from "react";
import {TypedText} from "./TypedText";
import { Link } from "react-router-dom";


function Home() {


    return (
        <NesContainer dark >
            <FlexColumn>
                <h1>Sketch!</h1>
                    <FlexRow>
                        <TypedText text={getAppropriateText("welcome")}/>
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