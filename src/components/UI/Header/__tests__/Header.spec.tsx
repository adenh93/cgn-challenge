import * as React from "react";
import { create } from "react-test-renderer";
import Header from "../Header";

describe("Header Component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Header title="App Title" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
