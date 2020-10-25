import {mount} from "enzyme";
import {scoreReducer} from "./Score";
import React,{useReducer} from "react";

function TestScoreComponent() {
    const [score, dispatch] = useReducer(scoreReducer, 0);

    return (<div>
        <button id="reset" onClick={() => dispatch({type: "reset"})} />
        <button id="one" onClick={() => dispatch({type: "one"})} />
        <button id="two" onClick={() => dispatch({type: "two"})} />
        <div id="score">{score}</div>
    </div>);
}

describe("Test the score component functions", () => {

    const wrapper = mount(<TestScoreComponent />);

    it("initial score is 0", () => {
        expect(wrapper.find({id: "score"}).text(0));
    });

    it("add one point", () => {
        wrapper.find({id: "one"}).simulate("click");
        expect(wrapper.find({id: "score"}).text(1));
    });

    it("add two points", () => {
        wrapper.find({id: "two"}).simulate("click");
        expect(wrapper.find({id: "score"}).text(3));
    });

    it("reset points", () => {
        wrapper.find({id: "reset"}).simulate("click");
        expect(wrapper.find({id: "score"}).text(0));
    });
});
