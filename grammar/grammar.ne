@builtin "postprocessors.ne"

CodeTalk -> Newline:* "codetalk" Newline Slide:+ Done {% 
  data => [data[1]].concat(data[3]).concat(data[4][1]) 
%}

Slide -> Indent "slide" Newline Markdown Indent EndSlide {% 
  data => [data[1]].concat(data[3]).concat(data[5])
%}

Markdown -> Blocks:+
Blocks -> Block EmptyBlock:* {%
  // If there are no empty blocks, we don't want them 
  // showing up in the parse results
  data => data.filter(item => item[0]) 
%}
EmptyBlock -> Indent:? Indent:? Newline {% nth(2) %}
EndSlide -> "end" Newline:+ {% id %}

Block -> Indent Indent (Words | Heading | CodeBlock | Image | List) Newline {% 
  data => data[2][0]
%}

Heading -> (Title | Subtitle) {% 
  data => data[0][0] 
%}

List -> (OrderedList | UnorderedList) {%
  data => data[0][0]
%}

CodeBlock -> CodeFence TrailingWord:? Newline Indent Indent Code CodeFence {%
  data => data[0].concat(data[1]).concat(data[5])
%}
CodeFence -> "```"
Code -> AnythingButBackTick:+ {%
  data => data[0].join("")
%}
# This won't work if the code includes a backtick; Need to revisit
AnythingButBackTick -> [^`]

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
TrailingWord -> (Characters | Span) Space:* {% 
  data => data[0][0]
%}
Span -> "*" Unspanned:+ "*" {% data => 
  [data[0]].concat([data[1].join("")])
%}
Unspanned -> [a-zA-Z ]
Characters -> (Letter | Punctuation):+ {%
  data => data[0].join("")
%}
Title -> "# " Words {% hash %}
Subtitle -> "## " Words {% hash %}

# TODO Gross. Return w/ a lexer and do this right
PreIndentedTrailingListItem[X] -> $X Space Words
ListItem[X] -> Indent Indent $X Space Words Newline
TrailingListItem[X] -> Indent Indent $X Space Words

OrderedList -> (ListItem["1."]:* TrailingListItem["1."]) | PreIndentedTrailingListItem["1."]
UnorderedList -> (ListItem["*"]:* TrailingListItem["*"]) | PreIndentedTrailingListItem["*"]

# Image
Image -> "![" Words:? "]" "(" Url ")" {%
  data => [data[1]].concat(data[4])
%}

Url -> AnythingButCloseParentheses:+ {%
  data => data[0].join("")
%}

AnythingButCloseParentheses -> [^)]

Done -> "end" (Space | Newline):*

# Basic build blocks for Words
Word -> (Characters | Span) Space {% 
  data => data[0][0]
%}
Letter -> (LowercaseLetter | UppercaseLetter)
Punctuation -> [\.,':]
LowercaseLetter -> [a-z] {% id %}
UppercaseLetter -> [A-Z] {% id %}

# Whitespace
Newline -> "\n"
Indent -> "  "
Space -> " "

@{%
  const hash = data => [data[0].trim()].concat([data[1]])
%}