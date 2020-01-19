import * as React from "react";
import { create } from "react-test-renderer";
import { Product } from "../../../../../types";
import ProductListItem from "../../ProductListItem";

const product: Product = {
  title: "Title",
  description: "Description",
  price: 400,
  image: ""
};

describe("ProductListItem Component", () => {
  test("it matches the snapshot", () => {
    const component = create(<ProductListItem {...product} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
