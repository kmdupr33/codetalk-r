@builtin "whitespace.ne"

CodeTalk -> CodeTalkKeyWord __ Slides Done
CodeTalkKeyWord -> "codetalk"
Slides -> Slide:+
Slide -> _ "slide" __ Word:+ __ EndSlide
EndSlide -> "end" __
Word -> Letter:+ __ {% function(data) {
  return data[0].join("")
} %}
Letter -> [a-z] {% id %}
Done -> "end" _


@{%
  function nuller() {
    return null;
  }
%}
