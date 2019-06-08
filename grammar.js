// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function nth(n) {
    return function(d) {
        return d[n];
    };
}


// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function $(o) {
    return function(d) {
        var ret = {};
        Object.keys(o).forEach(function(k) {
            ret[k] = d[o[k]];
        });
        return ret;
    };
}
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "CodeTalk$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CodeTalk$ebnf$1", "symbols": ["Slide"]},
    {"name": "CodeTalk$ebnf$1", "symbols": ["CodeTalk$ebnf$1", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk", "symbols": ["CodeTalk$string$1", "Newline", "CodeTalk$ebnf$1", "Done"], "postprocess":  
        data => [data[0]].concat(data[2]).concat(data[3][0]) 
        },
    {"name": "Slide$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Slide", "symbols": ["Indent", "Slide$string$1", "Newline", "Markdown", "Indent", "EndSlide"], "postprocess":  
        data => [data[1]].concat(data[3]).concat(data[5])
        },
    {"name": "Markdown$ebnf$1", "symbols": ["Block"]},
    {"name": "Markdown$ebnf$1", "symbols": ["Markdown$ebnf$1", "Block"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Markdown", "symbols": ["Markdown$ebnf$1"]},
    {"name": "EndSlide$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EndSlide$ebnf$1", "symbols": ["Newline"]},
    {"name": "EndSlide$ebnf$1", "symbols": ["EndSlide$ebnf$1", "Newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "EndSlide", "symbols": ["EndSlide$string$1", "EndSlide$ebnf$1"], "postprocess": id},
    {"name": "Block$ebnf$1", "symbols": ["Word"]},
    {"name": "Block$ebnf$1", "symbols": ["Block$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Block$ebnf$2", "symbols": []},
    {"name": "Block$ebnf$2", "symbols": ["Block$ebnf$2", "Newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Block", "symbols": ["Indent", "Indent", "Block$ebnf$1", "Block$ebnf$2"], "postprocess":  
        data => data[2].join(' ') 
        },
    {"name": "Word$ebnf$1", "symbols": ["Letter"]},
    {"name": "Word$ebnf$1", "symbols": ["Word$ebnf$1", "Letter"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Word$subexpression$1", "symbols": ["Space"]},
    {"name": "Word$subexpression$1", "symbols": ["Newline"]},
    {"name": "Word", "symbols": ["Word$ebnf$1", "Word$subexpression$1"], "postprocess":  
        data => data[0].join("")
        },
    {"name": "Letter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "Done$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Done$ebnf$1", "symbols": []},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Space"]},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Newline"]},
    {"name": "Done$ebnf$1", "symbols": ["Done$ebnf$1", "Done$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Done", "symbols": ["Done$string$1", "Done$ebnf$1"]},
    {"name": "Newline", "symbols": [{"literal":"\n"}]},
    {"name": "Indent$string$1", "symbols": [{"literal":" "}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Indent", "symbols": ["Indent$string$1"]},
    {"name": "Space", "symbols": [{"literal":" "}]}
]
  , ParserStart: "CodeTalk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
