// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "CodeTalk$ebnf$1", "symbols": ["Slide"]},
    {"name": "CodeTalk$ebnf$1", "symbols": ["CodeTalk$ebnf$1", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk", "symbols": ["CodeTalk$ebnf$1"]},
    {"name": "Slide$string$1", "symbols": [{"literal":"P"}, {"literal":"R"}, {"literal":"O"}, {"literal":"S"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Slide$ebnf$1", "symbols": ["Word"]},
    {"name": "Slide$ebnf$1", "symbols": ["Slide$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Slide", "symbols": ["Slide$string$1", "Newline", "Indent", "Slide$ebnf$1", "Done"]},
    {"name": "Newline", "symbols": [{"literal":"\n"}]},
    {"name": "Indent$string$1", "symbols": [{"literal":" "}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Indent", "symbols": ["Indent$string$1"]},
    {"name": "Space", "symbols": [{"literal":" "}]},
    {"name": "Word$ebnf$1", "symbols": ["Letter"]},
    {"name": "Word$ebnf$1", "symbols": ["Word$ebnf$1", "Letter"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Word", "symbols": ["Word$ebnf$1", "Space"], "postprocess":  function(data) {
          return data[0].join("")
        } },
    {"name": "Letter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "Done$string$1", "symbols": [{"literal":"E"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Done$subexpression$1", "symbols": ["Space"]},
    {"name": "Done$subexpression$1", "symbols": ["Newline"]},
    {"name": "Done", "symbols": ["Newline", "Done$string$1", "Done$subexpression$1"]}
]
  , ParserStart: "CodeTalk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
