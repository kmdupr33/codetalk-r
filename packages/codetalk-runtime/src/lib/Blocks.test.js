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
    const tree = renderer.create(
      <Blocks input={["idk why you say goodbye"]} />
    );
    expect(tree).toMatchSnapshot();
  });
  it("handles a newline", () => {
    const tree = renderer.create(
      <Blocks input={[["##", "this is code talk"], ["\n"]]} />
    );
    expect(tree).toMatchSnapshot();
  });
  it("handles codeblocks", () => {
    const tree = renderer.create(
      <Blocks
        input={[
          [
            "```",
            "javascript",
            "import React from 'react';\nconst HelloWorld = ({name}) => {\n  return <p>Hello, {name}</p>\n};\n"
          ]
        ]}
      />      
    );
    expect(tree).toMatchSnapshot();
  });
});
