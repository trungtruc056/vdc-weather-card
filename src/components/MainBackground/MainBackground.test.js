import React from "react";
import "jest-styled-components";
import { shallowWithTheme, mountWithTheme } from "utils/testUtils";

import BackgroundComponent from "components/MainBackground";

describe("Component: SuggestList", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<BackgroundComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render with props.bgColor", () => {
    const wrapper = mountWithTheme(<BackgroundComponent bgColor="#000000" />);
    expect(wrapper).toHaveStyleRule("background-color", "#000000");
  });
});
