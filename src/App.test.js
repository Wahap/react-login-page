import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import configureStore from "../src/redux/configureStore";
const store = configureStore();
import Enzyme, { shallow, mount } from "enzyme";

describe("renders without crashing", () => {
  test("render", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
