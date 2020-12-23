import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import SwitchThemeButton from "components/SwitchThemeButton";

describe("Component: List", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<SwitchThemeButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Toggle successfully", () => {
    const clickFn = jest.fn();
    const wrapper = shallowWithTheme(
      <SwitchThemeButton onChangeTheme={clickFn} />
    );
    wrapper.simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
