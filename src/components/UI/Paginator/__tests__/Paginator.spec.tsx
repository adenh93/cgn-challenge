import * as React from "react";
import { create } from "react-test-renderer";
import Paginator, { PaginatorProps } from "../Paginator";
import { Button } from "@material-ui/core";

const props: PaginatorProps = {
  disableNext: false,
  disablePrev: false,
  onClickNext: () => {},
  onClickPrev: () => {}
};

describe("Alert Component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Paginator {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("the previous button is disabled when disablePrev prop is passed", () => {
    const { root } = create(<Paginator {...{ ...props, disablePrev: true }} />);
    const prevButton = root.findAllByType(Button)[0];
    expect(prevButton.props["disabled"]).toBe(true);
  });

  test("the next button is disabled when disableNext prop is passed", () => {
    const { root } = create(<Paginator {...{ ...props, disableNext: true }} />);
    const prevButton = root.findAllByType(Button)[1];
    expect(prevButton.props["disabled"]).toBe(true);
  });
});
