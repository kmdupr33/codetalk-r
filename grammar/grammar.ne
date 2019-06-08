@builtin "postprocessors.ne"

CodeTalk -> Newline:* "codetalk" Newline Slide:+ Done {% 
  data => [data[1]].concat(data[3]).concat(data[4][1]) 
%}

Slide -> Indent "slide" Newline Markdown Indent EndSlide {% 
  (data) => [data[1]].concat(data[3]).concat(data[5])
%}

# one or more blocks, optionally separated by one or more empty blocks
Markdown -> Blocks:+
Blocks -> Block EmptyBlock:* {%
  data => data.filter(item => item[0]) // If there are no empty blocks, we don't want them showing up in the parse results
%}
EndSlide -> "end" Newline:+ {% id %}
# a new line ends a word AND a block
# if it ends a word, then you can have multiple letters at different indents
# if it only ends a block, then you have to leave a trailing space, which sucks
# if Letter+ (Space | Newline), then either end or Block
# TODO return and fix this, probably going to need a lexer and/or to leverage the reject feature (abandon the hope of this being a CFG)
Block -> Indent Indent (Title | Subtitle | Words) Newline {% 
  data => data[2][0]
%}
EmptyBlock -> Indent Indent Newline {% nth(2) %}
Title -> "# " Words {% hash %}
Subtitle -> "## " Words {% hash %}
Words -> Word:* TrailingWord {%
  data => `${data[0].join(' ')} ${data[1]}`
%}
TrailingWord -> Letter:+ Space:* {% 
  data => data[0].join("")
%}




# how do you know a word is finished?
# letters separated by spaces followed optionally by a letter with no space at the end
Word -> Letter:+ Space {% 
  data => data[0].join("")
%}
Letter -> (LowercaseLetter | UppercaseLetter)
LowercaseLetter -> [a-z] {% id %}
UppercaseLetter -> [A-Z] {% id %}
Done -> "end" (Space | Newline):*

@{%
  const hash = data => [data[0].trim()].concat([data[1]])
%}

# Whitespace
Newline -> "\n"
Indent -> "  "
Space -> " "
