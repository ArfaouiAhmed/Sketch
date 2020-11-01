import React from 'react';
import {mount, shallow} from "enzyme";
import {App} from "./App";
import {Game} from "./components/Game";


describe("Test the <App /> component", () => {

  const wrapper = shallow(<App />);


  it("renders Game if currentRound is < 9 ", () => {
    expect(wrapper.find('Game').exists()).toBeTruthy();
  });

  it("renders Result if currentRound is > 9 ", () => {
    wrapper.setProps({ value: { currentRound: 10 } });
    console.log(wrapper.props().value.currentRound);
    expect(wrapper.find('Result').exists());

  });

});
