import React, {useEffect, useContext} from "react";
import {Controls} from "./Controls";
import {GameContext} from "../App";
import {useTimer} from "./Timer";

const RoundContext = React.createContext({});

function Round() {
    const {currentRound, labels} = useContext(GameContext);
    const [timer, seconds, resetTimer] = useTimer();

    useEffect(() => {
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