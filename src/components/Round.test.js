import React, {useContext, useReducer, useState} from 'react';
import renderer from "react-test-renderer";
import {mount} from "enzyme";
import {Round} from './Round';
import {Controls} from "./Controls";
import {GameContext} from "../App";
import * as tf from "@tensorflow/tfjs";

describe("<Round />", () => {

    //prepare some constants for testing
    const labels = require(".././labels.json");
    const model = tf.loadLayersModel("./model/model.json");
    const currentRound = 0;
    const score = 0;
    const roundComponent =
        <GameContext.Provider value={{
            currentRound: currentRound,
            score: score,
            labels: labels}}>
            <Round/>
        </GameContext.Provider>;
    const wrapper = mount(roundComponent);

    it("renders correctly", () => {
        const tree = renderer.create(roundComponent).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders: Controls", () => {
        expect(wrapper.find('Controls').exists()).toBeTruthy();
    });

    it("renders both buttons within Controls", () => {
        expect(wrapper.find({id: "clear"}).exists()).toBeTruthy();
        expect(wrapper.find({id: "predict"}).exists()).toBeTruthy();
    });
});