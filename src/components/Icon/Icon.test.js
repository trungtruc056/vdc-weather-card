import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import Icon from "components/Icon";

it("Render match Snapshot", () => {
  const wrapper = shallowWithTheme(<Icon />);
  expect(wrapper).toMatchSnapshot();
});
