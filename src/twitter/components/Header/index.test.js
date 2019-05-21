import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Index from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Index />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
