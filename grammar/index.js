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


  const hash = data => [data[0].trim()].concat([data[1]])
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "CodeTalk$ebnf$1", "symbols": []},
    {"name": "CodeTalk$ebnf$1", "symbols": ["CodeTalk$ebnf$1", "Newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CodeTalk$ebnf$2", "symbols": ["Slide"]},
    {"name": "CodeTalk$ebnf$2", "symbols": ["CodeTalk$ebnf$2", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk", "symbols": ["CodeTalk$ebnf$1", "CodeTalk$string$1", "Newline", "CodeTalk$ebnf$2", "Done"], "postprocess":  
        data => [data[1]].concat(data[3]).concat(data[4][1]) 
        },
    {"name": "Slide$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Slide", "symbols": ["Indent", "Slide$string$1", "Newline", "Markdown", "Indent", "EndSlide"], "postprocess":  
        data => [data[1]].concat(data[3]).concat(data[5])
        },
    {"name": "Markdown$ebnf$1", "symbols": ["Blocks"]},
    {"name": "Markdown$ebnf$1", "symbols": ["Markdown$ebnf$1", "Blocks"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Markdown", "symbols": ["Markdown$ebnf$1"]},
    {"name": "Blocks$ebnf$1", "symbols": []},
    {"name": "Blocks$ebnf$1", "symbols": ["Blocks$ebnf$1", "EmptyBlock"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Blocks", "symbols": ["Block", "Blocks$ebnf$1"], "postprocess": 
        // If there are no empty blocks, we don't want them 
        // showing up in the parse results
        data => data.filter(item => item[0]) 
        },
    {"name": "EmptyBlock$ebnf$1", "symbols": ["Indent"], "postprocess": id},
    {"name": "EmptyBlock$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EmptyBlock$ebnf$2", "symbols": ["Indent"], "postprocess": id},
    {"name": "EmptyBlock$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EmptyBlock", "symbols": ["EmptyBlock$ebnf$1", "EmptyBlock$ebnf$2", "Newline"], "postprocess": nth(2)},
    {"name": "EndSlide$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EndSlide$ebnf$1", "symbols": ["Newline"]},
    {"name": "EndSlide$ebnf$1", "symbols": ["EndSlide$ebnf$1", "Newline"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "EndSlide", "symbols": ["EndSlide$string$1", "EndSlide$ebnf$1"], "postprocess": id},
    {"name": "Block$subexpression$1", "symbols": ["Words"]},
    {"name": "Block$subexpression$1", "symbols": ["Title"]},
    {"name": "Block$subexpression$1", "symbols": ["Subtitle"]},
    {"name": "Block$subexpression$1", "symbols": ["CodeBlock"]},
    {"name": "Block$subexpression$1", "symbols": ["Image"]},
    {"name": "Block", "symbols": ["Indent", "Indent", "Block$subexpression$1", "Newline"], "postprocess":  
        data => data[2][0]
        },
    {"name": "CodeBlock$ebnf$1", "symbols": ["TrailingWord"], "postprocess": id},
    {"name": "CodeBlock$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "CodeBlock", "symbols": ["CodeFence", "CodeBlock$ebnf$1", "Newline", "Indent", "Indent", "Code", "CodeFence"], "postprocess": 
        data => data[0].concat(data[1]).concat(data[5])
        },
    {"name": "CodeFence$string$1", "symbols": [{"literal":"`"}, {"literal":"`"}, {"literal":"`"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CodeFence", "symbols": ["CodeFence$string$1"]},
    {"name": "Code$ebnf$1", "symbols": ["AnythingButBackTick"]},
    {"name": "Code$ebnf$1", "symbols": ["Code$ebnf$1", "AnythingButBackTick"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Code", "symbols": ["Code$ebnf$1"], "postprocess": 
        data => data[0].join("")
        },
    {"name": "AnythingButBackTick", "symbols": [/[^`]/]},
    {"name": "Words$ebnf$1", "symbols": []},
    {"name": "Words$ebnf$1", "symbols": ["Words$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Words", "symbols": ["Words$ebnf$1", "TrailingWord"], "postprocess": 
        data => `${data[0].join(' ')} ${data[1]}`
        },
    {"name": "TrailingWord$ebnf$1", "symbols": []},
    {"name": "TrailingWord$ebnf$1", "symbols": ["TrailingWord$ebnf$1", "Space"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "TrailingWord", "symbols": ["Characters", "TrailingWord$ebnf$1"], "postprocess":  
        nth(0)
        },
    {"name": "Characters$ebnf$1$subexpression$1", "symbols": ["Letter"]},
    {"name": "Characters$ebnf$1$subexpression$1", "symbols": ["Punctuation"]},
    {"name": "Characters$ebnf$1", "symbols": ["Characters$ebnf$1$subexpression$1"]},
    {"name": "Characters$ebnf$1$subexpression$2", "symbols": ["Letter"]},
    {"name": "Characters$ebnf$1$subexpression$2", "symbols": ["Punctuation"]},
    {"name": "Characters$ebnf$1", "symbols": ["Characters$ebnf$1", "Characters$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Characters", "symbols": ["Characters$ebnf$1"], "postprocess": 
        data => data[0].join("")
        },
    {"name": "Title$string$1", "symbols": [{"literal":"#"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Title", "symbols": ["Title$string$1", "Words"], "postprocess": hash},
    {"name": "Subtitle$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subtitle", "symbols": ["Subtitle$string$1", "Words"], "postprocess": hash},
    {"name": "Image$string$1", "symbols": [{"literal":"!"}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Image$ebnf$1", "symbols": ["Words"], "postprocess": id},
    {"name": "Image$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Image", "symbols": ["Image$string$1", "Image$ebnf$1", {"literal":"]"}, {"literal":"("}, "Url", {"literal":")"}], "postprocess": 
        data => [data[1]].concat(data[4])
        },
    {"name": "Url$ebnf$1", "symbols": ["AnythingButCloseParentheses"]},
    {"name": "Url$ebnf$1", "symbols": ["Url$ebnf$1", "AnythingButCloseParentheses"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Url", "symbols": ["Url$ebnf$1"], "postprocess": 
        data => data[0].join("")
        },
    {"name": "AnythingButCloseParentheses", "symbols": [/[^)]/]},
    {"name": "Done$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Done$ebnf$1", "symbols": []},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Space"]},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Newline"]},
    {"name": "Done$ebnf$1", "symbols": ["Done$ebnf$1", "Done$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Done", "symbols": ["Done$string$1", "Done$ebnf$1"]},
    {"name": "Word", "symbols": ["Characters", "Space"], "postprocess":  
        nth(0)
        },
    {"name": "Letter$subexpression$1", "symbols": ["LowercaseLetter"]},
    {"name": "Letter$subexpression$1", "symbols": ["UppercaseLetter"]},
    {"name": "Letter", "symbols": ["Letter$subexpression$1"]},
    {"name": "Punctuation", "symbols": [/[\.,':]/]},
    {"name": "LowercaseLetter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "UppercaseLetter", "symbols": [/[A-Z]/], "postprocess": id},
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
