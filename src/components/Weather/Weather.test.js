import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import Weather from "components/Weather";

describe("Component: Weather", () => {
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<Weather />);
    expect(wrapper).toMatchSnapshot();
  });
});
