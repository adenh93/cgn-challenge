import * as React from "react";
import { create } from "react-test-renderer";
import Alert from "../Alert";

describe("Alert Component", () => {
  test("it matches the snapshot", () => {
    const component = create(
      <Alert message="Error Message" severity="error" />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
