

export function getAppropriateText(gamestatus) {
    let textElement = AppTexts.find(o => o.status === gamestatus);
    return textElement.text;
}

const AppTexts =[
    {
        status: "gameStart",
        // text: "let's get started. "
        text: "let's get started. You have <br/>20 seconds to draw a bird <br/>in the box on the left."
    },
    {
        status: "gameSuccess",
        text: "You know, that was a damn <br/>fine sketch! You have <br/>20 seconds to draw a car."
    },
    {
        status: "gameFailure",
        text: "Not good enough, but here's <br/>an other chance. You <br/>have 20 seconds to draw <br/>a car."
    },
    {
        status: "gameEndSuccess",
        text: "Very Good, you scores 2 points."
    },
    {
        status: "gameEndFailure",
        text: "Womp,womp... Try harder next time,and maybe you'll score more than just 2 points."
    },
    {
        status: "Welcome",
        text: "This game has been modeled-off Google`s Quick,link/Draw!link game, and uses a sampling from the Quick, Draw! linkdatasetlink. Brought to you by the EPFL extention School."
    }
];


