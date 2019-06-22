@builtin "postprocessors.ne"

@{%
  const lexer = require('../lexer');
%}
@lexer lexer

CodeTalk -> %Newline:* "codetalk" %Newline Slide:+ Done {% 
  data => [data[1].value].concat(data[3]) 
%}

Slide -> %Indent "slide" %Newline Markdown %Indent EndSlide {% 
  data => [data[1].value].concat(data[3]).concat(data[5].value)
%}

Markdown -> Blocks:+ {% id %}
Blocks -> Block EmptyBlock:* {%
  // If there are no empty blocks, we don't want them 
  // showing up in the parse results
  data => data[1][0] ? data : data.slice(0, -1)
%}
EmptyBlock -> %Indent:? %Indent:? %Newline {% 
  data => data[2].value
%}
EndSlide -> "end" %Newline:+ {% id %}

Block -> (OneLineBlock | List) {% 
  data => data[0][0]
%}

OneLineBlock -> %Indent %Indent (Words | Heading | %CodeBlock | %Image) %Newline {%
  data => data[2][0].value
%}

Words -> Word:* TrailingWord {%
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
%}

Heading -> (%Title | %Subtitle) {% 
  data => data[0][0]
%}

List -> (OrderedList | UnorderedList) {%
  data => data[0][0]
%}

Word -> (Characters | Span) Space {%
  data => data[0][0]
%}

Characters -> (Letter | Punctuation):+ {%
  data => data[0].join("")
%}

Span -> "*" Unspanned:+ "*" {% data => 
  [data[0]].concat([data[1].join("")])
%}
Unspanned -> [a-zA-Z ]

Done -> "end" (Space | %Newline):* {% id %}