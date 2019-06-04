const nearley = require("nearley");
const grammar = require("./grammar.js");

describe("a simple codetalk", () => {
    const input = `prose
      # Hello world`;
    let parser;
  beforeAll(() => {
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  })
  test("is not ambiguous", () => {    
    parser.feed(input);
    expect(parser.results.length).toBe(1);
  });

  test("something", () => {    
    parser.feed(input);
    expect(parser.results).toBe([]);
  });
});
