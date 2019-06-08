const nearley = require("nearley");
const grammar = require("./grammar");
const fs = require("fs");

describe("codetalk", () => {
  // Helpers
  let parser;
  const readFile = (path) => fs.readFileSync(path, 'utf8');
  const expectToParse = (parser, input) => {
    parser.feed(input);
    expect(parser.results.length).toBe(1);
    expect(parser.results).toMatchSnapshot();
  }
  // ---
  
  beforeEach(() => {    
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), {
      keepHistory: true
    });    
  });
  test("hello_world.codetalk parses correctly", () => {      
    const input = readFile('./code_talks/hello_world.codetalk');        
    expectToParse(parser, input);
  });  
  test("basic.codetalk parses correctly", () => {
    const input = readFile('./code_talks/basic.codetalk');
    expectToParse(parser, input);
  })  
  test("complex.codetalk parses correctly", () => {
    const input = readFile('./code_talks/complex.codetalk');
    expectToParse(parser, input);
  })
  test("paragraphs.codetalk parses correctly", () => {
    const input = readFile('./code_talks/paragraphs.codetalk');
    expectToParse(parser, input);
  })
});
