const lexer = require("./lexer");

describe("lexer", () => {
  it("detects lists", () => {
    expect(
      lexer
        .reset(
          `
    * hello
    * world
    `
        )
        .next()
    ).toMatchSnapshot();
  });
});
