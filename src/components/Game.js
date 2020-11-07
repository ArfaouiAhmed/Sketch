import {Link} from "react-router-dom";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import {Canvas} from "./Canvas";
import {getAppropriateText} from "./AppText";
import NesContainer from "./NesContainer";
import React, {useContext} from "react";
import {Round} from "./Round";
import {GameContext} from "../App";
import {TypedText} from "./TypedText";


const homeBtnStyle = {
    position: 'relative',
    left: '850px',
    top: '-20px'
};

function Game() {
    const {currentRound, ref, labels, gamingtext} = useContext(GameContext);

    return(
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
                        <TypedText text={getAppropriateText(gamingtext)} />
                    </FlexRow>
                    <FlexRow>

                    </FlexRow>
                    <FlexRow>
                        &nbsp;
                    </FlexRow>
                    <FlexRow>
                        <Round/>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </NesContainer>
    );

}

export {Game}