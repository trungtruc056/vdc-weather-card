import React from "react";
import { mount, shallow } from "enzyme";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "themes";

export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
    ),
  });
}

export function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
    ),
  });
}
