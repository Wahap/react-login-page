import React from "react";
import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("renders without crashing", () => {
  test("render", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
