import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapped = shallow(<App />);

describe("App", () => {
  it("renders the Layout component", () => {
      expect(wrapped.find("ThemeProvider"));
  });
  it("renders the Login component by default", () => {
    expect(wrapped.find("Login"));
  });
});