import React from "react";
import { shallow } from "enzyme";
import ThemeProvider from "./ThemeProvider";

const testChild = 'TestChild'
let wrapped = shallow(<ThemeProvider><div>{testChild}</div></ThemeProvider>);

describe("ThemeProvider", () => {
it("renders children", () => {
  expect(wrapped.find("div").text()).toEqual(testChild);
  });
});