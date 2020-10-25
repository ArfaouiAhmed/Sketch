
export function scoreReducer(scoreState, action) {
    switch (action.type) {
        case "reset":
            return 0;
        case "one":
            return scoreState + 1;
        case "two":
            return scoreState + 2;
        default:
            return scoreState;
    }
}
