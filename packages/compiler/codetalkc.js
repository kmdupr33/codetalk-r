#!/usr/bin/env node

const fs = require("fs");
const parser = require("./index");

const path = process.argv[2]
const source = fs.readFileSync(path, 'utf8');
parser.feed(source);
if (parser.results.length === 0) {
  console.error("unexpected end of input");
  return -1;
}

console.log(JSON.stringify(parser.results));
