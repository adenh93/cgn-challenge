import * as React from "react";
import { create } from "react-test-renderer";
import ProductList from "../ProductList";
import { Product } from "../../../../../types";
import ProductListItem from "../../ProductListItem";
import Alert from "../../../../../components/UI/Alert";

const products: Array<Product> = [
  {
    title: "Title"
  } as Product
];

describe("ProductList Component", () => {
  test("it renders a ProductListItem child when provided with a list of products", () => {
    const productList = create(
      <ProductList products={products} loading={false} error={false} />
    );
    const instance = productList.root;
    expect(instance.findByType(ProductListItem)).toBeDefined();
  });

  test("it renders a Alert warning child component if products prop is empty", () => {
    const productList = create(
      <ProductList products={[]} loading={false} error={false} />
    );
    const instance = productList.root;
    const alert = instance.findByType(Alert);

    expect(alert).toBeDefined();
    expect(alert.props["severity"]).toBe("warning");
  });

  test("it renders an Alert error child component if error prop is true", () => {
    const productList = create(
      <ProductList products={[]} loading={false} error={true} />
    );
    const instance = productList.root;
    const alert = instance.findByType(Alert);

    expect(alert).toBeDefined();
    expect(alert.props["severity"]).toBe("error");
  });

  test("it renders no child components if an API call is in progress", () => {
    const productList = create(
      <ProductList products={[]} loading={true} error={false} />
    );
    const instance = productList.root;
    expect(instance.children.length).toBe(0);
  });
});
