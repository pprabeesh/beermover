import React from "react";
import { mount, shallow } from "enzyme";
import BeerContainer from "./BeerContainer";

const props = {
  container: {
    name: "testContainer1",
    maxTemp: 4,
    minTemp: 3
  },
  currentTemps: [
    {
      id: "testContainer1",
      temperature: 3
    }
  ]
};

describe("BeerContainer", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<BeerContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it(" renders with class", () => {
    const wrapper = mount(<BeerContainer {...props} />);
    expect(wrapper.find("div")).toHaveLength(3);
    expect(wrapper.find(".item")).toHaveLength(1);
    expect(wrapper.find(".data")).toHaveLength(2);
    expect(wrapper.find(".notify")).toHaveLength(0);
  });

  it(" renders with notify clas", () => {
    props.currentTemps[0].temperature = 5;
    const wrapper = mount(<BeerContainer {...props} />);
    expect(wrapper.find("div")).toHaveLength(3);
    expect(wrapper.find(".item")).toHaveLength(1);
    expect(wrapper.find(".data")).toHaveLength(2);
    expect(wrapper.find(".notify")).toHaveLength(1);
  });

  it(" renders without current temp data", () => {
    props.currentTemps = [];
    const wrapper = mount(<BeerContainer {...props} />);
    expect(wrapper.find("div")).toHaveLength(3);
    expect(wrapper.find(".item")).toHaveLength(1);
    expect(wrapper.find(".data")).toHaveLength(2);
    expect(wrapper.find(".notify")).toHaveLength(0);
  });
});
