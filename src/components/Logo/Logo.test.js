import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import Logo from "components/Logo";

describe("Component: Logo", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render match with text", () => {
    const wrapper = shallowWithTheme(<Logo />);
    expect(wrapper.text()).toContain("Weather Card");
  });
});
