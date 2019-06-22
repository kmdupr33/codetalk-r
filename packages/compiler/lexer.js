const moo = require("moo");

const lexer = moo.compile({
  UnorderedList: {
    match: /^\s*(?:[\-\*]\s+(?:[^\n]*)\n)*(?:[\-\*]\s+(?:[^\n]*)\n?)/,
    lineBreaks: true
  },
  OrderedList: {
    match: /^\s*(?:\d+\.\s+(?:[^\n]*)\n)*(?:\d+\.\s+(?:[^\n]*)\n?)/,
    lineBreaks: true
  },
  CodeBlock: {
    match: /```\w+[^]+```/,
    value: match => match.match(/(```)(\w+)([^]+)```/).slice(1, 4),
    lineBreaks: true
  },
  Newline: { match: /\n/, lineBreaks: true },
  Indent: "  ",
  codetalk: "codetalk",
  slide: "slide",
  end: "end",
  Image: {
    match: /\!\[.+?\]\([^)]+\)/,
    // Using capture groups to grab the text inside of [] and () because
    // we can't use capture groups in the actual match property :(
    // See https://github.com/no-context/moo#transform
    value: match => match.match(/\[(.+?)\]\(([^)]+)\)/).slice(1, 3)
  },
  Title: { match: /# .+/, value: match => ["#", match.trim().slice(2)] },
  Subtitle: { match: /## .+/, value: match => ["##", match.trim().slice(3)] },
});

module.exports = lexer;
