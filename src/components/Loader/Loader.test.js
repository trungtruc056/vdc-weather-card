import React from "react";
import "jest-styled-components";
import { shallowWithTheme } from "utils/testUtils";

import Loader from "components/Loader";

describe("Component: Loader", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
