import React from "react";
import { mount, shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it(" renders snapshot", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
  it("displays the containers", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find("BeerContainer")).toHaveLength(6);
  });

  it("displays all data nodes", () => {
    const wrapper = mount(<Dashboard />);
    expect(wrapper.find(".data")).toHaveLength(12);
  });
});
