@builtin "whitespace.ne"

CodeTalk -> Slide:+
Slide -> Word:+ (Separator | Done)
Word -> [a-z] {% id %}
Separator -> "---" {% id %}
Done -> __
