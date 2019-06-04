@builtin "whitespace.ne"

CodeTalk -> Slide:+
Slide -> "PROSE" Newline Indent Word:+ Done
Newline -> "\n"
Indent -> "  "
Space -> " "
Word -> Letter:+ Space {% function(data) {
  return data[0].join("")
} %}
Letter -> [a-z] {% id %}
Done -> Newline "END" (Space | Newline)
