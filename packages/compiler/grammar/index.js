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


  const lexer = require('../lexer');
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "CodeTalk$ebnf$1", "symbols": []},
    {"name": "CodeTalk$ebnf$1", "symbols": ["CodeTalk$ebnf$1", (lexer.has("Newline") ? {type: "Newline"} : Newline)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk$ebnf$2", "symbols": ["Slide"]},
    {"name": "CodeTalk$ebnf$2", "symbols": ["CodeTalk$ebnf$2", "Slide"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CodeTalk", "symbols": ["CodeTalk$ebnf$1", {"literal":"codetalk"}, (lexer.has("Newline") ? {type: "Newline"} : Newline), "CodeTalk$ebnf$2", "Done"], "postprocess":  
        data => [data[1].value].concat(data[3]) 
        },
    {"name": "Slide", "symbols": [(lexer.has("Indent") ? {type: "Indent"} : Indent), {"literal":"slide"}, (lexer.has("Newline") ? {type: "Newline"} : Newline), "Markdown", (lexer.has("Indent") ? {type: "Indent"} : Indent), "EndSlide"], "postprocess":  
        data => [data[1].value].concat(data[3]).concat(data[5].value)
        },
    {"name": "Markdown$ebnf$1", "symbols": ["Blocks"]},
    {"name": "Markdown$ebnf$1", "symbols": ["Markdown$ebnf$1", "Blocks"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Markdown", "symbols": ["Markdown$ebnf$1"], "postprocess": id},
    {"name": "Blocks$ebnf$1", "symbols": []},
    {"name": "Blocks$ebnf$1", "symbols": ["Blocks$ebnf$1", "EmptyBlock"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Blocks", "symbols": ["Block", "Blocks$ebnf$1"], "postprocess": 
        // If there are no empty blocks, we don't want them 
        // showing up in the parse results
        data => data[1][0] ? data : data.slice(0, -1)
        },
    {"name": "EmptyBlock$ebnf$1", "symbols": [(lexer.has("Indent") ? {type: "Indent"} : Indent)], "postprocess": id},
    {"name": "EmptyBlock$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EmptyBlock$ebnf$2", "symbols": [(lexer.has("Indent") ? {type: "Indent"} : Indent)], "postprocess": id},
    {"name": "EmptyBlock$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EmptyBlock", "symbols": ["EmptyBlock$ebnf$1", "EmptyBlock$ebnf$2", (lexer.has("Newline") ? {type: "Newline"} : Newline)], "postprocess":  
        data => data[2].value
        },
    {"name": "EndSlide$ebnf$1", "symbols": [(lexer.has("Newline") ? {type: "Newline"} : Newline)]},
    {"name": "EndSlide$ebnf$1", "symbols": ["EndSlide$ebnf$1", (lexer.has("Newline") ? {type: "Newline"} : Newline)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "EndSlide", "symbols": [{"literal":"end"}, "EndSlide$ebnf$1"], "postprocess": id},
    {"name": "Block$subexpression$1", "symbols": ["OneLineBlock"]},
    {"name": "Block$subexpression$1", "symbols": ["List"]},
    {"name": "Block", "symbols": ["Block$subexpression$1"], "postprocess":  
        data => data[0][0]
        },
    {"name": "OneLineBlock$subexpression$1", "symbols": ["Words"]},
    {"name": "OneLineBlock$subexpression$1", "symbols": ["Heading"]},
    {"name": "OneLineBlock$subexpression$1", "symbols": [(lexer.has("CodeBlock") ? {type: "CodeBlock"} : CodeBlock)]},
    {"name": "OneLineBlock$subexpression$1", "symbols": [(lexer.has("Image") ? {type: "Image"} : Image)]},
    {"name": "OneLineBlock", "symbols": [(lexer.has("Indent") ? {type: "Indent"} : Indent), (lexer.has("Indent") ? {type: "Indent"} : Indent), "OneLineBlock$subexpression$1", (lexer.has("Newline") ? {type: "Newline"} : Newline)], "postprocess": 
        data => data[2][0].value
        },
    {"name": "Words$ebnf$1", "symbols": []},
    {"name": "Words$ebnf$1", "symbols": ["Words$ebnf$1", "Word"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Words", "symbols": ["Words$ebnf$1", "TrailingWord"], "postprocess": 
        data => {
          // TODO There's still another weird case we need to handle
          // that results in lines like this: [ [ [ '*', 'lead' ], 'with', 'this' ] ]
          // which should be this instead: [ [ [ '*', 'lead' ], 'with this' ] ]
          const firstNonEmptyMatch = data.find(match => match.length > 0);
          if (Array.isArray(firstNonEmptyMatch) && firstNonEmptyMatch.some(match => match.includes('*'))) {
            return data[0].concat(data[1]);
          }
          if (Array.isArray(data[1]) && data[1].includes('*')) {
            return [data[0].join(" ")].concat([data[1]]);
          }
          return `${data[0].join(" ")} ${data[1]}`
        }
        },
    {"name": "Heading$subexpression$1", "symbols": [(lexer.has("Title") ? {type: "Title"} : Title)]},
    {"name": "Heading$subexpression$1", "symbols": [(lexer.has("Subtitle") ? {type: "Subtitle"} : Subtitle)]},
    {"name": "Heading", "symbols": ["Heading$subexpression$1"], "postprocess":  
        data => data[0][0]
        },
    {"name": "List$subexpression$1", "symbols": ["OrderedList"]},
    {"name": "List$subexpression$1", "symbols": ["UnorderedList"]},
    {"name": "List", "symbols": ["List$subexpression$1"], "postprocess": 
        data => data[0][0]
        },
    {"name": "Word$subexpression$1", "symbols": ["Characters"]},
    {"name": "Word$subexpression$1", "symbols": ["Span"]},
    {"name": "Word", "symbols": ["Word$subexpression$1", "Space"], "postprocess": 
        data => data[0][0]
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
    {"name": "Span$ebnf$1", "symbols": ["Unspanned"]},
    {"name": "Span$ebnf$1", "symbols": ["Span$ebnf$1", "Unspanned"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Span", "symbols": [{"literal":"*"}, "Span$ebnf$1", {"literal":"*"}], "postprocess":  data => 
        [data[0]].concat([data[1].join("")])
        },
    {"name": "Unspanned", "symbols": [/[a-zA-Z ]/]},
    {"name": "Done$ebnf$1", "symbols": []},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": ["Space"]},
    {"name": "Done$ebnf$1$subexpression$1", "symbols": [(lexer.has("Newline") ? {type: "Newline"} : Newline)]},
    {"name": "Done$ebnf$1", "symbols": ["Done$ebnf$1", "Done$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Done", "symbols": [{"literal":"end"}, "Done$ebnf$1"], "postprocess": id}
]
  , ParserStart: "CodeTalk"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
