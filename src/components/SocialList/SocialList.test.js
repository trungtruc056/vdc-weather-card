import React from "react";
import { shallowWithTheme, mountWithTheme } from "utils/testUtils";

import SocialList from "components/SocialList";

describe("Component: SocialList", () => {
  const mockData = [
    { url: "https://www.linkedin.com/in/trungtruc056/", title: "Linkedin" },
  ];
  it("Render match Snapshot", () => {
    const wrapper = shallowWithTheme(<SocialList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Render with props.data", () => {
    const wrapper = mountWithTheme(<SocialList data={mockData} />);
    expect(wrapper.find("li").at(0).text()).toContain("Linkedin");
  });
});
