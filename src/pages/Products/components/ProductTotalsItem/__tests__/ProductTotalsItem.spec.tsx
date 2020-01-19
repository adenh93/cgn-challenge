import * as React from "react";
import { create } from "react-test-renderer";
import ProductTotalsItem, {
  ProductTotalsItemProps
} from "../ProductTotalsItem";
import { CircularProgress } from "@material-ui/core";

const props: ProductTotalsItemProps = {
  label: "Total",
  amount: 300,
  isWaiting: false
};

describe("ProductTotals Component", () => {
  test("it matches the snapshot", () => {
    const component = create(<ProductTotalsItem {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("it renders a CircularProgress component if an api call is in progress", () => {
    const { root } = create(
      <ProductTotalsItem {...{ ...props, isWaiting: true }} />
    );
    expect(root.findByType(CircularProgress)).toBeDefined();
  });
});
