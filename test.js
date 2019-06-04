const nearley = require("nearley");
const grammar = require("./grammar.js");

describe("a simple codetalk", () => {
  const input = "prose\n  hello ";
  let parser;
  beforeAll(() => {
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), {
      keepHistory: true
    });
    parser.feed(input);    
  });
  test("produces exactly one parse result", () => {    
    expect(parser.results.length).toBe(1);
  });

  test("something", () => {    
    expect(parser.results).toBe([]);
  });
});
