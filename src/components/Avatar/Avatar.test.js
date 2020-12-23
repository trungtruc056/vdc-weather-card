import React from "react";
import "jest-styled-components";
import { shallowWithTheme } from "utils/testUtils";

import AvatarComponent from "components/Avatar";

describe("Component: Avatar", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<AvatarComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
