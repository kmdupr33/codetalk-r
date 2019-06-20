import React from "react";
import Blocks from "./Blocks";
import renderer from "react-test-renderer";

describe("Blocks", () => {
  it("handles a simple title", () => {
    const tree = renderer
      .create(<Blocks input={[["#", "Hello world"]]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("handles a simple subtitle", () => {
    const tree = renderer.create(<Blocks input={[["##", "goodbye"]]} />);
    expect(tree).toMatchSnapshot();
  });
  it("handles simple text", () => {
    const tree = renderer.create(<Blocks input={["idk why you say goodbye"]} />);
    expect(tree).toMatchSnapshot();
  })  
  it("handles a newline", () => {
    
  });
});
