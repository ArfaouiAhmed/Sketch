

export function getAppropriateText(gamestatus, seconds, target) {
    let textElement = AppTexts.find(o => o.status === gamestatus);
    if(textElement.text.length > 0){
        return textElement.text;
    }
}

const AppTexts =[
    {
        status: "gameStart",
        text: "let's get started. You have \nsecondsValue seconds to draw a roundValue \nin the box on the left."
    },
    {
        status: "gameSuccess",
        text: "You know, that was a damn \nfine sketch! You have \nsecondsValue seconds to draw a roundValue."
    },
    {
        status: "gameFailure",
        text: "Not good enough, but here's \nan other chance. You \nhave SecondsValue seconds to draw \na car."
    },
    {
        status: "gameEndSuccess",
        text: "Very Good, you scores 2 points."
    },
    {
        status: "gameEndFailure",
        text: "Womp,womp... Try harder next time,and\nmaybe you'll score more than just 2 points."
    },
    {
        status: "welcome",
        text: "This game has been modeled-off Google`s <a href=\"https://quickdraw.withgoogle.com/\">Quick Draw!</a> game,\n and uses a sampling from the Quick, Draw! <a href=\"https://github.com/googlecreativelab/quickdraw-dataset\">dataset</a>."
    },{
        status: "toYouby",
        text: "Brought to you by the EPFL extention School."
    }

];


