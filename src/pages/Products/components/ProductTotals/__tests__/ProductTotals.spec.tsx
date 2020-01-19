import * as React from "react";
import { create } from "react-test-renderer";
import ProductTotals from "../ProductTotals";

describe("ProductTotals Component", () => {
  test("it matches the snapshot", () => {
    const component = create(
      <ProductTotals total={500} productCount={5} isWaiting={false} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
