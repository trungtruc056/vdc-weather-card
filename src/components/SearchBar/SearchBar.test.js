import React from "react";
import { mountWithTheme } from "utils/testUtils";

import SearchBar from "components/SearchBar";

describe("Component: SearchBar", () => {
  it("Render match Snapshot", () => {
    const wrapper = mountWithTheme(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
