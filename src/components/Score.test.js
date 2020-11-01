import {mount} from "enzyme";
import {scoreReducer} from "./Score";
import React,{useReducer} from "react";
import renderer from "react-test-renderer";

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
        expect(wrapper.find({id: "score"}).text()).toEqual('0');
    });

    it("add one point to score", () => {
        wrapper.find({id: "one"}).simulate("click");
        expect(wrapper.find({id: "score"}).text()).toEqual('1');
    });

    it("add an other two points", () => {
        wrapper.find({id: "two"}).simulate("click");
        expect(wrapper.find({id: "score"}).text()).toEqual('3');
    });

    it("reset points to zero", () => {
        wrapper.find({id: "reset"}).simulate("click");
        expect(wrapper.find({id: "score"}).text()).toEqual('0');
    });
});
