import React from "react";
import { shallowWithTheme } from "utils/testUtils";

import MyAccount from "components/MyAccount";

it("Render match Snapshot", () => {
  const wrapper = shallowWithTheme(<MyAccount />);
  expect(wrapper).toMatchSnapshot();
});
