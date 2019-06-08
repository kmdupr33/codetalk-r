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

Block -> Indent Indent (Words | Title | Subtitle | CodeBlock | Image) Newline {% 
  data => data[2][0]
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
  data => `${data[0].join(' ')} ${data[1]}`
%}
TrailingWord -> Characters Space:* {% 
  nth(0)
%}
Characters -> (Letter | Punctuation):+ {%
  data => data[0].join("")
%}
Title -> "# " Words {% hash %}
Subtitle -> "## " Words {% hash %}

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
Word -> Characters Space {% 
  nth(0)
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