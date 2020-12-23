import React from "react";
import "jest-enzyme";
import "jest-styled-components";
import { mountWithTheme, shallowWithTheme } from "utils/testUtils";

import SuggestList from "components/SuggestList";

describe("Component: SuggestList", () => {
  const mockData = ["Vietnam", "Lao", "Campuchia"];

  // Snapshot test
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<SuggestList data={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  // Mount test
  it("should render 3 list items based on props.items", () => {
    const wrapper = mountWithTheme(<SuggestList data={mockData} />);

    expect(wrapper.find("li")).toHaveLength(3);
  });

  // Render active item
  it("should render and active second item (Lao)", () => {
    const wrapper = mountWithTheme(
      <SuggestList data={mockData} activeIndex={1} />
    );

    expect(wrapper.find("li").at(1)).toHaveStyleRule(
      "background-color",
      "#565656"
    );
  });

  // simulate click item of suggestionList
  it("Simulate click", () => {
    const clickFn = jest.fn();
    const wrapper = mountWithTheme(
      <SuggestList data={mockData} onItemClicked={clickFn} />
    );
    wrapper.find("li").at(0).simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
