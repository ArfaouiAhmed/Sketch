import React, {useEffect, useContext} from "react";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
import {Canvas} from "./Canvas";
import GamingText from "./GamingText";
import {getAppropriateText} from "./AppText";
import {Controls} from "./Controls";
import NesContainer from "./NesContainer";
import {Link} from "@reach/router";
import {GameContext} from "../App";
import {useTimer} from "./Timer";



const RoundContext = React.createContext({});

function Round() {
    const {currentRound, ref, labels} = useContext(GameContext);
    const [timer, seconds, resetTimer] = useTimer();

    useEffect(() => {
        console.log("drawtarget: " + labels[currentRound])
        return () => clearInterval(timer);
    }, [currentRound, labels, timer]);

    return (
            <div>
                you have {seconds} to draw {labels[currentRound]}
                <RoundContext.Provider value={{
                    seconds: seconds,
                    resetTimer: resetTimer
                }}>
                    <Controls/>
                </RoundContext.Provider>
            </div>
    );
}

export {Round, RoundContext};