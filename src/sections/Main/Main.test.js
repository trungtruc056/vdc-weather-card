import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import Main from "sections/Main";

it("Render match Snapshot", () => {
  const wrapper = shallowWithTheme(<Main />);
  expect(wrapper).toMatchSnapshot();
});
