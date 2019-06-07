// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

  function nuller() {
    return null;
  }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "CodeTalk", "symbols": ["CodeTalkKeyWord", "Newline", "Slides", "Done"]},
    {"name": "CodeTalkKeyWord$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CodeTalkKeyWord", "symbols": ["CodeTalkKeyWord$string$1"]},
    {"name": "Slides$ebnf$1", "symbols": ["Slide"]},
    {"name": "Slides$ebnf$1", "symbols": ["Slides$ebnf$1", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Slides", "symbols": ["Slides$ebnf$1"]},
    {"name": "Slide$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Slide$ebnf$1", "symbols": ["Word"]},
    {"name": "Slide$ebnf$1", "symbols": ["Slide$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Slide", "symbols": ["Indent", "Slide$string$1", "Newline", "Indent", "Indent", "Slide$ebnf$1", "Indent", "EndSlide"]},
    {"name": "EndSlide$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EndSlide$ebnf$1", "symbols": ["Newline"]},
    {"name": "EndSlide$ebnf$1", "symbols": ["EndSlide$ebnf$1", "Newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "EndSlide", "symbols": ["EndSlide$string$1", "EndSlide$ebnf$1"]},
    {"name": "Newline", "symbols": [{"literal":"\n"}], "postprocess": nuller},
    {"name": "Indent$string$1", "symbols": [{"literal":" "}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Indent", "symbols": ["Indent$string$1"], "postprocess": nuller},
    {"name": "Space", "symbols": [{"literal":" "}]},
    {"name": "Word$ebnf$1", "symbols": ["Letter"]},
    {"name": "Word$ebnf$1", "symbols": ["Word$ebnf$1", "Letter"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Word$subexpression$1", "symbols": ["Space"]},
    {"name": "Word$subexpression$1", "symbols": ["Newline"]},
    {"name": "Word", "symbols": ["Word$ebnf$1", "Word$subexpression$1"], "postprocess":  function(data) {
          return data[0].join("")
        } },
    {"name": "Letter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "Done$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Done$ebnf$1", "symbols": []},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Space"]},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Newline"]},
    {"name": "Done$ebnf$1", "symbols": ["Done$ebnf$1", "Done$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Done", "symbols": ["Done$string$1", "Done$ebnf$1"]}
]
  , ParserStart: "CodeTalk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
