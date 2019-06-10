#!/usr/bin/env node

const parser = require("./index");

let codetalkSource = "";
process.stdin.setEncoding('utf8');
process.stdin.on("readable", () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    codetalkSource += chunk;
  }
});

process.stdin.on("end", () => {
  parser.feed(codetalkSource);
  if (parser.results.length === 0) {
    console.error("unexpected end of input");
    return -1;
  }

  console.log(JSON.stringify(parser.results));
});
