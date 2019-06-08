@builtin "postprocessors.ne"

CodeTalk -> "codetalk" Newline Slide:+ Done {% 
  data => [data[0]].concat(data[2]).concat(data[3][0]) 
%}

Slide -> Indent "slide" Newline Markdown Indent EndSlide {% 
  data => [data[1]].concat(data[3]).concat(data[5])
%}

Markdown -> Block:+
EndSlide -> "end" Newline:+ {% id %}
# a new line ends a word AND a block
# if it ends a word, then you can have multiple letters at different indents
# if it only ends a block, then you have to leave a trailing space, which sucks
# if Letter+ (Space | Newline), then either end or Block
# TODO return and fix this, probably going to need a lexer and/or to leverage the reject feature (abandone the hope of this being a CFG)
Block -> Indent Indent Word:+ Newline:* {% 
  data => data[2].join(' ') 
%}
Word -> Letter:+ (Space | Newline) {% 
  data => data[0].join("")
%}
Letter -> [a-z] {% id %}
Done -> "end" (Space | Newline):*


# Whitespace
Newline -> "\n"
Indent -> "  "
Space -> " "
