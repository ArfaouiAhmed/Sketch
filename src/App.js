import React, {useEffect, useState} from "react";
import {Round} from "./components/Round";
import {Result} from "./components/Result";


const GameContext = React.createContext({currentRound: 0, setCurrentRound : null});


function App() {

    let [currentRound, setCurrentRound] = useState(1);

    useEffect(() => {
       console.log(currentRound)
    });


    return (
        <GameContext.Provider value={{currentRound: currentRound, setCurrentRound: setCurrentRound} }>
            {currentRound > 9 ? <Result/> : <Round/>}
        </GameContext.Provider>
    );
}


export {App, GameContext};