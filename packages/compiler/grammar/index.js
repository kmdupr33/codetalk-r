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
    {"name": "Markdown", "symbols": ["Markdown$ebnf$1"], "postprocess": id},
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
    {"name": "Block$subexpression$1", "symbols": ["Heading"]},
    {"name": "Block$subexpression$1", "symbols": ["CodeBlock"]},
    {"name": "Block$subexpression$1", "symbols": ["Image"]},
    {"name": "Block$subexpression$1", "symbols": ["List"]},
    {"name": "Block", "symbols": ["Indent", "Indent", "Block$subexpression$1", "Newline"], "postprocess":  
        data => data[2][0]
        },
    {"name": "Heading$subexpression$1", "symbols": ["Title"]},
    {"name": "Heading$subexpression$1", "symbols": ["Subtitle"]},
    {"name": "Heading", "symbols": ["Heading$subexpression$1"], "postprocess":  
        data => data[0][0] 
        },
    {"name": "List$subexpression$1", "symbols": ["OrderedList"]},
    {"name": "List$subexpression$1", "symbols": ["UnorderedList"]},
    {"name": "List", "symbols": ["List$subexpression$1"], "postprocess": 
        data => data[0][0]
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
        data => data[0]
          .join("")
          .replace(/\n    /g, '\n')
        },
    {"name": "AnythingButBackTick", "symbols": [/[^`]/]},
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
    {"name": "TrailingWord$subexpression$1", "symbols": ["Characters"]},
    {"name": "TrailingWord$subexpression$1", "symbols": ["Span"]},
    {"name": "TrailingWord$ebnf$1", "symbols": []},
    {"name": "TrailingWord$ebnf$1", "symbols": ["TrailingWord$ebnf$1", "Space"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "TrailingWord", "symbols": ["TrailingWord$subexpression$1", "TrailingWord$ebnf$1"], "postprocess":  
        data => data[0][0]
        },
    {"name": "Span$ebnf$1", "symbols": ["Unspanned"]},
    {"name": "Span$ebnf$1", "symbols": ["Span$ebnf$1", "Unspanned"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Span", "symbols": [{"literal":"*"}, "Span$ebnf$1", {"literal":"*"}], "postprocess":  data => 
        [data[0]].concat([data[1].join("")])
        },
    {"name": "Unspanned", "symbols": [/[a-zA-Z ]/]},
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
    {"name": "OrderedList$subexpression$1$ebnf$1", "symbols": []},
    {"name": "OrderedList$subexpression$1$ebnf$1$macrocall$2$string$1", "symbols": [{"literal":"1"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OrderedList$subexpression$1$ebnf$1$macrocall$2", "symbols": ["OrderedList$subexpression$1$ebnf$1$macrocall$2$string$1"]},
    {"name": "OrderedList$subexpression$1$ebnf$1$macrocall$1", "symbols": ["Indent", "Indent", "OrderedList$subexpression$1$ebnf$1$macrocall$2", "Space", "Words", "Newline"]},
    {"name": "OrderedList$subexpression$1$ebnf$1", "symbols": ["OrderedList$subexpression$1$ebnf$1", "OrderedList$subexpression$1$ebnf$1$macrocall$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "OrderedList$subexpression$1$macrocall$2$string$1", "symbols": [{"literal":"1"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OrderedList$subexpression$1$macrocall$2", "symbols": ["OrderedList$subexpression$1$macrocall$2$string$1"]},
    {"name": "OrderedList$subexpression$1$macrocall$1", "symbols": ["Indent", "Indent", "OrderedList$subexpression$1$macrocall$2", "Space", "Words"]},
    {"name": "OrderedList$subexpression$1", "symbols": ["OrderedList$subexpression$1$ebnf$1", "OrderedList$subexpression$1$macrocall$1"]},
    {"name": "OrderedList", "symbols": ["OrderedList$subexpression$1"]},
    {"name": "OrderedList$macrocall$2$string$1", "symbols": [{"literal":"1"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OrderedList$macrocall$2", "symbols": ["OrderedList$macrocall$2$string$1"]},
    {"name": "OrderedList$macrocall$1", "symbols": ["OrderedList$macrocall$2", "Space", "Words"]},
    {"name": "OrderedList", "symbols": ["OrderedList$macrocall$1"]},
    {"name": "UnorderedList$subexpression$1$ebnf$1", "symbols": []},
    {"name": "UnorderedList$subexpression$1$ebnf$1$macrocall$2", "symbols": [{"literal":"*"}]},
    {"name": "UnorderedList$subexpression$1$ebnf$1$macrocall$1", "symbols": ["Indent", "Indent", "UnorderedList$subexpression$1$ebnf$1$macrocall$2", "Space", "Words", "Newline"]},
    {"name": "UnorderedList$subexpression$1$ebnf$1", "symbols": ["UnorderedList$subexpression$1$ebnf$1", "UnorderedList$subexpression$1$ebnf$1$macrocall$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "UnorderedList$subexpression$1$macrocall$2", "symbols": [{"literal":"*"}]},
    {"name": "UnorderedList$subexpression$1$macrocall$1", "symbols": ["Indent", "Indent", "UnorderedList$subexpression$1$macrocall$2", "Space", "Words"]},
    {"name": "UnorderedList$subexpression$1", "symbols": ["UnorderedList$subexpression$1$ebnf$1", "UnorderedList$subexpression$1$macrocall$1"]},
    {"name": "UnorderedList", "symbols": ["UnorderedList$subexpression$1"]},
    {"name": "UnorderedList$macrocall$2", "symbols": [{"literal":"*"}]},
    {"name": "UnorderedList$macrocall$1", "symbols": ["UnorderedList$macrocall$2", "Space", "Words"]},
    {"name": "UnorderedList", "symbols": ["UnorderedList$macrocall$1"]},
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
    {"name": "Word$subexpression$1", "symbols": ["Characters"]},
    {"name": "Word$subexpression$1", "symbols": ["Span"]},
    {"name": "Word", "symbols": ["Word$subexpression$1", "Space"], "postprocess":  
        data => data[0][0]
        },
    {"name": "Letter$subexpression$1", "symbols": ["LowercaseLetter"]},
    {"name": "Letter$subexpression$1", "symbols": ["UppercaseLetter"]},
    {"name": "Letter", "symbols": ["Letter$subexpression$1"]},
    {"name": "Punctuation", "symbols": [/[\.,':]/]},
    {"name": "LowercaseLetter", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "UppercaseLetter", "symbols": [/[A-Z]/], "postprocess": id},
    {"name": "Newline", "symbols": [{"literal":"\n"}], "postprocess": id},
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
