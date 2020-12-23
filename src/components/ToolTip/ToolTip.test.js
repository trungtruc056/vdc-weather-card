import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import ToolTip from "components/ToolTip";

describe("Component: List", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<ToolTip />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render props.title", () => {
    const component = shallowWithTheme(<ToolTip title={"Võ Trung Trực"} />);
    expect(component.text()).toContain("Võ Trung Trực");
  });
});
