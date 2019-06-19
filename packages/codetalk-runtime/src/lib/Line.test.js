import React from "react";
import Line from "./Line";
import renderer from "react-test-renderer";

describe("Line", () => {
  it("handles a simple title", () => {
    const tree = renderer
      .create(<Line input={[["#", "Hello world"]]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("handles a simple subtitle", () => {
    const tree = renderer.create(<Line input={[["##", "goodbye"]]} />);
    expect(tree).toMatchSnapshot();
  });
  it("handles simple text", () => {
    const tree = renderer.create(<Line input={["idk why you say goodbye"]} />);
    expect(tree).toMatchSnapshot();
  })
  it("handles a newline", () => {
    
  });
});
