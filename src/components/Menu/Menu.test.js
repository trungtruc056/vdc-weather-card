import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import Menu from "components/Menu";

it("Render match Snapshot", () => {
  const wrapper = shallowWithTheme(<Menu />);
  expect(wrapper).toMatchSnapshot();
});
