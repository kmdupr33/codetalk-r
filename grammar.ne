CodeTalk -> CodeTalkKeyWord Newline Slides Done
CodeTalkKeyWord -> "codetalk"
Slides -> Slide:+
Slide -> Indent "slide" Newline Indent Indent Word:+ Indent EndSlide
EndSlide -> "end" Newline:+
Newline -> "\n" {% nuller %}
Indent -> "  " {% nuller %}
Space -> " "
Word -> Letter:+ (Space | Newline) {% function(data) {
  return data[0].join("")
} %}
Letter -> [a-z] {% id %}
Done -> "end" (Space | Newline):*


@{%
  function nuller() {
    return null;
  }
%}
