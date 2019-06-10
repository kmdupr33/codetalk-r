const nearley = require("nearley");
module.exports = new nearley.Parser(
  nearley.Grammar.fromCompiled(require("./grammar")),
  {
    keepHistory: true
  }
);
