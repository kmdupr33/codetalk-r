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
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "CodeTalk", "symbols": ["CodeTalkKeyWord", "__", "Slides", "Done"]},
    {"name": "CodeTalkKeyWord$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CodeTalkKeyWord", "symbols": ["CodeTalkKeyWord$string$1"]},
    {"name": "Slides$ebnf$1", "symbols": ["Slide"]},
    {"name": "Slides$ebnf$1", "symbols": ["Slides$ebnf$1", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Slides", "symbols": ["Slides$ebnf$1"]},
    {"name": "Slide$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Slide$ebnf$1", "symbols": ["Word"]},
    {"name": "Slide$ebnf$1", "symbols": ["Slide$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Slide", "symbols": ["Slide$string$1", "__", "Slide$ebnf$1", "__", "EndSlide"]},
    {"name": "EndSlide$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EndSlide", "symbols": ["EndSlide$string$1", "__"]},
    {"name": "Word$ebnf$1", "symbols": ["Letter"]},
    {"name": "Word$ebnf$1", "symbols": ["Word$ebnf$1", "Letter"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Word", "symbols": ["Word$ebnf$1", "__"], "postprocess":  function(data) {
          return data[0].join("")
        } },
    {"name": "Letter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "Done$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Done", "symbols": ["Done$string$1", "_"]}
]
  , ParserStart: "CodeTalk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
